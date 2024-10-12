// Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: 1 } & { a: 1 }
// ○ Output: true

function isEqual(a: any, b: any): boolean {
  let output: boolean = false;
  console.log(Object.keys(a)[0]);
  console.log(Object.keys(b)[0]);
  console.log(Object.values(a)[0]);
  console.log(Object.values(b)[0]);

  let charA: any;
  let keyA: string = '';

  let charB: any;
  let keyB: string = '';

  for (const key in a) {
    charA = a[key];
    keyA = key;
  }
  for (const key in b) {
    charB = b[key];
    keyB = key;
  }

  if (keyA === keyB) {
    if (charA === charB) {
      output = true;
    } else {
      output = false;
    }
  } else {
    output = false;
  }
  // return output;
  // return false

  // cara 2
  return Object.keys(a)[0] === Object.keys(b)[0] && Object.values(a)[0] === Object.values(b)[0];
}

// arrow mereturn secara otomatis
const satuBaris = (a: any, b: any): boolean => Object.keys(a)[0] === Object.keys(b)[0] && Object.values(a)[0] === Object.values(b)[0];

console.log(isEqual({ a: 2 }, { a: 1 }));
console.log(isEqual({ a: 1 }, { a: 1 }));
console.log(isEqual({ a: 'hello' }, { a: 1 }));
console.log(isEqual({ a: 'hello' }, { a: 'hello' }));
console.log(isEqual({ a: 'Hello' }, { a: 'hello' }));

// Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }
function getIntersection(arr1: any, arr2: any) {
  const keysA = Object.keys(arr1);
  const valuesA = Object.values(arr1);

  const keysB = Object.keys(arr2);
  const valuesB = Object.values(arr2);

  let output: any;

  keysA.forEach((e, i) => {
    let keyA = e;
    let valueA = valuesA[i];

    let indexKeysB = keysB.indexOf(e);
    console.log(indexKeysB);

    let keyB = keysB[indexKeysB];
    let valueB = valuesB[indexKeysB];

    if (keyA === keyB && valueA === valueB) {
      output = { ...output, [keyA]: valueA };
      // output[keyA] = arr1[keyA];
    }
  });
  return output;
}
console.log(getIntersection({ a: 1, b: 2, c: 3 }, { a: 1, c: 3, b: 3 }));

// 3
function mergeTwoData(data1: { name: string; email: string }[], data2: { name: string; email: string }[]) {
  const joined: any[] = [...data1, ...data2];
  joined.forEach((data, i) => {
    for (let n: number = i + 1; n < joined.length; n++) {
      if (data.name === joined[n].name && data.email === joined[n].email) {
        joined.splice(n, 1);
      }
    }
  });
  console.log(joined.length);
  return joined;
}
console.log(
  mergeTwoData(
    [
      { name: 'Student 1', email: 'student1@mail.com' },
      { name: 'Student 2', email: 'student2@mail.com' },
    ],
    [
      { name: 'Student 1', email: 'student1@mail.com' },
      { name: 'Student 3', email: 'student3@mail.com' },
    ]
  )
);

// 4 SWitch
function switchKey(obj: any[]) {
  let data: any = obj[0];
  let output: any;
  const arrOut: any[] = [];
  for (const key in data) {
    output = { ...output, [data[key]]: key };
  }
  arrOut.push(output);
  // return [output]
  return arrOut;
}
console.log(switchKey([{ name: 'David', age: 20 }]));

function switchKey2(obj: any[]) {
  let output: any;
  const arrOut: any[] = [];

  console.log(obj);
  obj.forEach((data) => {
    console.log(data);
    for (const key in data) {
      console.log(data[key]);
      console.log(key);

      // mengakses value butuh [] untuk deklarasi prop
      output = { ...output, [data[key]]: key };
      // output[data[key]] = key;
    }
    arrOut.push(output);
    output = {};
  });
  // return [output]
  return arrOut;
}
console.log(
  switchKey2([
    { name: 'David', age: 20 },
    { name: 'Matt', age: 99 },
  ])
);
function switchKey3(obj: any[]) {
  let newArray = obj.map((data) => {
    let output: any = {};
    console.log(data);
    for (const key in data) {
      console.log(data[key]);
      console.log(key);
      let value: any = data[key];
      // mengakses value butuh [] untuk deklarasi prop
      // output = { ...output, [data[key]]: key };
      output[value] = key;
    }

    return output;
  });

  // return [output]
  return newArray;
}
console.log(
  switchKey3([
    { name: 'David', age: 20 },
    { name: 'Matt', age: 99 },
  ])
);
//5 recursion
function getFactorial(input: number) {
  if (input === 0) {
    return 1;
  } else {
    return input * getFactorial(input - 1);
  }
}
console.log(getFactorial(5));
