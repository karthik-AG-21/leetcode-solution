/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let res = [...heights];
    let n = 0;
    let result = []
    res = res.sort((a,b)=>b-a);

    for(let i = 0; i<heights.length; i++){
        if(heights.includes(res[i])){
            n = heights.indexOf(res[i]);
            result.push(names[n])
        }
    }

    return result

}