
const plantService = require("../services/plantService");

    const getHistory = async (id, task) => {
        const history = await plantService.getHistoryByPlantId(id);
        return await history[task];
    }

    const getDate = () => {
        const date = new Date();
        return date.toISOString();
    }

    exports.getWaterHistory = async (id) => {
        const history = await getHistory(id, 'water');
        history.push(getDate());
        return history;
    }
