// Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

// variable yang menyimpan angka
let inputNumber: number = 2;
// pembagian angka dengan bilangan dua
if (inputNumber % 2 === 0) {
  console.log('genap');
} else {
  console.log('ganjil');
}

// Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

// variable yang menyimpan angka
let inputPrime = 7;
// pembagian dan if statement
// if (inputPrime % 2 === 1 || inputPrime / 2 === 1) {
//   console.log(`${inputPrime} bilangan prima`);
// } else {
//   console.log(`${inputPrime} bukan bilangan prima`);
// }
// yang atas salah
let isPrime = true;
for (let i = 2; i < inputPrime; i++) {
  console.log(i);
  console.log(inputPrime % i);

  if (inputNumber % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

// Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

// variable N
let N = 3;
let countN = 0;
// looping penjumlahan N
for (let i = 1; i <= N; i++) {
  countN += i;
  console.log(countN);
}

// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

// variable factorial
let factorial = 6;
let countFactorial = factorial;
// looping factorial
for (let i = factorial - 1; i > 0; i--) {
  countFactorial *= i;
}
// hasil penfaktoran
console.log(`hasil dari faktorial ${factorial} adalah ${countFactorial}`);

// Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
//variable yang menyimpan N
let fN = 5;
let first = 0;
let second = 1;
let countF = 0;
// Fn + 1 = Fn – 1 + Fn
// 0,1[1],1,2[2],3[4],5[5],8[6],13[7]
for (let i = 1; i <= fN; i++) {
  countF = first + second;
  first = second;
  second = countF;
  console.log(countF);
}
console.log(second);
