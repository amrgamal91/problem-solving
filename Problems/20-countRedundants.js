function countRedundants(arr,num){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            count++;
        }
    }
    return count;
}

countRedundants([2,3,4,3,2,1],3);