////////*For-1*////////////////
/*
let a = +prompt("A ning qiymatini kiriting");
let b = +prompt("B ning qiymatini kiriting");
let c = 0;
for (let i = a; i <= b; i++) {
  console.log(i);
  c++;
}
console.log(`Chiqarilgan sonlar soni: ${c}`);
*/
////////*For-2*////////////////
/*
let a = +prompt("A ning qiymatini kiriting");
let b = +prompt("B ning qiymatini kiriting");
let c = 0;
for (let i = b - 1; i > a; i--) {
  console.log(i);
  c++;
}
console.log(`Chiqarilgan sonlar soni: ${c}`);
*/
////////*For-3*////////////////
/*
let a = +prompt("1 kg konfet narxini kiriting");
for (let i = 1; i <= 10; i++) {
  console.log(i * a);
}
*/
////////*For-4*////////////////
/*
let a = +prompt("1 kg konfet narxini kiriting");
for (let i = 1.2; i <= 2; i += 0.2) {
  console.log(i * a);
}
*/
////////*For-5*////////////////
/*
let a = +prompt("A ning qiymatini kiriting ");
let b = +prompt("B ning qiymatini kiriting ");
let c = 0;
for (let i = a; i <= b; i++) {
  c = c + i;
}
console.log(c);
*/
////////*For-6*////////////////
/*
let a = +prompt("A ning qiymatini kiriting ");
let b = +prompt("B ning qiymatini kiriting ");
let c = 1;
for (let i = a; i <= b; i++) {
  c = c * i;
}
console.log(c);
*/
////////*For-7*////////////////
/*
let a = +prompt("A ning qiymatini kiriting ");
let b = +prompt("B ning qiymatini kiriting ");
let kv = 1;
let c = 0;
for (let i = a; i <= b; i++) {
  kv = i ** 2;
  c = c + kv;
}
console.log(c);
*/
////////*For-8*////////////////
/*
let n = +prompt("Butun son kiriting");
let b = 0;
for (let i = 1; i <= n; i++) {
  b += i;
  console.log(b);
}
// console.log(b);
*/
////////*For-9*////////////////
/*
let n = +prompt("Butun son kiriting");
let v = 1;
for (let i = 1; i <= n; i++) {
  v *= 1 + 0.1 * i;
  console.log(v);
}
*/
////////*For-10*/ //////////////
/*
let n = +prompt("Butun son kiriting");
let y = 0;
for (let i = 1; i <= n; i += 2) {
  y = y + i;
  console.log(i);
}
console.log("Yig'indi:", y + (2 * n - 1));
*/
////////*For-20*/ //////////////
/*
let n = +prompt("Butun son kiriting");
let str = "";

for (let i = 1; i <= n; i++) {
  str = "" + str + i;
  console.log(str);
}
*/
////////*While-1*////////////////
/*
let a = +prompt("a ning qiymatini kiriting");
let b = +prompt("b ning qiymatini kiriting");
while (a >= b) {
  a = a - b;
}
console.log(a);
*/
////////*While-2*////////////////
/*
let a = +prompt("a ning qiymatini kiriting");
let b = +prompt("b ning qiymatini kiriting");
let y = 0;
while (a >= b) {
  y = y + 1;
  a = a - b;
  console.log(a);
}
console.log(y);
*/
////////*While-3*/ //////////////
/*
let a = 3;
let n = +prompt("n ning qiymatini kiriting");
let i = 0;
while (a <= n) {
  console.log(a);
  a = a * 3;
  i++;
}
if (a != n) {
  console.log("3-ning darajasi");
} else {
  console.log("3-ning darajasi emas");
}
*/
////////*While-4*////////////////
/*
let n = +prompt("n ning qiymatini kiriting");
let m = +prompt("m ning qiymatini kiriting");
let y = 0;
while (n >= m) {
  y = y + 1;
  n = n - m;
}
console.log(y);
console.log(n);
*/
////////*While-5*////////////////
/*
// let n = +prompt("Butun son kiriting");
// let a = Math.floor(n / 10);
// let b = n % 10;
// console.log(10 * b + a);
// let input = prompt("Butun son kiriting");
// let a = input + "";
// let res = a.split("");
// for (i = res.length; i > 0; i--) {
//   console.log(i);
// }
*/
