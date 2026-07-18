/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function(s, x, y) {
    let array = []
 s.split("").filter((item)=>item.includes(y))
     .map((item)=>array.push(item))

   

    s.split("").filter((item)=>!item.includes(y)).map((item)=>array.push(item))

    
    
    return array.join("")


};