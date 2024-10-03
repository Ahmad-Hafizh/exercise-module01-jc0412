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
// variables for mirrored word & tell if the word is palindrome word
let mirror: string = '';
let isPalindrome: boolean = false;
// separating every letter and structure it from the back
// looping to separate the word and reunited the mirror
for (let i = word.length; i > 0; i--) {
  // console.log(i);
  let letter = word.slice(i - 1, i);
  // console.log(letter);

  mirror += letter;
  // console.log(mirror);
}
// comparing the mirror word and the original word
if (word === mirror) {
  isPalindrome = true;
}

// output render the statement which tell is word is palindrome or not
console.log(isPalindrome);

// 3
// Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”

// variable input centimeter
let inputCM: number = 100000;
// variable that convert cm to km
const convKM: number = inputCM / 100000;
// variable render km
const renderKM: string = `${convKM} km`;
console.log(renderKM);

// 4
// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

// variable input number
let _n = 1000;
// variable that convert number to IDR dan render
const IDR = `Rp. ${_n.toLocaleString()},00`;
console.log(IDR);

// 5
// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

// variable input word & search word
let sentence: string = 'wonderful world';
let searchWord: string = 'erful';

// variable that store the selected word from search word
let selectedWord: string = '';
// variable that store the remain word
let remainWord: string = '';

// if the searched word was simple it has some problem if the searched word in the second word it will take letter that suit the searched word and leave the rest \ i improve the accuracy in program 2

// program 1
// looping to separate and find the word and classified whether its search or not
for (let i = 0; i < sentence.length; i++) {
  let letter = sentence.slice(i, i + 1);
  if (searchWord.includes(letter) && selectedWord != searchWord) {
    selectedWord += letter;
  } else {
    remainWord += letter;
  }
}
console.log(selectedWord);
console.log(remainWord);
// bermasalah gunakan program 2 saja

// program 2
// finding first & last index search word index for word accuracy
const firstIndex: number = sentence.indexOf(searchWord);
const lastIndex: number = firstIndex + searchWord.length - 1;
// finding the search word
const selectedWord2: string = sentence.slice(firstIndex, lastIndex + 1);
// variable that store the remain word
let remainWord2: string = '';
// combine the index and the previous program
// compeleting the remain word
for (let i = 0; i < sentence.length; i++) {
  let letter = sentence.slice(i, i + 1);
  if (i < firstIndex || i > lastIndex) {
    remainWord2 += letter;
  }
}
console.log(selectedWord2);
console.log(remainWord2);

// bisa pake replace sih wkwkw yasudahlah
let remainWord3 = sentence.replace(searchWord, '');
console.log(remainWord3);
