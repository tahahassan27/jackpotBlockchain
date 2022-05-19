const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: { type: String, required: true },
  walletAddress : {type: String, required: true}
},{timestamps: true}
);

module.exports = mongoose.model("admin", adminSchema);