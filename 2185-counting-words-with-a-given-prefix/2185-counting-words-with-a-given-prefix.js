/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let res = words.filter((item)=>item.includes(pref))
    let count = 0;
    res.forEach((item)=>{
       let n = item.indexOf(pref)
       if(n == 0){
        count++
       }
    })
    return count
};