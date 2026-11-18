/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    words = words.filter((item)=>item.includes(pref))
    let count = 0;
    words.forEach((item)=>{
       let n = item.indexOf(pref)
       if(n == 0){
        count++
       }
    })
    return count
};