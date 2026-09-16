/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let str = "";
    for(let i of words){
       str += i[0]
    }

   return str === s
    
};