const express = require('express');
const router = express.Router();
const bcypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

router.post('/', (req, res) => {
   const { email, password } = req.body;

   //Validation
   if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
   }

   // check existing user
   User.findOne({ email }).then((user) => {
      if (!user) return res.status(400).json({ msg: 'User Does not exist' });

      // Validate password
      bcypt.compare(password, user.password).then((isMatch) => {
         if (!isMatch)
            return res.status(400).json({ msg: 'Invalid credentials' });

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

router.get('/user', auth, (req, res) => {
   User.findById(req.user.id)
      .select('-password')
      .then((user) => res.json(user));
});

module.exports = router;
