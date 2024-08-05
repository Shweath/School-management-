function async(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1")
            resolve("success");
        },2000);
    })
}
function async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2")
            resolve("success");
        },2000);
    })
}
console.log("getting data one");
let p1 = async();
p1.then((reasult)=>{
    console.log("getting data one");
    let p2 = async2();
    p2.then((reasult)=>{
        console.log(reasult);
    })
});
