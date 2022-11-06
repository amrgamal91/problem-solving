//https://www.algoexpert.io/questions/Non-Constructible%20Change

//what is the minimum non constructible change can be made from array ?
// min non constructible change = max constructible change + 1;
//current max constructible change = accumulative sum of all elements till current element
//ex: [1,1,2,6] when i=3 element=6 maxChange= 1+1+2=4 6>4+1 yes then min non cons change=4+1
//ex: if it was [1,1,2,5] when i=3 elem=5 mxchange=1+1+2=4 5>4+1 no then maxchange=4+5=9 min change=9+1=10
// coins = [5 , 7, 1 , 1 , 2 , 3 , 22] sort==> [1 , 1 , 2 , 3 , 5 , 7 , 22]

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let maxConstructibleChange = 0;
  for (coin of coins) {
    if (coin > maxConstructibleChange + 1) return maxConstructibleChange + 1;
    maxConstructibleChange += coin;
  }
  return maxConstructibleChange + 1;
}
