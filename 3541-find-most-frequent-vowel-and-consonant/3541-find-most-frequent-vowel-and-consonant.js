/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let count ={}, consonants = {};
   s.split("").map((item)=>{
    if("aeiou".includes(item)){
       if(!count[item]){
        count[item] = 1
       } else{
        count[item]++;
       }
    }else{
        if(!consonants[item]){
        consonants[item] = 1
       } else{
        consonants[item]++;
       }
    }
   })
   console.log(count , consonants)
let n = Object.values(count)
let m = Object.values(consonants)
let res = 0;
if(m.length===0){
     res = Math.max(...n)
}else if(n.length===0){
     res = Math.max(...m)
}else{
     res = Math.max(...n) + Math.max(...m)
}
  
  return res
}