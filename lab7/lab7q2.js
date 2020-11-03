/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers */
function sum(nums) {
  var sum = 0;
  // for (let i=0; i<nums.length; i++) {
  //     sum = sum + nums[i];
  // }
  // return sum;
  for (let num of nums) {
    sum = sum + num;
  }
  return sum;  
}
function sum2(nums) {
  return nums.reduce((accumulator,base) => accumulator+base);                        
}

function multiply(nums) {
  var product = 1;
  // for (let i=0; i<nums.length; i++) {
  //     sum = sum + nums[i];
  // }
  // return sum;
  for (let num of nums) {
    product = product * num;
  }
  return product;         
}

function multiply2(nums) {
  return nums.reduce((accumulator,base) => accumulator+base);                        
}



/* 5 Define a function reverse() that computes the reversal of a string. */
function reverse(inString) {
  var outString = "";

  for (let i = 0; i < inString.length; i++) {
    outString += inString.charAt(inString.length - 1 - i);
  }
  return outString;

}

function reverse2(inString) {
  inString.split("").reduce((accumulator, base) => base+accumulator);
}

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
function findLongestWords(words, len) {
  var outArr = words.filter(e => e.length > len);
  return outArr;
}

function findLongestWords2(words, len) {  
  var temp="";
  for (word of words) {
      if (word.length > len) {
          temp+=""+word+",";
      }
  }
  return temp.substring(0,temp.length-1).split(",");    
}
