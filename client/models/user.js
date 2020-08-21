const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema ({
    user: { type: String, required: true },
    data: [UserData]
});

const UserData = new Schema ({
    sku: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    currentInventory: { type: Number, required: true },
    minInventory: { type: Number, required: true },
    cost: { type: Number, required: true },
    retail: { type: Number, required: true }
});

const Users = mongoose.model("User", User);





module.exports = Users;