const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

router.post('/', (req, res) => {
   const { name, email, password } = req.body;

   //Validation
   if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
   }

   // Email Validation
   if (email.length < 11) {
      return res.status(400).json({ msg: 'email is invalid' });
   }

   // Password Validation
   if (password.length < 8) {
      return res.status(400).json({ msg: 'Password is too short' });
   }

   if (password.length > 24) {
      return res.status(400).json({ msg: 'Password is too long' });
   }

   // check existing user
   User.findOne({ email }).then((user) => {
      if (user) return res.status(400).json({ msg: 'User already exist' });

      const newUser = new User({
         name,
         email,
         password,
      });

      // Create salt and hash
      bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then((user) => {
               jwt.sign(
                  { id: user.id },
                  process.env.MONGODB_URI,
                  { expiresIn: 3600 },
                  (err, token) => {
                     if (err) throw err;
                     res.json({
                        token,
                        user: {
                           id: user.id,
                           name: user.name,
                           email: user.email,
                        },
                     });
                  }
               );
            });
         });
      });
   });
});

module.exports = router;
