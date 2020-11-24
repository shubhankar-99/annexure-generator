const express=require('express');
const mongoose= require('mongoose');
var cors = require('cors')
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const User=require('./models/user');
const {auth} =require('./middlewares/auth');
const db=require('./config/config').get(process.env.NODE_ENV);



const app=express();
// app use
app.use(cors())
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());


// database connection
mongoose.Promise=global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});


// adding new user (sign-up route)
app.post('/api/register',function(req,res){
   // taking a user
   const newuser=new User(req.body);
   console.log(newuser);

   if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
   
   User.findOne({email:newuser.email},function(err,user){
       if(user) return res.status(400).json({ auth : false, message :"email exits"});

       newuser.save((err,doc)=>{
           if(err) {console.log(err);
               return res.status(400).json({ success : false});}
           res.status(200).json({
               succes:true,
               user : doc
           });
       });
   });
});


// login user
app.post('/api/login', function(req,res){
    let token=req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) return  res(err);
        if(user) return res.status(400).json({
            error :true,
            message:"You are already logged in"
        });
    
        else{
            User.findOne({'email':req.body.email},function(err,user){
                if(!user) return res.json({isAuth : false, message : ' Auth failed ,email not found'});
        
                user.comparepassword(req.body.password,(err,isMatch)=>{
                    if(!isMatch) return res.json({ isAuth : false,message : "password doesn't match"});
        
                user.generateToken((err,user)=>{
                    if(err) return res.status(400).send(err);
                    res.cookie('auth',user.token).json({
                        isAuth : true,
                        id : user._id
                        ,email : user.email
                    });
                });    
            });
          });
        }
    });
});

//logout user
 app.get('/api/logout',auth,function(req,res){
        req.user.deleteToken(req.token,(err,user)=>{
            if(err) return res.status(400).send(err);
            res.sendStatus(200);
        });

    }); 

// get logged in user
app.get('/api/profile',auth,function(req,res){
        res.json({
            isAuth: true,
            id: req.user._id,
            email: req.user.email,
            name: req.user.firstname + req.user.lastname
            
        })
});

//For Letter Head Post Request
app.post('/api/letterHeadPost', auth, function (req, res) {

    let token = req.cookies.auth;
    //console.log(req.user);

    User.findByToken(token, (err, user) => {
        if (err) return res.json(err)
        else if(!req.body.name 
            || !req.body.college 
            || !req.body.date 
            || !req.body.title 
            || !req.body.duration 
            || !req.body.email){

            return res.json("All fields are required")
        }
        else if (user) {
           // console.log(user.email);
            // console.log(req.body.name);
            // console.log(req.body.email);
            // console.log(req.body.college);
            // console.log(req.body.date);
            // console.log(req.body.title);
            // console.log(req.body.duration);
            
            User.findOneAndUpdate(
                { email: user.email },
                {$push: {letterHead: {
                            "name":req.body.name,
                            "college":req.body.college,
                            "date": req.body.date,
                            "title": req.body.title,
                            "duration": req.body.duration,
                            "email": req.body.email
                        }
                        }},
                        function( error, result){
                            if(error)
                            return res.json(error);
                            else
                            return res.json('Successful');
                        }
                        )
                        
            
        }
        else {
            return res.json('Error');
        }
    });
});

//For Letter Head Get Request
app.get('/api/letterHeadGet', auth, function (req, res) {
    res.json({
        letterHead: req.user.letterHead
    });
   console.log(req.user.letterHead);
});

//For Annexure Post Request
app.post('/api/annexurePost', auth, function (req, res) {

    let token = req.cookies.auth;
    //console.log(req.user);

    User.findByToken(token, (err, user) => {
        if (err) return res.json(err)
        else if(!req.body.name 
            || !req.body.date 
            || !req.body.position 
            || !req.body.duration 
            || !req.body.stipend 
            || !req.body.place)
        {
            return res.json("All fields are required")
        }
        else if (user) {
            // console.log(req.user.email);
            // console.log(req.body.name);
            // console.log(req.body.position);
            // console.log(req.body.date);
            // console.log(req.body.stipend);
            // console.log(req.body.place);
            // console.log(req.body.duration);

            User.findOneAndUpdate(
                { email: user.email },
                {
                    $push: {
                        annexure: {
                            "name": req.body.name,
                            "date": req.body.date,
                            "position": req.body.position,
                            "duration": req.body.duration,
                            "stipend": req.body.stipend,
                            "place": req.body.place
                        }
                    }
                },
                function( error, result){
                    if(error)
                    return res.json(error);
                    else
                    return res.json('Successful');
                }

            )

           // return res.json('Successful');
        }
        else {
            return res.json('Error');
        }
    });
});

//For Annexure Get
app.get('/api/annexureGet', auth, function (req, res) {
    res.json({
        annexure: req.user.annexure
    });
   // console.log(req.user.annexure);
});


app.get('/',function(req,res){
    res.status(200).send(`Welcome to login , sign-up api`);
});

// listening port
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});
