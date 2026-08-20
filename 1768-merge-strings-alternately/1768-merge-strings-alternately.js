/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let array=[]
    let newWord1 = word1.split("")
    let newWord2 = word2.split("")
    if(newWord1.length >newWord2.length){
        n = newWord1.length
    }else{
        n = newWord2.length
    }
    for(let i = 0 ; i<n; i++){
        array.push(newWord1[i])
        array.push(newWord2[i])
    }

return array.join("")
    
};