/* Types of datatypes
-> Primitive -> these are call by value datatype i.e these when copied gives only the value not the memory reference...


->Non premetive -> These are call by reference
Array , Object, Functions */
let id = Symbol("123")
console.log(id);


let a = 12n// by writing only n in last will change it to bigint
console.log(typeof a);

const h  = [1,2,3]
console.log(typeof h);


// *************************************************
/*
Stack memory is used by primitive datatypes
Heap memory is used by non-primitive datatypes
*/


let x = "aman"
let b = x;
b = "simar"
console.log(x);
console.log(b);// this changed b but not x

let n  = [1,2,3]
let n2 = n
n2[0] = 9
console.log(n)//changes copy and the original one as well (thats the power of heap memory)