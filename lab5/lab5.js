
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
  let result = function2test();

  if (Array.isArray(expected)) {
    expected = expected.toString();
  }
  if (Array.isArray(result)) {
    result = result.toString();
  }
  if (expected === result) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + function2test();
  }
}
var result;
function myarr() {
  return [1, 1];
}
console.log("Expected output of myarr() is 40  " + myFunctionTest([1, 1], function () {
  return myarr();
}));

// 2. function max
function max(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}
result = 8;
console.log("Expected output of max(6,8) is " + result + " " + myFunctionTest(result, function () {
  return max(6, 8);
}));

// 3. function max3
function max3(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    } else {
      return num3;
    }
  } else {
    if (num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
}
result = 10;
console.log("Expected output of max3(6, 8, 10) is " + result + " " + myFunctionTest(result, function () {
  return max3(6, 8, 10);
}));

// 4. function isVowel
function isVowel(inChar) {
  var vowels = ['a', 'e', 'o', 'u', 'i'];
  inChar = inChar.toLowerCase();
  return vowels.includes(inChar.charAt(0));
}
//case 1
result = true;
console.log("Expected output of isVowel(\"A\") is " + result + " " + myFunctionTest(result, function () {
  return isVowel("A");
}));
//case 2
result = true;
console.log("Expected output of isVowel(\"e\") is " + result + " " + myFunctionTest(result, function () {
  return isVowel("e");
}));

// 5a. function sum,
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
  // return nums.reduce((accumulator,base) => accumulator+base);                        
}
result = 55;
console.log("Expected output of sum([10, 23, 10, 12]) is " + result + " " + myFunctionTest(result, function () {
  return sum([10, 23, 10, 12]);
}));


// 5b. function multiply
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
  // return nums.reduce((accumulator,base) => accumulator+base);                        
}
result = 2300;
console.log("Expected output of multiply([10, 23, 10]) is " + result + " " + myFunctionTest(result, function () {
  return multiply([10, 23, 10]);
}));


// 6. function reverse 
function reverse(inString) {
  var outString = "";

  for (let i = 0; i < inString.length; i++) {
    outString += inString.charAt(inString.length - 1 - i);
  }
  return outString;

}
result = "Mohan";
console.log("Expected output of reverse(\"nahoM\") is " + result + " " + myFunctionTest(result, function () {
  return reverse("nahoM");
}));

// 7. function findLongestWord
function findLongestWord(words) {
  // var max = Number.MIN_VALUE;
  // for (word of words) {
  //     if (word.length > max) {
  //         max = word.length;
  //     }
  // }
  // return max;

  var lengths = words.map(e => e.length);
  return Math.max(...lengths);
}
result = 5;
console.log("Expected output of findLongestWord([\"hello\", \"aa\", \"c\"]) is " + result + " " + myFunctionTest(result, function () {
  return findLongestWord(["hello", "aa", "c"]);
}));

// 8. function filterLongWords()
function findLongestWords(words, len) {
  // var max = Number.MIN_VALUE;
  // for (word of words) {
  //     if (word.length > max) {
  //         max = word.length;
  //     }
  // }
  // return max;
  var outArr = words.filter(e => e.length > len);

  return outArr;
}

result = ["hello", "aa"];
console.log("Expected output of findLongestWords([\"hello\", \"aa\", \"c\"]) is " + result + " " + myFunctionTest(result, function () {
  return findLongestWords(["hello", "aa", "c"], 1);
}));

// 9.  jsfiddle modified

console.log("[1, 3, 5, 3, 3]");
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem * 10;
})
console.log("Multiple by 10: " + b);

const c = a.filter(function (elem, i, array) {
  return elem == 3;
});
console.log("All elements equal to 3: " + c);

const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue * elem;
});
console.log("Product of array: " + d);
console.log("Product of array: " + d);

      // 10 






