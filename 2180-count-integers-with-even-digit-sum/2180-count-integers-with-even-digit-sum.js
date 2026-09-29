/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let array=[]
    for(let i = 1; i<=num; i++){
        if(i.toString().split("").length == 1 && i%2 == 0){
            array.push(i)
        }else if( i.toString().split("").length != 1 ){ 

         let numbers =  i.toString().split("")

        numbers = numbers.map((item)=>Number((item)))

        sum = numbers.reduce((item,sum)=>sum = sum+item,0)

        if(sum%2 == 0){
            array.push(i)
        }
        
        }
    }

    return array.length
};