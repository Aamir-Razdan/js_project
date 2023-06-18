const formEl=document.querySelector('form');
const inputDate=document.getElementById('input-date');
const ageshow=document.getElementById('age');

const presentd=new Date();
const presenty=presentd.getFullYear();
console.log(presenty);

formEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    const inputDatevalue=inputDate.value;
    const d=new Date(inputDatevalue);
    const year=d.getFullYear();
    console.log(inputDatevalue);
    console.log(year);
    getAge(year);    
});

function getAge(year){
    const age=presenty-year;
    console.log(age);
    ageshow.innerHTML=`your age is ${age}`;

}

