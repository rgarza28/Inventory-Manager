require('dotenv').config();
const jwt = require('jsonwebtoken');

//Protects authorization to other pages
function auth(req, res, next) {
   const token = req.header('x-auth-token');
   //check for token
   if (!token) {
     return res.status(401).json({ msg: 'No token, authorization denied 1' });
   }

   try {
      //verify token
      const decoded = jwt.verify(token, process.env.MONGODB_URI);
      if (!decoded){
         return res
         .status(401)
         .json({ msg: 'No token, authorization denied 2' });
      }
      //add user from payload
      req.user = decoded;
      next();
   } catch (e) {
     return res.status(400).json({ msg: 'Token is not valid' });
   }
}

module.exports = auth;
