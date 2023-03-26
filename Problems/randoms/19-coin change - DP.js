//https://www.hackerrank.com/challenges/ctci-coin-change/problem?h_r=internal-search
//explanation: https://www.geeksforgeeks.org/understanding-the-coin-change-problem-with-dynamic-programming/

function ways(n, coins) {
    let changeWays=new Array(n+1).fill(0);
    changeWays[0]=1;

    for(let i=0;i<coins.length;i++){
        for(let j=0;j<changeWays.length;j++){
            if(coins[i]<=j){
                changeWays[j]+=changeWays[j-coins[i]];
            }
        }
    }
    return changeWays[n];
}


