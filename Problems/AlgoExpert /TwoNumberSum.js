//https://www.algoexpert.io/questions/Two%20Number%20Sum
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for(let i =0;i<array.length;i++){
          let firstNum=array[i];
          for(let j=i+1;j<array.length;j++){
              let secondNum=array[j];
              if(firstNum+secondNum===targetSum){
                  return [firstNum,secondNum];
              }
          }
      }
      return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;

//==============================================================================

  function twoNumberSum(array, targetSum) {
    // Write your code here.
      const nums={};
      for(const num of array){
          const potentialMatch=targetSum-num;
          if(nums[potentialMatch]){
              return [num,potentialMatch];
          }else{
              nums[num]=true;
          }
      }
      return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;


//==============================================================================
  

function twoNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a,b)=>a-b);
      let left=0;
      let right=array.length-1;
      while(left<right){
          const currentSum=array[left]+array[right];
          if(currentSum===targetSum){
              return [array[left],array[right]];
          }else if(currentSum < targetSum){
              left++;
          }else{
              right--;
          }
      }
      return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  

//==============================================================================
