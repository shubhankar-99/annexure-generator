const User = require("./../models/user");

let auth = async (req, res, next) => {
  try {
    let header = req.headers["authorization"];
    if (!header) {
      return res.status(401).json({ error: "authorization header is missing" });
    }
    let token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "authorization token is missing" });
    }
    let user = await User.findByToken(token);
    console.log(user)
    if (!user) {
      return res.status(401).json({
        error: "Invalid or malformed token",
      });
    } else {
      req.token = token;
      req.user = user;
      console.log(user);
      next();
    }
  } catch (err) {
    return res.status(400).json({
      error: "Server Error",
      error_description: err,
    });
  }
};

module.exports = { auth };
