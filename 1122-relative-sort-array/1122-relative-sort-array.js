/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let res = []
    for(let i = 0; i<arr2.length; i++){
        for(let j = 0; j<arr1.length; j++){
            if(arr2[i] === arr1[j]){
                res.push(arr1[j])
            }
        }
    }
    let data = arr1.filter((item)=>!arr2.includes(item)).sort((a,b)=>a-b)
    for(let i = 0; i<data.length; i++){
        res.push(data[i]);
    }

    return res
};