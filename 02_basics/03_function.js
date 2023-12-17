function workflow(){
    console.log("hello world");
}

function awai(value="ramesh"){
    return `${value} remain berozgaar`;
}
console.log(awai());
// workflow();

function addnumbers(...num1){       //...num1 is called rest
    return num1;
}
console.log(addnumbers(100,200,300,400));

function personlife(getvalue){
    console.log(getvalue);
}

const user={
    name:"mukesh",
    healthissue:"cancer",
    status:"gonna die"
};
personlife(user);
