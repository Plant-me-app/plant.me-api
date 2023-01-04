const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: String,
  species: String,
  size: String,
  image: String
});
 
module.exports = mongoose.model("Plant", plantSchema);