let form_1=document.querySelector("form");
let your_year=document.getElementById("output");


let n=new Date;
let year=n.getFullYear();


form_1.addEventListener('submit',()=>{
    event.preventDefault();
    let age=document.getElementById("age-input");
   // console.log(year-age.value);
    output(age.value);
})

function output(age){
    your_year.innerHTML=`YOUR BIRTH YEAR IS ${year-age}`;
}