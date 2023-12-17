const addtwo=(num1,num2=8)=>{
    return num1+num2;               //explicit arrow function   return type
}
console.log(addtwo(4));

const hello=()=>(console.log("hello world"));     //implicit arrow function no return type
hello();

//whenever there is a curly braces use return ;

console.log(this);

const user={
    name:"mukesh",
    age:98,
    function(){
        console.log(`${this.name} is ${this.age} year old`);
    }

}
user.function();
user.name="suresh";
user.function();
