/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    
  return nums.map((item ,index)=>{
        if(index%2==0){
          return  item
        }else{
          return  -item
        }
    }).reduce((curr , sum)=>  sum+curr,0)
};