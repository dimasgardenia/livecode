
function findMax(numberArr) {
  // Code Disini
  var max= 0;
  for (var i = 0; i<numberArr.length; i++){
	  if (numberArr[i] > max){
		  var max= numberArr[i];
	  }
  }
  return max;
}

function findMin(numberArr) {
  // Code Disini
  var min = 0;
  for (var i = 0; i< numberArr.length; i++){
	  if (numberArr[i] < min){
		  min= numberArr[i];
	  }
  }
  return min;
}

function findMean(numberArr) {
  // Code Disini
  var rata = 0;
  for (var i= 0; i< numberArr.length;i++){
	  rata+=numberArr[i];
	  var meaning = rata/numberArr.length;
       var mean = Math.floor(meaning);
  }
	return mean;
}

function findOdds(numberArr) {
  // Code Disini
  var odds= [0];
  for (var i =0; i < numberArr.length; i++){
	  if ((numberArr[i]%2) !=0){
		  odds.push(numberArr[i]);
	  }
  }
  return odds;
}

function findEvens(numberArr) {
  // Code Disini
  var evens = [0];
  for (var i =0; i< numberArr.length; i++){
	  if ((numberArr[i]%2) ==0){
		  evens.push(numberArr[i]);
	  }
  }
  return evens;
}

function numberProcessing(numberArr) {
  var max = findMax(numberArr);
  var min = findMin(numberArr);
  var mean = findMean(numberArr);
  var odds = findOdds(numberArr);
  var evens = findEvens(numberArr);
  return 'Min: ' + min + ', Max: ' + max + ', Mean: ' + mean + ', Odds: ' + odds + ', Evens: ' + evens;
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 1, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
