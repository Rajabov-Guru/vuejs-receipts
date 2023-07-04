export const getIngredients = (data:any):string[] => {
    const result = [];

    for(let i = 1;  i <= 20; i++){
        if(data[`strIngredient${i}`] && data[`strIngredient${i}`].trim().length){
            result.push(data[`strIngredient${i}`]);
        }
    }

    return result;
}

export const getMeasures = (data:any):string[] => {
    const result = [];

    for(let i = 1;  i <= 20; i++){
        if(data[`strMeasure${i}`] && data[`strMeasure${i}`].trim().length){
            result.push(data[`strMeasure${i}`]);
        }
    }

    return result;
}

