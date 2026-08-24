/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let array =[]
   order.map((item)=>{
    if(friends.includes(item)){
        array.push(item)
    }})

    return array
};