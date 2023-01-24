const express = require("express");
const {
  getAllPlants,
  createPlant,
  getPlantById,
  updatePlant,
  deletePlant,
  updatePlantTask,
  getPlantCicle
} = require("../controllers/PlantController");
 
const router = express.Router();
 
router.route("/").get(getAllPlants).post(createPlant);
router.route("/:id").get(getPlantById).put(updatePlant).delete(deletePlant);
router.route('/:id/task').put(updatePlantTask)
router.route('/:id/task/enable').get(getPlantCicle)
 
module.exports = router;