const plantService = require("../services/plantService");
const { getTaskHistory } = require("../utils/history");
const { getTaskCicle } = require("../utils/taskCicle");
 
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

exports.updatePlantTask = async (req, res) => {
  try {
    const taskBody = req.body.task;
    const toRemove = req.body?.toRemove;
    const task = taskBody.toLowerCase();
    let updatedHistory = [];
    if(toRemove) {
      const history = await plantService.getHistoryByTask(req.params.id, task);
      history.pop();
      updatedHistory = history;
    } else {
      updatedHistory = await getTaskHistory(req.params.id, task);
    }
    const lastDateUpdated = updatedHistory.slice(-1);
    const details = await plantService.getPlantDetails(req.params.id);
    const taskData = {
        history: updatedHistory,
        lastDate: lastDateUpdated
    }
    const plant = await plantService.updatePlant(req.params.id, {details: {...details, [task]: taskData}});
    res.json({ data: plant, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getPlantCicle = async (req, res) => {
  try {
    const plant = await plantService.getPlantById(req.params.id);
    const isWaterButtonEnabled = getTaskCicle(plant, "water");
    const isSoilButtonEnabled = getTaskCicle(plant, "soil");
    const isLightButtonEnabled = getTaskCicle(plant, "light");
    const isFertilizerButtonEnabled = getTaskCicle(plant, "fertilizer");
    res.json({ isWaterButtonEnabled, isSoilButtonEnabled, isLightButtonEnabled, isFertilizerButtonEnabled, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};