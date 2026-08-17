/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
   let n = Math.ceil((nums.length-1)/2)
   let mid =nums[n]
   let obj = {};

   nums.map((item)=>{
    if(obj[item]){
        obj[item]++
    }else{
        obj[item] = 1
    }
   })
   

  if(obj[mid]==1){
    return true
  }else{
    return false
  }
};