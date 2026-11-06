/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let total = [...nums1,...nums2].sort((a,b)=>a-b);
    let res;
    let mid = Math.floor(total.length/2)

    if(total.length%2===0){
        res = (total[mid-1] + total[mid])/2
    }else{
        res = total[mid]
    }

    return res

};