const myArr = [1,2,3,4];
// console.log(myArr);
const newArr = new Array("shaktiman","naagraj");
// console.log(newArr);
// console.log(typeof newArr);

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

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // slice take a sub array of given parameters but not including the last index of given parameter from the main array

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)  // it splits the main array, the sub array part gets removed from the main array including the last index of given parameter.
// console.log("C ", myArr);
// console.log(myn2);

const marvel_heros=["IronMan","Hulk","Thor","Captain America"];
const dc_heros=["SuperMan","BatMan","Arrow","Flash"];

// marvel_heros.push(dc_heros);    //dc added on the pre-exist array as a part of element
// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);  // to get a value of dc element we need to use 2d array indexing [][];

const all_heroes=marvel_heros.concat(dc_heros); // concat() merges the two array, but make a new array not add the elements into the pre-existing array.
// console.log(all_heroes);

//spread
const another_all_heros = [...marvel_heros,...dc_heros]  //it uses when need to merge more than two arrays
// console.log(another_all_heros);

const another_array=[1,2,3,4,[9,8],7,[6,4,[0,3,5]]];
// console.log(another_array);
// console.log(another_array.flat(Infinity));   // use to reduce multiple dimension array into single dimension array

console.log(Array.isArray("Helloworld"));
console.log(Array.from("Helloworld"));
console.log(Array.from({name:"piyush"})); //converting object into array but needed to provide which element want to convert value or key.

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));