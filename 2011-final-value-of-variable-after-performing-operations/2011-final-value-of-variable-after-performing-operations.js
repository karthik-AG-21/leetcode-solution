/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
   let value1 = operations.filter(item => item === "++X" || item === "X++").length;
    let value2 = operations.filter(item => item === "--X" || item === "X--").length;

    return  value1-value2
};