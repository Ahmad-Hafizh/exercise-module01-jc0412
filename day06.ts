// 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
function lowHighAvg(arr: number[]) {
  let lowest: number = Math.min(...arr);
  let highest: number = Math.max(...arr);
  let avg: number;
  let total: number = 0;
  arr.map((n) => {
    total += n;
  });
  avg = total / arr.length;
  return { lowest, highest, avg };
}
console.log(lowHighAvg([12, 5, 23, 18, 4, 45, 32]));

function lowHighAvgSort(arr: number[]) {
  let sorted: number[] = arr.sort((a: number, b: number) => {
    return a - b;
  });

  let lowest: number = sorted[0];
  let highest: number = sorted[sorted.length - 1];
  let avg: number;
  let total: number = 0;
  sorted.map((n) => {
    total += n;
  });
  avg = total / arr.length;
  return { lowest, highest, avg };
}
console.log(lowHighAvgSort([12, 5, 23, 18, 4, 45, 32]));

// 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function joinText(arr: string[]) {
  let render: string = '';
  arr.map((word, i) => {
    if (i === arr.length - 1) {
      arr[i] = ' and ' + word;
      console.log(arr);
    }
  });
  render = arr.join();
  return render;
}
console.log(joinText(['apple', 'banana', 'cherry', 'date']));

// 3
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
function secondSmallest(num: number[]) {
  num.sort((a: number, b: number) => {
    return a - b;
  });
  return num[1];
}
console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

// 4
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
function sumArrays(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  arr1.map((n1, i) => {
    result.push(n1 + arr2[i]);
  });
  return result;
}
console.log(sumArrays([1, 2, 3], [3, 2, 1]));

// 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
function addArray(arr: number[], add: number) {
  arr.map((e, i) => {
    if (e != add && i === arr.length - 1) {
      arr.push(add);
    }
  });
  return arr;
}
console.log(addArray([1, 2, 3, 4], 7));

// 6
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function sumOnlyNum(mixArr: any[]) {
  let result: number = 0;
  mixArr.map((e) => {
    if (typeof e === 'number') {
      result += e;
    }
  });
  return result;
}
console.log(sumOnlyNum(['3', 1, 'string', null, false, undefined, 2]));

// 7
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//  The function will return [5, 10, 24, 3, 6]
// using splice
function insertToArr(max: number, ...num: number[]) {
  console.log(num);
  num.splice(max);
  return num;
}
console.log(insertToArr(5, 5, 10, 24, 3, 6, 7, 8));
// using loop

// 8
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
function combineArray(arr1: number[], arr2: number[]) {
  let combined: number[] = [...arr1, ...arr2];
  return combined;
}
console.log(combineArray([1, 2, 3], [4, 5, 6]));

// 9
// . Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
function findDuplicate(arr: number[]) {
  let duplicate: number[] = [];
  arr.map((e, i) => {
    if (e === arr[i + 1] || e === arr[i - 1]) {
      if (!duplicate.find((x) => x == e)) {
        duplicate.push(e);
      }
    }
  });
  return duplicate;
}
console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5, 5]));

// 10
// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
function findDiff(arr1: number[], arr2: number[]) {
  let combArr: number[] = [...arr1, ...arr2];
  let sorted: number[] = combArr.sort((a: number, b: number) => {
    return a - b;
  });
  console.log(sorted);

  let diff: number[] = [];
  sorted.map((e, i) => {
    console.log(e != sorted[i + 1] || e != sorted[i - 1]);

    if (e != sorted[i + 1]) {
      if (e != sorted[i - 1]) {
        console.log(e);
        diff.push(e);
      }
    }
  });
  return diff;
}
console.log(findDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// 11
// Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”
function findPrimitive(arr: any[]) {
  let output: any[] = [];
  arr.map((e) => {
    if (typeof e != 'object' || e === null) {
      output.push(e);
    }
  });
  return output;
}
console.log(findPrimitive([1, [], undefined, {}, 'string', {}, [], null]));

// 12
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40
function sumDuplicate(arr: number[]) {
  let sorted: number[] = arr.sort((a: number, b: number) => {
    return a - b;
  });

  let duplicate: number[] = [];
  sorted.map((e, i) => {
    if (e === sorted[i - 1] || e === sorted[i + 1]) {
      duplicate.push(e);
    }
  });
  let sumUp = duplicate.reduce((a: number, b: number) => {
    return a + b;
  });
  return sumUp;
}
console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// 13
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
function rockPaperScissor(pick: string) {
  let message: any;
  let randomNum: number = Math.floor(Math.random() * 3) + 1;
  // 1 : rock
  // 2 : paper
  // 3 : scissor
  if (pick.toLowerCase() === 'rock') {
    if (randomNum === 2) {
      message = 'rock lose to paper';
    } else if (randomNum === 3) {
      message = 'rock win over scissor';
    } else {
      message = rockPaperScissor(pick);
    }
  } else if (pick.toLowerCase() === 'paper') {
    if (randomNum === 3) {
      message = 'paper lose to scissor';
    } else if (randomNum === 1) {
      message = 'paper win over rock';
    } else {
      message = rockPaperScissor(pick);
    }
  } else if (pick.toLowerCase() === 'scissor') {
    if (randomNum === 1) {
      message = 'scissor lose to rock';
    } else if (randomNum === 2) {
      message = 'scissor win over paper';
    } else {
      message = rockPaperScissor(pick);
    }
  }
  return message;
}
console.log(rockPaperScissor('scissor'));
