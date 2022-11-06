//https://www.algoexpert.io/questions/Product%20Sum
//ex: array = [5, 2 , [ 7 , -1 ] , 3 , [ 6, [-13 , 8 ] , 4 ] ] 
//output= 12 ====>  5 + 2 + 2 * ( 7 -1 ) + 3 + 2 * ( 6 + 3 * ( -13 + 8 ) + 4 )

function productSum(array, depth = 1) {
  // Write your code here.
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], depth + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * depth;
}
