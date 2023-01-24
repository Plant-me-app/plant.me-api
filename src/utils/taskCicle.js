
const getDiffDays = (now, last) => {
    return parseInt((now - last) / (1000 * 60 * 60 * 24), 10); 
}

exports.getTaskCicle = (plant, task) => {
    const lastDate = plant.details[task].lastDate[0];
    const formattedLastDate = new Date(lastDate).setHours(0, 0, 0, 0);
    const dateNow = new Date().setHours(0, 0, 0, 0);
    const cicle = plant.species[task]?.cicle;

    if(!lastDate) return true;

    switch (cicle) {
        case "diario":
            return formattedLastDate < dateNow;
        
        case "semanal":
            var diffDays = getDiffDays(dateNow, formattedLastDate);
            return diffDays > 7;

        case "quinzenal":
            var diffDays = getDiffDays(dateNow, formattedLastDate);
            return diffDays > 15;
            
        case "mensal":
            var diffDays = getDiffDays(dateNow, formattedLastDate);
            return diffDays > 30;
        
        case "trimestral":
            var diffDays = getDiffDays(dateNow, formattedLastDate);
            console.log('diffDays', diffDays > 90);
            return diffDays > 90;

        case "anual":
            var diffDays = getDiffDays(dateNow, formattedLastDate);
            return diffDays > 365;

        default:
            return formattedLastDate ? formattedLastDate < dateNow : true;
    }
} 