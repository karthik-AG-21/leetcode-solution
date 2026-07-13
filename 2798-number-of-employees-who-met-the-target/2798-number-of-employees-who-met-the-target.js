/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
   let targetEmp = hours.filter((emp)=>emp >=target)    
    return targetEmp.length;
};