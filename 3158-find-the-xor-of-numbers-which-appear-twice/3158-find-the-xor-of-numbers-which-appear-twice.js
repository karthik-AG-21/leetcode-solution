/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let array = [] , repeat = []
    nums.map((item)=>{
        if(!array.includes(item)){
            array.push(item)
        }else if(array.includes(item)){
            repeat.push(item)
        }
        })
        

       let res = repeat.reduce((sum ,item)=>sum^=item,0)

       return res
        
};