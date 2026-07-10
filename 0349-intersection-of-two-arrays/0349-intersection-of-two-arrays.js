/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let array = [];
    nums1.map((num , index)=>{
        if(nums2.includes(num)){
            if(!array.includes(num)){
                array.push(num)
            }else{
                return
            }
        }
    })
    return array
};