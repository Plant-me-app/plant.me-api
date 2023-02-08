const plantService = require("../services/plantService");
const { getTaskHistory } = require("../utils/history");
const { getScoreUpdated, getPointsToNextLevel } = require("../utils/score");
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
    const score = {
      level: 0,
      points: 0,
      pointsToNextLevel: 5,
    };
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
    const plant = await plantService.createPlant({...req.body, createdDate, details, score});
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

exports.getPlantScore = async (req, res) => {
  try {
    const score = await plantService.getPlantScore(req.params.id);
    res.json({data: score, status: "success"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.updatePlantScore = async (req, res) => {
  try {
    const score = await plantService.getPlantScore(req.params.id);
    const toRemove = req.body.toRemove;
    const newScore = getScoreUpdated(score, toRemove);
    const pointsToNextLevel = getPointsToNextLevel(newScore);
    const plant = await plantService.updatePlant(req.params.id, {score: {...newScore, pointsToNextLevel}});
    res.json({ data: plant.score, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getHistoryById = async (req, res) => {
  try {
    const history = await plantService.getHistoryByPlantId(req.params.id);
    res.json({ data: history, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}