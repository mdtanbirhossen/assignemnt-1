// Problem 1
function formatValue(
  value: string | number | boolean
): string | number | boolean | undefined {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
}

// problem 2
function getLength(value: string | any[]): number | undefined {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
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
    return `"Name: ${this.name}, Age: ${this.age}"`;
  }
}

// problem 4
type item = { title: string; rating: number };
function filterByRating(items: item[]): item[] {
  return items.filter((item) => item.rating >= 4 && item.rating <= 5);
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
// function getUniqueValues(array1: number[], array2: number[]) {
//   const uniqueItems = array1.filter((item) => !array2.includes(item));
//   return [...uniqueItems, ...array2];
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));
