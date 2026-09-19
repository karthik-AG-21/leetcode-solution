/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { 
  let n = Number(Math.abs(x).toString().split("").reverse().join(""))
  let elem1 = 2**31
  let elem2 = 2**31-1


  if(x<= -elem1 || x>=elem2 || x == 0 || n>= elem2 || n <= -elem1){
    return 0
  }else if(x<0 && x>-elem1){
    return -n
  }else{
    return n
  }
   
}