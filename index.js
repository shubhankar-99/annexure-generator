const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const path = require('path');
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/user");
const { auth } = require("./middlewares/auth");

const db = require("./config/config").get(process.env.NODE_ENV);

const app = express();
// app use
app.use(cors());

app.use(express.static(path.join(__dirname, "Client")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'Client', 'build', 'index.html'))
})


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(
  db.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) console.log(err);
    console.log("database is connected");
  }
);

// adding new user (sign-up route)
app.post("/api/register", function (req, res) {
  // taking a user
  const newuser = new User(req.body);
  console.log(newuser);

  if (newuser.password != newuser.password2)
    return res.status(400).json({ message: "password not match" });

  User.findOne({ email: newuser.email }, function (err, user) {
    if (user)
      return res.status(400).json({ auth: false, message: "email exits" });

    newuser.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ success: false });
      }
      res.status(200).json({
        succes: true,
        user: doc,
      });
    });
  });
});

// login user
app.post("/api/login", function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (!user)
      return res.json({
        isAuth: false,
        message: " Auth failed ,email not found",
      });

    user.comparepassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          isAuth: false,
          message: "password doesn't match",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("auth", user.token).json({
          token: user.token,
          isAuth: true,
          id: user._id,
          email: user.email,
        });
      });
    });
  });
});

//logout user
app.get("/api/logout", auth, function (req, res) {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
});

// get logged in user
app.get("/api/profile", auth, function (req, res) {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    name: req.user.firstname + req.user.lastname,
  });
});

//For Letter Head Post Request
app.post("/api/letterHeadPost", auth, async function (req, res) {
  try {
    let token = req.token;
    let user = req.user;
    await User.findOneAndUpdate(
      { email: user.email },
      {
        $push: {
          letterHead: {
            name: req.body.name,
            college: req.body.college,
            date: req.body.date,
            title: req.body.title,
            duration: req.body.duration,
            email: req.body.email,
          },
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//For Letter Head Get Request
app.get("/api/letterHeadGet", auth, function (req, res) {
  try {
    console.log(req.user);
    res.json({
      letterHead: req.user.letterHead,
    });
  } catch (err) {
    res.status(500)({
      error: err,
    });
  }
  //    console.log(req.user.letterHead);
});

//For Annexure Post Request
app.post("/api/annexurePost", auth, async function (req, res) {
  try {
    // let token = req.token;
    let user = req.user;
    await User.findOneAndUpdate(
      { email: user.email },
      {
        $push: {
          annexure: {
            name: req.body.name,
            date: req.body.date,
            position: req.body.position,
            duration: req.body.duration,
            stipend: req.body.stipend,
            place: req.body.place,
          },
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//For Annexure Get
app.get("/api/annexureGet", auth, function (req, res) {
  res.json({
    annexure: req.user.annexure,
  });
  // console.log(req.user.annexure);
});

//For Invoice Post
app.post("/api/invoicePost", auth, async function (req, res) {
  try {
    // let token = req.token;
    let user = req.user;
    await User.findOneAndUpdate(
      { email: user.email },
      {
        $push: {
          invoice: {
           
            number: req.body.number,
            date: req.body.date,
            dueDate: req.body.dueDate,
            
            itemName: req.body.itemName,
            quantity: req.body.quantity,
            rate: req.body.rate,

            senderName: req.body.senderName,
            senderEmail: req.body.senderEmail,
            senderMobileNumber: req.body.senderMobileNumber,
            senderCity: req.body.senderCity,

            recieverName: req.body.recieverName,
            recieverEmail: req.body.recieverEmail,
            recieverMobileNumber: req.body.recieverMobileNumber,
            recieverCity: req.body.recieverCity,

            tax: req.body.tax,
            discount: req.body.discount

          },
        },
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//For Invoice Get
app.get("/api/invoiceGet", auth, function (req, res) {
  res.json({
    invoice: req.user.invoice,
  });
  // console.log(req.user.invoice);
});

// app.get("/", function (req, res) {
//   res.status(200).send(`Welcome to login , sign-up api`);
// });

// listening port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is live at ${PORT}`);
});
