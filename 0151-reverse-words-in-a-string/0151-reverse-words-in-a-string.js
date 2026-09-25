/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
   return s.trim().split(" ").reverse().filter((item)=>item.trim().length!=0).join(" ")

   
};