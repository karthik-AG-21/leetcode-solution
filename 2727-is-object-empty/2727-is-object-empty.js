/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let res = Object.entries(obj)

    return res.flat().length==0
};