//https://www.algoexpert.io/questions/Sorted%20Squared%20Array

function sortedSquaredArray(array) {
    // Write your code here.
      let squaredArray=[];
      for(let i =0;i<array.length;i++){
          squaredArray[i]=array[i]*array[i];
      }
      squaredArray.sort((a,b)=>a-b);
    return squaredArray;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
  


  //==============================================================================


  function sortedSquaredArray(array) {
    // Write your code here.
      const sortedSquares=new Array(array.length).fill(0);
      let smallerIndex=0;
      let largerIndex=array.length-1;
      
      for(let i =array.length-1;i>=0;i--){
          let smallerValue=array[smallerIndex];
          let largerValue=array[largerIndex];
          if(Math.abs(smallerValue)>Math.abs(largerValue)){
              sortedSquares[i]=smallerValue*smallerValue;
              smallerIndex++;
          }else{
              sortedSquares[i]=largerValue*largerValue;
              largerIndex--;
          }
      }
    return sortedSquares;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
  
    //==============================================================================
