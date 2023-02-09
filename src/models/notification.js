const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  title: String,
  text: String,
  task: String,
  plant: {}, 

});
 
module.exports = mongoose.model("Notification", NotificationSchema);