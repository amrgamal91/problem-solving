  //https://www.algoexpert.io/questions/Tournament%20Winner
  
  function tournamentWinner(competitions, results) {
	let teamsResult={};
	let maxScore=0;
	let winner='';
  // Write your code here.
	for(let i=0;i<results.length;i++){
		const pair=competitions[i];
		if(results[i]){
			teamsResult[pair[0]]= teamsResult[pair[0]]==null?3:teamsResult[pair[0]]+3;
			if(teamsResult[pair[0]]>maxScore){
				maxScore=teamsResult[pair[0]];
				winner=pair[0];
				
			}
		}else{
			teamsResult[pair[1]]= teamsResult[pair[1]]==null?3:teamsResult[pair[1]]+3;
				if(teamsResult[pair[1]]>maxScore){
				maxScore=teamsResult[pair[1]];
				winner=pair[1];
			}
		}
	}
  return  winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
