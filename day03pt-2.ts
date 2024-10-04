// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
// variable input
let sentence2: string = 'hello world';
// adding space to front
const space: string = ' ' + sentence2;
console.log(space);
// variable for storing result
let resultCap: string = '';
// variable for boolean if the first letter was true
let firstLetter: boolean = true;
// looping for separating letter from sentence
for (let i = 0; i < space.length; i++) {
  let letter: string = space.slice(i, i + 1);
  // conditional statement that change the value of boolean if letter was a ' '
  if (letter === ' ' || i === 0) {
    firstLetter = true;
    // if statement to remove the spacing that added before
    if (i === 0) {
      letter.replace(letter, '');
    } else {
      resultCap += letter;
    }
  } // if firstLetter boolean was true the code will change the first letter to uppercase
  else if (firstLetter == true) {
    let capped: string = letter.toUpperCase();
    firstLetter = false;
    resultCap += capped;
  } else {
    resultCap += letter.toLowerCase();
  }
}
// console log result cap
console.log(resultCap);

// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
// variable input sentence
let sentence3: string = 'The QuiCk BrOwN Fox';
// variable that store every uppercase letter as a comparison to the letter that will be looped and separated
const capped: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// variable that store the result to render
let renderNew: string = '';
// looping for separating the letter from sentences
for (let i = 0; i < sentence3.length; i++) {
  let letter: string = sentence3.slice(i, i + 1);
  //comparison statement to find the thruthy if the letter was a capitalized letter
  if (capped.includes(letter)) {
    let low: string = letter.toLowerCase();
    renderNew += low;
  } else {
    let up: string = letter.toUpperCase();
    renderNew += up;
  }
}
console.log(renderNew);

// Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 →
// input variable
let num1: number = 42;
let num2: number = 27;
// variable that store max and min number
let max2: number = Math.max(num1, num2);
let min2: number = Math.min(num1, num2);
// render output
const render2Num = `${max2} is bigger than ${min2}`;
console.log(render2Num);
// atau
if (num1 > num2) {
  console.log(`${num1} is bigger than ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} is bigger than ${num1}`);
}

// Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
// input variable
let n1 = 42;
let n2 = 27;
let n3 = 18;
// variable that store max and min number
let max3 = Math.max(n1, n2, n3);
let min3 = Math.min(n1, n2, n3);
// comparing all three variable to the max and min variable to find the middle value
if (max3 > n1 && n1 > min3) {
  console.log(`${min3},${n1},${max3}`);
} else if (max3 > n2 && n2 > min3) {
  console.log(`${min3},${n2},${max3}`);
} else if (max3 > n3 && n3 > min3) {
  console.log(`${min3},${n3},${max3}`);
}

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1

// variable input
let inputVar: any = 'hello';
// variable that store a string that show type of
let typeOfInput: string = typeof inputVar;
// variable for render output
let renderType: number;
// conditional statement that show whether the output is 1(string) / 2(number) / 3(any)
if (typeOfInput === 'string') {
  renderType = 1;
} else if (typeOfInput === 'number') {
  renderType = 2;
} else {
  renderType = 3;
}
console.log(renderType);

//  Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
// variable input
let sentence4: string = 'An apple a day keeps the doctor away';
// variable render akhir proses /output
let renderNewSentence: string = '';
// looping untuk memecah kalimat menjadi huruf
for (let i = 0; i < sentence4.length; i++) {
  let letter = sentence4.slice(i, i + 1);
  // conditional statment untuk memisahkan dan memmodifikasi huruf a menjadi '*' dan membiarkan huruf lain kemudian huruf disimpan ke variable render
  if (letter === 'a' || letter === 'A') {
    let replaced = '*';
    renderNewSentence += replaced;
  } else {
    renderNewSentence += letter;
  }
}
// console log render
console.log(renderNewSentence);
