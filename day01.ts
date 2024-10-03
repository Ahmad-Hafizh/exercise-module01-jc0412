// exercise 1
// Write a code to find area of rectangle.
// ○ Example : length = 5, width = 3
// ○ Output : 15

//  INPUT
// variable yang menyimpan nilai length dan width
let panjang: number = 5;
let lebar: number = 3;

// PROCESS
// deklarasi variable area
// perkalian berdasarkan rumus panjang kali lebar
const area: number = panjang * lebar;

// output
// variable yang menyimpan area
console.log(area);

// EXERCISE 2
// Write a code to find perimeter of rectangle.
// ○ Example : length = 5, width = 3
// ○ Output : 16

// PROCESS
const perimeter: number = 2 * (panjang + lebar);
// OUTPUT
console.log(perimeter);

// EXERCISE 3
// Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539

// INPUT
let radius: number = 5;
const P: number = Math.PI;

// PROCESS
// diameter = 2*radius
const diameter: number = radius * 2;
// circumference = 2*PI*radius
const circumference: number = P * diameter;
// area = P*radius^2
const areaCircle: number = P * Math.pow(radius, 2);

// OUTPUT
console.log(`diameter : ${diameter}
  keliling : ${circumference}
  luas : ${areaCircle}`);

//EXERCISE 4
// Write a code to find angles of triangle if two angles are given.
// ○ Example : a = 80, b = 65
// ○ Output : 35

// INPUT
let angleA: number = 80;
let angleB: number = 65;
const totalAngle: number = 180;

// PROCESS
// totalAngle - (A + B)
const angleC: number = totalAngle - (angleA + angleB);

// OUTPUT
console.log(angleC);

// EXERCISE 5
// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day

// INPUT
let dataInput: number = 400;
let data2: number = 366;

// process
// data 1
const year: number = Math.floor(dataInput / 365);
const month: number = Math.floor((dataInput % 365) / 30);
const day: number = Math.floor((dataInput % 365) % 30);
// data 2
const year2: number = Math.floor(data2 / 365);
const month2: number = Math.floor((data2 % 365) / 30);
const day2: number = Math.floor((data2 % 365) % 30);

// OUTPUT
console.log(`${year} year ${month} month ${day} days`);
console.log(`${year2} year ${month2} month ${day2} day`);

// Write a code to get difference between dates in days.
// ○ Example : date1 = 2022-01-20, date2 = 2022-01-22
// ○ Output : 2
//  input
let date1: Date = new Date('2020-01-20');
let date2: Date = new Date('2022-01-22');

// process
const difference: number = (date1.getFullYear() - date2.getFullYear()) * 365 - (date1.getMonth() + 1 - (date2.getMonth() + 1)) * 30 - (date1.getDate() - date2.getDate());
// atau
const dif = Math.abs(date2.getTime() - date1.getTime()) / 86400000;

//OUTPUT
console.log(Math.abs(difference));
console.log(dif);
