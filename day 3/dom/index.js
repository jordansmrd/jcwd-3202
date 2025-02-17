/** @format */

let number = 123;
number = "hello";

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.push("hello");

console.log(arr);

const funR = (numb, ...rest) => {
  console.log(rest);
};

funR(1, 2, 3, 4, 5, 6, 7);
