const url="https://cat-fact.herokuapp.com/facts"
const para=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts=async ()=>{
    console.log("getting data .....");
    let response =await fetch(url);
    console.log(response);
    let data = await response.json();
    para.innertext = data;
    para.innerText=data[1].text;
}
btn.addEventListener("click", getFacts);1
