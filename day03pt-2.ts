// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
let sentence2: string = 'hello world';
const space: string = ' ' + sentence2;
console.log(space);
let resultCap: string = '';
let capLetter: string;
let firstLetter: boolean = false;

for (let i = 0; i < space.length; i++) {
  let letter: string = space.slice(i, i + 1);

  if (letter === ' ') {
    firstLetter = true;
    if (i === 0) {
      letter.replace(letter, '');
    } else {
      resultCap += letter;
    }
  } else if (firstLetter == true) {
    let capped: string = letter.toUpperCase();
    firstLetter = false;
    resultCap += capped;
  } else {
    resultCap += letter;
  }
}
console.log(resultCap);

// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
let sentence3: string = 'The QuiCk BrOwN Fox';
const capped: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let renderNew: string = '';

for (let i = 0; i < sentence3.length; i++) {
  let letter: string = sentence3.slice(i, i + 1);
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
// ○ Example : num1 = 42, num2 = 27 → 42
let num1: number = 42;
let num2: number = 27;
let max2: number = Math.max(num1, num2);
let min2: number = Math.min(num1, num2);

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
let n1 = 42;
let n2 = 27;
let n3 = 18;

let max3 = Math.max(n1, n2, n3);
let min3 = Math.min(n1, n2, n3);

if (max3 > n1 && n1 > min3) {
  console.log(`${max3},${n1},${min3}`);
} else if (max3 > n2 && n2 > min3) {
  console.log(`${max3},${n2},${min3}`);
} else if (max3 > n3 && n3 > min3) {
  console.log(`${max3},${n3},${min3}`);
}

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1
// variable input
let inputVar: any = 'hello';
let typeOfInput: string = typeof inputVar;
let renderType: number;

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
