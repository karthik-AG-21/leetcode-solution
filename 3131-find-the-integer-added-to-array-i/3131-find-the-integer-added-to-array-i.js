/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=>a-b);
    nums2 = nums2.sort((a,b)=>a-b);
    let count = 0

    for(let i = 0; i<nums1.length; i++){
        count = (nums2[i] - nums1[i]);
        n = count
    }

    return count 
};