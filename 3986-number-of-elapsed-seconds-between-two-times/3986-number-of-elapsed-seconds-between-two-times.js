/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function(startTime, endTime) {
let newEnd = endTime.split(":") 
newEnd[0]*=3600  
newEnd[1]*=60 
totalend = newEnd.reduce((sum ,item)=>sum+Number(item),0)
    
let newStart = startTime.split(":")
newStart[0]*=3600
newStart[1]*=60
totalstart = newStart.reduce((sum ,item)=>sum+Number(item),0)

return totalend - totalstart

}