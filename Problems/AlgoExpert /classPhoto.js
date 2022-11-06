//https://www.algoexpert.io/questions/Class%20Photos

function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      let sortedRed=redShirtHeights.sort((a,b)=>a-b);
      let sortedBlue=blueShirtHeights.sort((a,b)=>a-b);
      
      let colorInFirstRow=redShirtHeights[0]<blueShirtHeights[0]?"RED":"BLUE";
      // console.log(colorInFirstRow);
          for(let i =0;i<redShirtHeights.length ;i++){
              if(colorInFirstRow === "RED"){
                  if(redShirtHeights[i]>=blueShirtHeights[i])
                      return false;
              }else if(blueShirtHeights[i]>=redShirtHeights[i])
                      return false;
          }
    return true;
  }
  
  // Do not edit the line below.
  exports.classPhotos = classPhotos;
  