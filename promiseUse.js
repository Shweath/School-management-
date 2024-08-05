
// function getData (dataId,getNextData){
// return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('data',dataId);
//         resolve("sucess");
//         if(getNextData){
//             getNextData();
//         }
        
//     },6000);
// })
//     }


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