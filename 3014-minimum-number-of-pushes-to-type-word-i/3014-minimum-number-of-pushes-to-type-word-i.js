/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
   let array = []
   if(word.length<=8){
    return  word.length
   }
   for(let i = 0; i<Math.ceil(word.length/8); i++){
    array.push(word.slice(i*8 , (i+1)*8))
   }
   return array.reduce((sum , word , index)=>sum += word.length * (index+1),0)
  
 
}


    
