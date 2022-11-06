//===================================================================================
//  * Problem 14 : check if string is palindrome
//* *********************************************************************************
function isPalindrome(str) {
  let rev = reverse(str);
  if (rev === str) return true;
  return false;
}

console.log(isPalindrome("kok"));


function isPalindrome(string) {
  // Write your code here.
	let leftIndex=0;
	let rightIndex=string.length-1;
	while(leftIndex<rightIndex){
		if(string[leftIndex]!==string[rightIndex])return false;
		leftIndex++;
		rightIndex--;
	}
	return true;
}
