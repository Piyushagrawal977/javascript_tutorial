const promiseone=new Promise((resolved,reject)=>{
    setTimeout(()=>{
        console.log("asycn 1 promise");
        resolved();
    },1000)
   
})
promiseone.then(function(){
    console.log("Resolved promise one");
})

//using then and catch
new Promise((resolve,reject)=>{
    let error=false;
    if(!error)
    {
        resolve({username:"piyush",age:18});
    }
    else
    {
        reject("Error: Something went wrong");
    }

}).then((response)=>{
    console.log(response);
    return response.username;
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

//using async and await
const getdata=new Promise((resolve,reject)=>{
    let error=true;
    if(!error)
    resolve("Promise 3");
    else 
    {
        reject("something went wrong");
    }
})

async function promise_3(){    
    
    try
    {
        const response=await getdata;
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
    
}

promise_3();

async function getalldata(){
    try
    {
        const response=await fetch('https://randomuser.me/api/');
        console.log(response);
    }
    catch(error){
        console.log("error");
    }
}
getalldata();