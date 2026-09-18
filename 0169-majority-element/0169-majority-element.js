/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    nums.map((num)=>{
        if(!obj[num]){
            obj[num] = 1;
        }else{
            obj[num]++;
        }
    })

   
    let n = Object.entries(obj).sort((a,b)=>b[1]-a[1])
    return Number(n[0][0])
};