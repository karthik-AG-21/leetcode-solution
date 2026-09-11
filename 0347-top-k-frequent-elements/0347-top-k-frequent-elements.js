/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj={}; array=[];
    nums.map((item)=>{
        if(obj[item]){
            obj[item]++
        }else{
            obj[item] = 1
        }
    })

    console.log(obj)
    let newData = Object.entries(obj).sort((a,b)=>b[1]-a[1]).map((item)=>Number(item[0]))
   

   

   return newData.slice(0,k)
   
    

    
};