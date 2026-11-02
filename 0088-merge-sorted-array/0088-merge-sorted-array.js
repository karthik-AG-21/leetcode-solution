/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let res = nums1.slice(0,m).concat(nums2.slice(0,n))

 res.sort((a,b)=>a-b);



 for(let i = 0; i<res.length; i++){
    nums1[i] = res[i]
 }

 return nums1
  
};