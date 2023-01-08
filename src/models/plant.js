const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: String,
  species: {},
  size: String,
  image: Number,
  createdDate: Date
});
 
module.exports = mongoose.model("Plant", plantSchema);