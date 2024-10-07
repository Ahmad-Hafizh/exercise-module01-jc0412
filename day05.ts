// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

function trianglePath(height: number) {
  let render: string = '';
  let num: number = 0;
  for (let i: number = 0; i < height; i++) {
    let width: number = i + 1;
    for (let w: number = 1; w <= width; w++) {
      if (num + 1 < 10) {
        num++;
        render += `0${num} `;
      } else {
        num++;
        render += `${num} `;
      }
    }
    render += '\n';
  }
  return render;
}
console.log(trianglePath(5));

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(n: number) {
  const render: string[] = [];
  for (let i: number = 0; i < n; i++) {
    let num = i + 1;
    if (num % 3 === 0 && num % 5 === 0) {
      render.push('FizzBuzz');
    } else if (num % 5 === 0) {
      render.push('Buzz');
    } else if (num % 3 === 0) {
      render.push('Fizz');
    } else {
      render.push(`${num}`);
    }
  }
  let joinRender: string = render.join(', ');
  return joinRender;
}
console.log(fizzBuzz(15));

// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z

function bmiCalculator(weight: number, height: number) {
  const BMI: number = weight / Math.pow(height, 2);
  let type: string = '';

  if (BMI < 18.5) {
    type = 'less weight';
  } else if (BMI > 18.5 && BMI <= 24.9) {
    type = 'ideal';
  } else if (BMI > 25 && BMI <= 29.9) {
    type = 'overweight';
  } else if (BMI > 30 && BMI <= 39.9) {
    type = 'very overweight';
  } else if (BMI > 39.9) {
    type = 'obesity';
  }
  return type;
}
console.log(bmiCalculator(100, 1.7));

// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
function removeOdd(arrayNum: number[]) {
  const evenNum: number[] = [];

  for (let i: number = 0; i < arrayNum.length; i++) {
    let num = arrayNum[i];
    if (num % 2 === 0) {
      evenNum.push(num);
    }
  }
  return evenNum;
}
console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
function stringSplitter(s: string) {
  const splited: string[] = s.split(' ');
  return splited;
}
console.log(stringSplitter('Hello World'));
