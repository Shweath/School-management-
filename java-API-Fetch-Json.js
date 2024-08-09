const url="/api-docs/v2/swagger.json"
const para=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts=async ()=>{
    console.log("getting data .....");
    let response =await fetch(url);
    console.log(response);
    let data = await response.json();
    para.innertext = data[1].id;
    console.log(data);
}
btn.addEventListener("click", getFacts);
