
const plantService = require("../services/plantService");


    exports.getHistory = async (id) => {
        const history = await plantService.getHistoryByPlantId(id);
        const date = new Date();
        history.push(date.toISOString())
        return history
    }
