console.log(null==0);
console.log(null>0);
console.log(null>=0);
/*
The reason is null == 0 and null>0 is false and 
the null>=0 is true 
is that 
== check the equality of both values
and comparison operator converts null into a number i.e 0

That's why null>=0 is true coz 0=0
*/


/* Diff Btw == and ===?
== compares the values only 
but === compares datatypes as well
*/


console.log(2=='2') // true
console.log(2==='2')//false 
console.log("02">2)

