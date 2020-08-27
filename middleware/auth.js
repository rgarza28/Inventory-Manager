require('dotenv').config()
const jwt = require("jsonwebtoken");

//Protects authorization to other pages
function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //check for token
  if(!token) {
      res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    //verify token
    const decoded = jwt.verify(token, process.env.MONGODB_URI);
    //add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
 
}

module.exports = auth;