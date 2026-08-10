/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   let array = sentences.map((item)=>item.split(" ")).reduce((sum ,item)=>
   item.length>sum.length ? sum=item : sum , "")
    return array.length
};