/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let array = s.split(" ").map((item)=>{
    return item.split("").reverse().join("")
   }).join(" ")

   return array
    
};