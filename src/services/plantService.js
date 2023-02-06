const PlantModel = require("../models/plant");
 
exports.getAllPlants = async () => {
  return await PlantModel.find();
};
 
exports.createPlant = async (plant) => {
  return await PlantModel.create(plant);
};

exports.getPlantById = async (id) => {
  return await PlantModel.findById(id);
};
 
exports.updatePlant = async (id, plant) => {
  return await PlantModel.findByIdAndUpdate(id, plant);
};
 
exports.deletePlant = async (id) => {
  return await PlantModel.findByIdAndDelete(id);
};

exports.getHistoryByPlantId = async (id) => {
  const plant = await PlantModel.findById(id);
  const tasksHistory = { 
    water: plant.details.water.history, 
    soil: plant.details.soil.history, 
    light: plant.details.light.history, 
    fertilizer: plant.details.fertilizer.history
  }
  return tasksHistory;
}

exports.getPlantDetails = async (id) => {
  const plant = await PlantModel.findById(id);
  return plant.details;
}

exports.getHistoryByTask = async (id, task) => {
  const plant = await PlantModel.findById(id);
  const tasksHistory = plant.details[task].history;
  return tasksHistory;
}

exports.getPlantScore = async (id) => {
  const plant = await PlantModel.findById(id);
  const score = plant.score;
  return score;
}