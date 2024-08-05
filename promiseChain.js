function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("sucess");
        },2000)
    })
}
getData(1).then(()=>{
    return getData(2)
})
.then(()=>{
    return getData(3);
})
.then(()=>{
    return getData(4);
})
