// Imediately invoked function expression

(
    function hello(){
        // named iife
        console.log("hello world");
    }
)();

((name) =>{
    console.log(`${name} is the owner of the company`);
})("ambani");