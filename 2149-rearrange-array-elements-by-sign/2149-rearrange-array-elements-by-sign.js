/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = nums.filter((item)=>item>=0);
    let neg = nums.filter((item)=>item<0);
    let n = pos.length>neg.length ? pos.length : neg.length;
    let res = [];
    for(let i = 0; i<n; i++){
        res.push(pos[i]);
        res.push(neg[i]);
    }
    return res
};