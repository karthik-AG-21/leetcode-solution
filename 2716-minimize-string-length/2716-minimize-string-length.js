/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let array = [];
    s.split("").filter((char)=>{
        if(!array.includes(char)){
        array.push(char)
        }})
    return array.length; 
};