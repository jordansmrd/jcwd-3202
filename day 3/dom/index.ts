/** @format */

//primitive
let number: number = 8912341;
let str: string = "ini string";
let bool: boolean = true;
let und: undefined = undefined;
let nul: null = null;

//non primitive
const arr: Array<number> = [1, 2, 3, 4, 5]; // generic
const arr2: number[] | string[] = [1, 2, 3, 4, 5]; //type

//type vs interface
type TProduct = {
  id: number;
  product_name: string;
};
// type adalah sebuah tipe data dalam typescript.
// biasa digunakan untuk object
// tidak bisa redeclare
// tidak bisa extend

interface IProduct extends TProduct {
  price: number;
  category?: string;
  display?: (param: string) => void;
}
// interface mirip seperti type digunakan sebagai tipe data sebuah obj
// bisa redeclare
// bisa extend

const product1: TProduct = {
  id: 1,
  product_name: "smart tv",
};
const product2: IProduct = {
  id: 2,
  product_name: "sepeda",
  price: 30000,
  display: (param: string) => param,
};

//  array of products
const products: TProduct[] = [];
const products2: Array<TProduct> = [];
products.push({ id: 3, product_name: "boneka" });
products.push(product1);
products.push(product2);

console.log("ini array products", products);

const hello = (param: string): string => param;
const r = (numb: number, ...rest: Array<string | number>) => {
  console.log(rest);
};
r(1, "dua", "tiga", 4);
// npm i typescript ts-node nodemon -g

//step to run typescript file
//1. create ts file
//2. tsc --init
//3. nodemon file.ts

const testObj = {
  name: "jordan",
  email: "jordan@mail.com",
  alamat: {
    jalan: "jalan terserah",
    no: 21,
  },
};

const { alamat } = testObj;
const { no } = alamat;
console.log(no);
