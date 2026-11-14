/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let array = []
   let max = Math.max(...candies)
   for(let i = 0; i<candies.length; i++){
    if(candies[i]+extraCandies < max){
        array.push(false)
    }else{
        array.push(true)
    }
   }
   return array
};