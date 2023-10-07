function getArrayParams(...arr) {
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
//getArrayParams(5, 7, 1)


function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
