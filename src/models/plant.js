const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: String,
  species: {},
  size: String,
  image: Number,
  createdDate: Date,
  score: {
    level: Number,
    points: Number,
  },
  details: {
    water: {
      lastDate: "",
      history: []
    },
    soil: {
        lastDate: "",
        history: []
    },
    light: {
        lastDate: "",
        history: []
    },
    fertilizer: {
        lastDate: "",
        history: []
    },
  }
});
 
module.exports = mongoose.model("Plant", plantSchema);