/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let array1=[] , array2=[];
    for(num of nums1){
        if(!nums2.includes(num) && !array1.includes(num)){
            array1.push(num)
        }
    }
     for(num of nums2){
        if(!nums1.includes(num) && !array2.includes(num)){
            array2.push(num)
        }
    }

    return [array1 , array2]
};