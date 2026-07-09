/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let sum =  nums.reduce((sum , num)=> sum+=num,0)
  
  let digitSum = nums.map((num)=>num.toString().split(""))
  .flat().reduce((sum , curr)=>sum+=Number(curr),0)

  return sum - digitSum
  
};