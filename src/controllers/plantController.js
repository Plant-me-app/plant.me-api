const plantService = require("../services/plantService");
 
exports.getAllPlants = async (req, res) => {
  try {
    const plants = await plantService.getAllPlants();
    res.json({ data: plants, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createPlant = async (req, res) => {
  try {
    const createdDate = new Date();
    const plant = await plantService.createPlant({...req.body, createdDate});
    res.json({ data: plant, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getPlantById = async (req, res) => {
  try {
    const plant = await plantService.getPlantById(req.params.id);
    res.json({ data: plant, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updatePlant = async (req, res) => {
  try {
    const plant = await plantService.updatePlant(req.params.id, req.body);
    res.json({ data: plant, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deletePlant = async (req, res) => {
  try {
    const plant = await plantService.deletePlant(req.params.id);
    res.json({ data: plant, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};