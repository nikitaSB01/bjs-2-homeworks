"use strict"
function solveEquation(a, b, c) {
  let arr = []; 
  let dis = b ** 2 - 4 * a * c;

  if(dis === 0){
   let cor = -b / ( 2 * a );
   arr.push(cor)
  } else if(dis > 0){
    let cor1 = (-b + Math.sqrt(dis))/(2*a);
    let cor2 = (-b - Math.sqrt(dis))/(2*a);
    arr.push(cor1, cor2)
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) { //((проценты, взнос, сумма, количество месяцев)
percent = percent/100/12;
let bodyC = amount - contribution;
let monPay = bodyC * (percent + (percent / (((1 + percent) ** countMonths) - 1)))
let sum = Number((monPay *  countMonths).toFixed(2));
return sum
}