
//promise then function
const getPromise = ()=>{
    return new Promise((resolve,reject) => {
        console.log("promiss xa");
        resolve("sucess");
        // reject("error");
    });
};
let promise = getPromise();
   promise.then(()=>{
    console.log("promiss fulfilled");
   });
promise.catch(()=>{
    console.log("rejected");
})
