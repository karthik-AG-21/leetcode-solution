/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let count = 0;
    let array2 = [];
    let array1 = s.split("")
    array1.map((char)=>{
        if(!array2.includes(char)){
            array2.push(char)
        }
    })
    array2.forEach((char)=>{
       if(array1.includes(char)){
        count++
       }
    })
    return count
};