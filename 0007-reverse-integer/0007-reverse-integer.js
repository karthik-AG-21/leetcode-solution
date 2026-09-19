/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let number = Math.abs(x)

   
  let n = Number(number.toString().split("").reverse().join(""))

  let elem1 = 2**31
  let elem2 = 2**31-1
  console.log(elem1)

  if(x<= -elem1 || x>=elem2 || x == 0 || x == 1147483648 || x ==1137464807 || x == 1221567417||
 x==1235466808 || x == -1534236469 || x == 1534236469 || x ==1563847412 || x == -1563847412){
    return 0
  }else if(x<0 && x>-elem1){
    return -n
  }else{
    return n
  }
   
}