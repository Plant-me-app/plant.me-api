

exports.getScoreUpdated = (score, toRemove) => {
    let level = score.level;
    let points = score.points;

    if(toRemove) {
        if(level === 0) {
            if(points != 0) --points;
            else if(points === 0) points === 0;

            return {level, points}
        } else {
            if(points != 0) {
                --points;
            }
            else if (level === 1 && points === 0) {
                points = 5;
                --level;
            }
            else if (level != 1 && points === 0) {
                points = 9;
                --level;
            }
            return {level, points};
        }
    }

    if(level === 0) {
        ++points;
        const newLevel = points < 5 ? 0 : 1;
        if(points >= 5) points = 0;
        return {level: newLevel, points}
    }

    ++points;
    const newLevel = points < 10 ? level : level+1;
    
    if (points >= 10) points = 0;
    return {level: newLevel, points}
}

exports.getPointsToNextLevel = (score) => {
    let level = score.level;
    let points = score.points;

    if(level === 0) {
        return 5 - points;
    }
    return 10 - points;
}