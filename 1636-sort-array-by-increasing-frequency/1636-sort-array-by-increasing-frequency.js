/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let obj = {};
    let result = [];
    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        }else{
            obj[nums[i]] = 1
        }
    }

    let array = Object.entries(obj)
    array =array.sort((a,b)=>b-a)

    array = array.sort((a,b)=>a[1]-b[1])
    
    array.sort((a,b)=>{
        if(a[1] === b[1]){
            return Number(b[0]) - Number(a[0])
        }
        
    })

    for(let i = 0; i<array.length; i++){
        if(array[i][1] == 1){
            result.push(Number(array[i][0]))
        }else{
        
            if(array[i][1] >= 2){
                for(let j =0 ; j<array[i][1]; j++){
                    result.push(Number(array[i][0]))
                }
            }
        }
    }

    return result 

    
};