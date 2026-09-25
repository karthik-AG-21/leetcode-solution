/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   accounts = accounts.map((item)=>item.reduce((item,sum)=>sum = sum+item,0))
   return accounts.sort((a,b)=>b-a)[0]
};