const myArr = [1,2,3,4];
// console.log(myArr);
const newArr = new Array("shaktiman","naagraj");
// console.log(newArr);

// to push an element in the array we use push()
myArr.push(6);
// console.log(myArr);

// to remove last element from a aray use pop()
myArr.pop();
// console.log(myArr);

// to insert an element from the begining of the array use unshift()
myArr.unshift(10);
// console.log(myArr);

// to remove an element from the begining of the array use shift()
myArr.shift();
// console.log(myArr);

// recommended not to use the above two methods bcz it increases the time complexity by shifting an element to the right;

const arr=myArr.join()      //join() convert the array into string including ','
// console.log(arr);
// console.log(typeof arr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // slice take a sub array of given parameters but not including the last index of given parameter from the main array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)  // it splits the main array, the sub array part gets removed from the main array including the last index of given parameter.
console.log("C ", myArr);
console.log(myn2);