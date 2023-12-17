
// object literals

const mySym = Symbol("key1")


const JsUser = {                    //this declariton called as a literals
    name: "Piyush",
    "full name": "Piyush Agrawal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Piyush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Piyush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Piyush@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// singleton
// const tinder={}          //this declartion is also correct;
const tinder=new Object();   // this declartion called as a singleton
tinder.email='some@gmail.com';
tinder.age=18;
tinder.isLoggedIn=true;

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('isLoggedIn'));

const regularobject={               // object under object 
    age:23,
    fullname:{
        username:{
            firstName:"himesh",
            lastName:"DA"
        }
    },
    profession:"Manager",
    state:'rajastan'
}
// console.log(regularobject.fullname.username.firstName);    // calling the specific value from object under object 

const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'c'};
const obj3={6:'a',7:'c'};
let obj4;
// obj4={obj1,obj2};     // it make the object under object
// obj4={...obj1,...obj2};  // spread way to merge two object
// Object.assign(obj1,obj2);   // in this object 1 and object 2 merge and every value stored in object 1
// console.log(obj1);

obj4=Object.assign({},obj1,obj2,obj3);   // target and source;
// console.log(obj4);  

const user=[
    {
        1:'a',
        2:'b'
    },
    {
        4:'a',
        5:'4',
        email:'some'
    }
]
console.log(user[1]['email']);

// Deconstructor

const {email:e}=tinder;
console.log(e);