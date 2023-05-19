function hasTargetSum(array, target) {

  //Iterate through each number in the array 
  for (let i = 0; i < array.length; i++) {
  //For the current number identify complement that adds to target (compliment = target - number)
  const complement = target - array[i]
    //iterate through the rest of the array
  for (let j = i + 1; j < array.length; j++) {
  //check if any number is our compliemnt
  if (array[j] === complement) return true 
  //if so return true 
  //If I reach the end of the array, return false 
      if (array[j] === complement) return true
    }
  }
  return false 
    }
  // Write your algorithm here

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Iterate through each number in the array 
  For the current number identify complement that adds to target (compliment = target - number)
  iterate through the rest of the array
  check if any number is our compliemnt
  if so return true 
  If I reach the end of the array, return false 
  */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
