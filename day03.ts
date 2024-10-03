// 1
// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

// INPUT
// value input for multiplication
let value: number = 9;
let renderM: string = '';
// PROCESS
// n -> from 1 ..10
// n loop
// variable yang menyimpan result string
for (let i = 1; i <= 10; i++) {
  let result: string = `${value} * ${i} \n`;
  renderM += result;
}
// output render
console.log(renderM);

// 2
// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

// variable input for word
let word: string = 'madam';

// separating every letter and structure it from the back
// comparing the mirror word and the original word
