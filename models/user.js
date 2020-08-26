const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    data: {
        sku: { 
            type: Number
        },
        productName: { 
            type: String
        },
        description: { 
            type: String 
        },
        currentInventory: { 
            type: Number
        },
        minInventory: { 
            type: Number 
        },
        cost: { 
            type: Number 
        },
        retail: { 
            type: Number 
        }
    },
    date: {
        type: Date,
        default:Date.now
    }
});


module.exports = User = mongoose.model("user", UserSchema);