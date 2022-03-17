const removeFromArray = function (array, ...restParameter) {

    for (let i = 0; i < restParameter.length; i++)
        for (let j = 0; j < array.length; j++)
            if (array[j] === restParameter[i])
                array.splice(j, 1);

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
