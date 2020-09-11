const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProductSchema = new Schema({
        sku: { type: Number, require: true },
        productName: { type: String, require: true },
        currentInventory: { type: Number, require: true },
        minInventory: { type: Number, require: true },
        cost: { type: Number, require: true },
        retail: { type: Number, require: true },
        userId: { type: String, required: true }
});

module.exports = UserProducts = mongoose.model("userProduct", UserProductSchema);