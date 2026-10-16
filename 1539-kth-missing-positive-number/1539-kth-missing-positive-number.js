/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let res =[]
    let max = Math.max(...arr)
    for(let i = 1; i<=max+k; i++){
        if(!arr.includes(i)){
            res.push(i)
        }
    }

    return res[k-1]
};