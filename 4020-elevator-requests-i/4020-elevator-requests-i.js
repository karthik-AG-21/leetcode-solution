/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let floor = 0;
    let res = 0;
    for(let i = 0 ; i<requests.length; i++){ 
       res = res + Math.abs(floor - requests[i])
           floor = requests[i]
    }
    return res
};