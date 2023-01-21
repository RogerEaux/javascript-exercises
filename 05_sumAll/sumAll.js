const sumAll = function(first, second) {
    let sum;
    const difference = Math.abs(first - second) + 1;
    if(!(Number.isInteger(first) && Number.isInteger(second) && first > 0 && second > 0)){
        return 'ERROR';
    }
    sum = difference/2*(first+second);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
