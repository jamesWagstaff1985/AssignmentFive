/*
Simple functions for testing practice
*/

// Container for functions
let myFunctions = {};


myFunctions.isPalindrome = (str) => {
  str = typeof(str) == 'string' && str.trim().length > 0 ? str.trim() : false;
  if(!str) return false;
  for(let i = 0; i < Math.floor(str.length/2); i++){
    if(str[i] != str[str.length-(i+1)])
      return false
  }
  return true
}

// Find an integer that squared is closest to the given number
myFunctions.findSquareRoot = (num) => {
  num = typeof(num) == 'number' ? num : "Invalid ṕarameters, please check";
  if(!num) return false;
  let sqrRootLow = 0;
  let sqrRootHigh = num;
  while((sqrRootLow+1) * (sqrRootLow+1) <= num || (sqrRootHigh-1) * (sqrRootHigh-1) >= num){
    if(sqrRootLow * sqrRootLow === num) return sqrRootLow;
    if(sqrRootHigh * sqrRootHigh === num) return sqrRootHigh;
    if((sqrRootLow+1) * (sqrRootLow+1) <= num) sqrRootLow ++;
    if((sqrRootHigh-1) * (sqrRootHigh-1) >= num) sqrRootHigh --;
  }
  if(num - sqrRootLow * sqrRootLow < sqrRootHigh * sqrRootHigh - num){
    return sqrRootLow
  }else{
    return sqrRootHigh
  }
}

// Return a random number between 2 given numbers
myFunctions.randomNumber = (num1, num2) => {
  if(num1 == null || num2 == null) return "Please specify 2 integers";
  if(num1 >= num2) return "The 1st number must be less than the 2nd";
  let ranNum = Math.floor(Math.random()*(num2-num1+1)+num1)
  return ranNum
}

// Export the module
module.exports = myFunctions;
