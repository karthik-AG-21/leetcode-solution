/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let array=[]
    let n1 = word1.split("")
    let n2 = word2.split("")
    n1.length >n2.length ? n = n1.length : n = n2.length
    for(let i = 0 ; i<n; i++){
        array.push(n1[i])
        array.push(n2[i])
    }

return array.join("")
    
};