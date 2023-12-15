/*
all primitive value stores in stack 
number,string,symbol,boolean,null,undefined,bigInt

in stack, call by value is used
*/
let number=232;
let anotherNumber=number;
console.log(anotherNumber); //print 232
anotherNumber=559;
console.log(anotherNumber); //print 559
console.log(number);        //232

/*
non-primitive value stores in Heap
function,object,array;
heap uses call by reference
*/

let user={
    name:"Piyush",
    age:18
}
console.log(user);
let usertwo=user;
console.log(usertwo);
usertwo.name="Mukesh";  //it changes the value of name for both, because name stored in heap and user and usertwo are using it through references.
console.log(user);
console.log(usertwo);