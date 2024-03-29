var mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const confiq=require('../config/config').get(process.env.NODE_ENV);
const salt=10;

const userSchema=mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        maxlength: 20
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 20
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type:String,
        required: true,
        minlength:5
    },
    password2:{
        type:String,
        required: true,
        minlength:5

    },
    token:{
        type: String
    },
    letterHead : { type : Array , "default" : [] },
    annexure : { type : Array , "default" : [] },
    invoice : { type : Array , "default" : [] }

    
});
// to signup a user
userSchema.pre('save',function(next){
    var user=this;
    
    if(user.isModified('password')){
        bcrypt.genSalt(salt,function(err,salt){
            if(err)return next(err);

            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password=hash;
                user.password2=hash;
                next();
            })

        })
    }
    else{
        next();
    }
});

//to login
userSchema.methods.comparepassword=function(password,cb){
    bcrypt.compare(password,this.password,function(err,isMatch){
        if(err) return cb(next);
        cb(null,isMatch);
    });
}

// generate token

userSchema.methods.generateToken=function(cb){
    var user =this;
    var token=jwt.sign(user._id.toHexString(),confiq.SECRET);

    user.token=token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}

// find by token
userSchema.statics.findByToken=async function(token){
    try{
    var user =this;
    return jwt.verify(token,confiq.SECRET, async function(err,decode){
        console.log(decode)
        let user1 = await user.findOne({"_id": decode})
        console.log(user1)
        return user1;
    })
}
catch(err){
    console.log(err);
    throw err;
}
};

//delete token

userSchema.methods.deleteToken=function(token,cb){
    var user=this;

    user.update({$unset : {token :1}},function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}


module.exports=mongoose.model('User',userSchema);