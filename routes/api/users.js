const express = require('express');
const router = express.Router();
const bcypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

router.post("/", (req, res) => {
    const { name, email, password, data } = req.body;

    //Validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields"});
    }

    // check existing user
    User.findOne({email})
        .then(user => {
            if(user) return res.status(400).json({ msg: "User already exist"});

            const newUser = new User({
                name,
                email,
                password,
                data
            });

            // Create salt and hash
            bcypt.genSalt(10, (err, salt) => {
              bcypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                  newUser.password = hash;
                    newUser.save()
                      .then(user => {

                        jwt.sign(
                            { id: user.id },
                            config.get("jwtSecret"),
                            { expiresIn: 3600 }, 
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                      id: user.id,
                                      name: user.name,
                                      email: user.email,
                                      data: user.data
                                    }
                                });
                            }
                        )
                      });
                });
            })
        });
});

module.exports = router;