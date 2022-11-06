//https://www.algoexpert.io/questions/Minimum%20Waiting%20Time

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let totalDuration = 0;
  let waitingTime = new Array(queries).fill(0);
  for (let x = 1; x < queries.length; x++) {
    waitingTime[x] = waitingTime[x - 1] + queries[x - 1];
    totalDuration += waitingTime[x];
  }
  return totalDuration;
}
