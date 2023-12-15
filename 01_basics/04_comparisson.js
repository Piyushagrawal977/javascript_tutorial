// below comparison are normal comparsion, both values are of same datatype

console.log('Normal comaprison')
console.log(2>1);
console.log(3<2);
console.log(4==4);  // == it is a normal equality comaprison , it only checks the values
console.log(9===4);  // === it is a strict equality comparison, it doesn't only check the value, as well as the datatype.
console.log(9!=0);

// different datatype comparison

console.log('differnt datatype comparison');
console.log("2">1);
console.log("02">1);
console.log("02" == 2)    // normal comparison, value only check
console.log("02" === 2);  // it is a strict comaprison, datatype also check with values

console.log("null comparison");
console.log(null>0);  //=> false
console.log(null==0); // => false
console.log(null >= 0); //=> true

// in javascript the ==,=== and <,>,>=,<= works differently, <,>,<=,>= converts the value as per needed datatype and then compare it, while == and === doesn't converts the value.Therefore null == 0 is false and null>=0 is truce because >= convert the null into zero and then compare it with 0.

console.log("undefined");
console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined >= 0); //false
