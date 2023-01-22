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
  return plant.details.water.history;
}