const { getAllPlants } = require("../services/plantService");
const { getTaskCicle } = require("./taskCicle");

exports.getNotifications = async () => {
    plants = await getAllPlants();
    let plantNotification = {};
    const notification = [];
    
    plants.forEach((plant, index) => {
        const isWaterLate = getTaskCicle(plant, "water");
        const isSoilLate = getTaskCicle(plant, "soil");
        const isLightLate = getTaskCicle(plant, "light");
        const isFertilizerLate = getTaskCicle(plant, "fertilizer");


        waterNotification = {
            title: "Regar Planta!",
            text: `Corra para regar ${plant.name} antes que as pragas ataquem!`,
            task: "water",
        };

        soilNotification = {
            title: "Trocar terra da Planta!",
            text: `Corra para trocar a terra de ${plant.name} antes que as pragas ataquem!`,
            task: "soil",
        };

        lightNotification = {
            title: "Iluminar Planta!",
            text: `Corra para iluminar ${plant.name} antes que as pragas ataquem!`,
            task: "light",
        };

        fertilizerNotification = {
            title: "Adubar Planta!",
            text: `Corra para adubar ${plant.name} antes que as pragas ataquem!`,
            task: "fertilizer",
        }

        if(isWaterLate) {
            notification.push(waterNotification)
        }

        if(isSoilLate) {
            notification.push(soilNotification)
        }

        if(isLightLate) {
            notification.push(lightNotification)
        }

        if(isFertilizerLate) {
            notification.push(fertilizerNotification)
        }
        plantNotification = notification;
    })

    return plantNotification;
}