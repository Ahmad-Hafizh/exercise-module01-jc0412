// 1
function convertExcel(str: string) {
  let result = 0;
  let pow = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    // times with 26 because
    result *= 26;
    result += str.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
  }
  console.log('A'.charCodeAt(0));

  // for (let i = 0; i < str.length; i++) {
  //   if (i === str.length - 1) {
  //     result += str.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
  //   } else {
  //     result += str.charCodeAt(i) - 'A'.charCodeAt(0) + 1 * 26 ** pow;
  //     pow--;
  //   }
  // }

  // if (letter != s) {
  //   letter = splitAlp[i];
  //   if (letter === s) {
  //     return i + 1;
  //   } else if (i === splitAlp.length - 1) {
  //     let plusI = 0;
  //     splitAlp.forEach((e) => {
  //       letter = `${splitAlp[plusI]}${e}`;
  //       if (letter === s) {
  //         console.log(letter);
  //         return i;
  //       }
  //     });
  //     plusI++;
  //   }
  //   i++;
  //   console.log(i);
  // }
  return result;
}
console.log(convertExcel('AAA'));

// 2
function findSingle(num: number[]) {
  let sorted = num.sort((a: number, b: number) => {
    return a - b;
  });
  console.log(sorted);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      i++;
    } else {
      return sorted[i];
    }
  }
}
console.log(findSingle([4, 1, 2, 1, 2]));
console.log(findSingle([2, 2, 3]));
console.log(findSingle([1]));

// 3
function isAnagram(s: string, t: string) {
  let sortedS = s.split('').sort().join();
  let sortedT = t.split('').sort().join();
  if (sortedS === sortedT) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('car', 'cat'));

// 4
// using fibonachi
function findSteps(n: number) {
  let current: number = 0;
  let n1: number = 0;
  let n2: number = 1;
  for (let i = 0; i < n; i++) {
    current = n1 + n2;
    n1 = n2;
    n2 = current;
  }
  return n2;
}
console.log(findSteps(3));
