/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let newArray = []
    nums.forEach((item)=>{
        if(item%2===0){
            newArray.push(0)
        }else{
            newArray.push(1)
        }
    })
    return newArray.sort((a,b)=> a-b)
};