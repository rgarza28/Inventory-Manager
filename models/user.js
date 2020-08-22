const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  data: [UserData],
});

User.methods = {
  checkPassword: (inputPassword) => {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, saltRounds);
  },
};

const UserData = new Schema({
  sku: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  currentInventory: { type: Number, required: true },
  minInventory: { type: Number, required: true },
  cost: { type: Number, required: true },
  retail: { type: Number, required: true },
});

const Users = mongoose.model("User", User);

module.exports = Users;
