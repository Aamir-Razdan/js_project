const timeEl=document.getElementById('time');

const startEl=document.getElementById('start');
const stopEl=document.getElementById('stop');
const resetEl=document.getElementById('reset');


let interval;

let timeLeft=1500;//1500=25min

function updateTimer(){
    let minutes=Math.floor(timeLeft/60);
    let seconds=timeLeft%60;
    //let formattedTime=minutes+":"+seconds;
    let formattedTime=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timeEl.innerHTML=formattedTime;
}

function startTimer(){
    interval=setInterval(()=>{
        timeLeft--;
        updateTimer(); 
        if(timeLeft===0){
            clearInterval(interval);
            alert("Times's up!");
            timeLeft=1500;
        }
    },1000);
    
}
function stopTimer(){
    clearInterval(interval);

}
function resetTimer(){
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
   
}
startEl.addEventListener('click',startTimer);
stopEl.addEventListener('click',stopTimer);
resetEl.addEventListener('click',resetTimer);