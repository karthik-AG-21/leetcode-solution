/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let n = 0;

    if(num == 1 ){
            return true
        }
        if(num > 100000){
            n = 100000
        }else {
            n = num/2
        }
        
    for(let i = 2; i<= n; i++ ){
        console.log(i*i , num);

        if(i*i == num){
            return true
        }

        
    }
    return false
};