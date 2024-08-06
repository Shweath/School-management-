function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("sucess");
        },2000)
    })
}
// Using async fuunction called Data and awaiting the getData
async function Data(){
    await getData(1);
    await getData(2);
    await getData(3);
}
