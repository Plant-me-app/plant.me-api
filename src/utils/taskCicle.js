
const getDiffDays = (now, last) => {
    return parseInt((now - last) / (1000 * 60 * 60 * 24), 10); 
}

exports.getTaskCicle = (plant, task) => {
    const lastDate = plant.details[task].lastDate[0];
    let formattedLastDate = "";
    if(lastDate) {
        let arr = lastDate.split("/");
        formattedLastDate = new Date(`${arr[1]}/${arr[0]}/${arr[2]}`);
    }
    const dateNow = new Date()
    dateNow.setHours(0, 0, 0, 0);
    var diffDays = getDiffDays(dateNow, formattedLastDate)
    const cicle = plant.species[task]['cicle'];

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
            return diffDays > 90;

        case "anual":
            var diffDays = getDiffDays(dateNow, formattedLastDate);
            return diffDays > 365;

        default:
            return formattedLastDate ? formattedLastDate < dateNow : true;
    }
} 