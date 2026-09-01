/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const array = new Set(nums);
    let num = [...array].sort((a,b)=>b-a);

    if(num.length>=3){

        return num[2];

    }else if(num.length<=2){

        return Math.max(...num);

    }else{
        return -1;
    }

    
};