//! interface

type Score = "A" | "B" | "c" | "F";

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birth: number;
  [grade: number]: Score;
}

let user: User = {
  name: "xx",
  age: 30,
  birth: 2000,
  1: "A",
  2: "B",
};

//! number
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20);

//! boolean
interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};

a(30); //true

//! implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
