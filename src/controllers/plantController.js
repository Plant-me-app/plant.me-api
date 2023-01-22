const plantService = require("../services/plantService");
const { getHistory } = require("../utils/history");
 
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
    const details = {
      water: {
        lastDate: "",
        history: []
      }
    }
    const plant = await plantService.createPlant({...req.body, createdDate, details});
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

exports.updatePlantWater = async (req, res) => {
  try {
    const updatedHistory = await getHistory(req.params.id);
    const lastDateUpdated = updatedHistory.slice(-1);
    const details = {
      water: {
        history: updatedHistory,
        lastDate: lastDateUpdated
      }
    }
    const plant = await plantService.updatePlant(req.params.id, {details: details});
    res.json({ data: plant, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};