// Problem 1
function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  throw new Error("Input should be string, number or boolean");
}

// problem 2
function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }

  throw new Error("Input should be string or a array");
}

// problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// problem 4
type item = { title: string; rating: number };
function filterByRating(items: item[]): item[] {
  return items.filter((item) => {
    if (item.rating < 0 || item.rating > 5)
      throw new Error("The rating should between 0 to 5");
    if (item.rating >= 4 && item.rating <= 5) {
      return true;
    }
  });
}

// problem 5
type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: user[]): user[] {
  return users.filter((user) => user.isActive === true);
}

// problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  const bookDetails = `Title: ${book.title}, Author: ${
    book.author
  }, Published: ${book.publishedYear}, Available: ${
    book.isAvailable ? "Yes" : "No"
  }`;
  console.log(bookDetails);
}

// problem 7

function getUniqueValues(
  array1: (number | string)[],
  array2: (number | string)[]
): (number | string)[] {
  const uniqueArray: (number | string)[] = [];
  for (let item of array1) {
    let isExist = false;
    for (let newItem of uniqueArray) {
      if (newItem === item) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      uniqueArray.push(item);
    }
  }

  for (let item of array2) {
    let isExist = false;
    for (let newItem of uniqueArray) {
      if (newItem === item) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
}

// problem 8
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }
  let total = 0;
  products.map(
    (product) =>
      (total =
        total +
        (product.discount
          ? product.price - (product.price * product.discount) / 100
          : product.price) *
          product.quantity)
  );
  return total;
}
