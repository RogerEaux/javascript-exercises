const removeFromArray = function(array, ...toRemove) {
    for(let i = 0; i <= array.length - 1; i++){
        if(toRemove.includes(array[i])){
            array.splice(i, 1);
            i--;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
