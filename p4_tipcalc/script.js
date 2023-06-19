const bill=document.getElementById('bill-amount');
const tipIntrest=document.getElementById('tip');
const resultEl=document.getElementById('result');
const formEl=document.querySelector('form');

formEl.addEventListener('submit',(event)=>{
   // event.defaultPrevented();
    event.preventDefault();

    const billam=bill.value;
    const intrest=tipIntrest.value;
    console.log(billam);
    calTip(billam,intrest);
});


function calTip(billam,intrest){
    const x=(intrest/100)*billam;
    resultEl.innerHTML=`Tip Ammount is ${x}`;
}
