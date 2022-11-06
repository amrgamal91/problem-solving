//https://www.algoexpert.io/questions/Validate%20Subsequence

function isValidSubsequence(array, sequence) {
    // Write your code here.
      let index=0;
      for(let i =0;i<array.length;i++){
          if(array[i]===sequence[index]){
              index++;
          }
      }
          return index===sequence.length;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  

  //==============================================================================





