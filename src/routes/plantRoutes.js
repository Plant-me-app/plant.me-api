const express = require("express");
const {
  getAllPlants,
  createPlant,
  getPlantById,
  updatePlant,
  deletePlant,
} = require("../controllers/PlantController");
 
const router = express.Router();
 
router.route("/").get(getAllPlants).post(createPlant);
router.route("/:id").get(getPlantById).put(updatePlant).delete(deletePlant);
 
module.exports = router;