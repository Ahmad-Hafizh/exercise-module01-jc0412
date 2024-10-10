// Create a function to calculate array of student data
// ● The object has this following properties :
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
// ■ Score
// ● Highest
// ● Lowest
// ● Average
// ■ Age
// ● Highest
// ● Lowest
// ● Average
interface IStudent {
  name: string;
  email: string;
  age: number;
  score: number;
}
class Student implements IStudent {
  name: string;
  email: string;
  age: number;
  score: number;
  constructor(_name: string, _email: string, _age: number, _score: number) {
    this.name = _name;
    this.email = _email;
    this.age = _age;
    this.score = _score;
  }
}
function calcStudentData(studentsData: IStudent[]) {
  const score: number[] = [];
  const age: number[] = [];
  studentsData.map((e, i) => {
    age.push(e.age);
    score.push(e.score);
  });
  const highestAge: number = Math.max(...age);
  const lowestAge: number = Math.min(...age);
  const avgAge: number =
    age.reduce((a: number, b: number) => {
      return a + b;
    }) / age.length;

  const highestScore: number = Math.max(...score);
  const lowestScore: number = Math.min(...score);
  const avgScore: number =
    score.reduce((a: number, b: number) => {
      return a + b;
    }) / score.length;

  // output
  const output: any[] = [
    {
      highestScore,
      lowestScore,
      avgScore,
    },
    {
      highestAge,
      lowestAge,
      avgAge,
    },
  ];
  return output;
}
console.log(calcStudentData([new Student('john', 'john@gmail.com', 19, 90), new Student('erika', 'erika@gmail.com', 18, 96), new Student('matt', 'matt@gmail.com', 19, 75)]));

// Create a program to create transaction
// ● Product Class
// ○ Properties
// ■ Name
// ■ Price
// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty
// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data
interface IProduct {
  name: string;
  price: number;
}

class Product implements IProduct {
  name: string;
  price: number;
  constructor(_name: string, _price: number) {
    this.name = _name;
    this.price = _price;
  }
}
class Transaction {
  total: number;
  quantity: number;
  // tambahan property
  product: Product;
  cart: any[];

  constructor() {
    this.cart = [];
    this.total = 0;
  }
  addToCart = (_product: IProduct, _quantity: number) => {
    this.product = _product;
    this.quantity = _quantity;
    this.cart.push({ name: this.product.name, price: this.product.price, quantity: this.quantity });
    return this.cart;
  };
  getTotal = () => {
    this.cart.map((e) => {
      this.total += e.price * e.quantity;
    });
    return this.total;
  };
  checkOut = () => {
    const currProduct: { product: IProduct; qty: number }[] = [...this.cart];
    this.total = 0;
    this.cart = [];
    return currProduct;
  };
}

let product1 = new Product('donut', 5000);
let product2 = new Product('wiper', 2000);
let transaction = new Transaction();
let cart = transaction.addToCart(product1, 3);
cart = transaction.addToCart(product2, 3);
console.log(cart);

console.log(transaction.getTotal());
console.log(transaction.checkOut());
