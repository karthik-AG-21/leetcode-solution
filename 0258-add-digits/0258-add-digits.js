/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
   let array = String(num).split("")
   
   let res = array.reduce((sum , item)=>sum = sum+Number(item) , 0)

   if(res >= 10){
    res = String(res).split("").reduce((sum , item)=>sum = sum+Number(item) , 0)
    
    res = String(res).split("").reduce((sum , item)=>sum = sum+Number(item) , 0)
   }

if(res<10){
    return res
}

};