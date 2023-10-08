function getArrayParams(...arr) {
  if(arr.length === 0){
     return 0
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    } else if(arr[i] < min){
      min = arr[i];
    }
    sum += arr[i]
    avg = Number((sum / arr.length).toFixed(2))
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length === 0){
     return 0
  }
  const initialValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0){
    return 0
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    } else if(arr[i] < min){
      min = arr[i];
    }
  }
  return max - min
}

function differenceEvenOddWorker(...arr) {
   if(arr.length === 0){
    return 0
  }
  let sumEvenElement = 0; 
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement+= arr[i]
    } else {
      sumOddElement+= arr[i]
    }
  }
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0){
     return 0
  }
  let sumEvenElement  = 0
  let countEvenElement = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i]
      countEvenElement++
    } 
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity
  const arr = []
  for(let i = 0; i < arrOfArr.length; i++){
    arr.push(func(...arrOfArr[i]))
    if(maxWorkerResult < func(...arrOfArr[i])){
      maxWorkerResult =  func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult
}
