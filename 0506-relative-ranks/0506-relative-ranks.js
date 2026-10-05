/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let array = [...score].sort((a,b)=>b-a)
    let n = 0;

   for(let i = 0; i<array.length; i++){

    if(score.includes(array[i])){
        n = score.indexOf(array[i])
    }

   if(i == 0 && array[i] == score[n]){
    score[n] = "Gold Medal"
   }else if(i == 1 && array[i] == score[n]){
    score[n] = "Silver Medal"
   }else if(i == 2 && array[i] == score[n]){
    score[n] = "Bronze Medal"
   }else {
    score[n] = String(i+1)
   }
   
   }

   return score

   
};