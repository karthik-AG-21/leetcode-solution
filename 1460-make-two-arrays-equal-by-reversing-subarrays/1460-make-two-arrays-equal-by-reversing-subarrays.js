/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let res = [];
    target = target.sort((a,b)=>a-b)
    arr = arr.sort((a,b)=>a-b)
    for(let i = 0; i<arr.length; i++){
        if(target[i] !== arr[i]){
            res.push(arr[i])
        }
    }
    if(res.length >=1){
        return false
    }else{
        return true
    }
};