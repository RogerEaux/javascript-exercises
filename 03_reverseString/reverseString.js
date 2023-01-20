const reverseString = function(string) {
    const split = string.split('');
    let output = '';
    for(i = split.length - 1; i >= 0; i--){
        output += split[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
