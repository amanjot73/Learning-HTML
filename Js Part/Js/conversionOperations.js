let a = 33
let sa = String(a)
console.log(sa);
console.log(typeof sa);

let b = "33"
console.log(typeof b);
nb = Number(b)
console.log(typeof nb);
console.log(nb);
// here is the twist

let c= "12aman"
console.log(c);
console.log(typeof c);
let nc = Number(c)//this converted the c into number 
console.log(nc);// but after converting we got to know that
//value is NaN.....point to remember
console.log(typeof nc); // but type is number


let k = ""
bk = Boolean(k)
console.log(bk);
console.log(typeof bk);

/* For boolean conversion
1 = true , 0 = false, empty string is also false
>=1 and <0 is also true

*/


let  m = true
let m2 = String(m)
console.log(m2);
console.log(typeof m2);



// **********************Operations**************************

console.log(1+3+"2"+3+4+54);

console.log(true);
console.log(+true); // is  1 (+ is for converting into Number)

// Also study prefix and postfix






