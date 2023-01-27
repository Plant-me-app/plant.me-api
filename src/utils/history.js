
const plantService = require("../services/plantService");

    const getHistory = async (id, task) => {
        const history = await plantService.getHistoryByPlantId(id);
        return await history[task];
    }

    const getDate = () => {
        const date = new Date();
        return date.toLocaleDateString('pt-br');
    }

    exports.getTaskHistory = async (id, task) => {
        const history = await getHistory(id, task);
        history.push(getDate());
        return history;
    }
