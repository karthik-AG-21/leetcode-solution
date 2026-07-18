/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    patterns.map((char)=>{
        if(word.includes(char)){
            count++
        }
    })
    return count
};