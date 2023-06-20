
const formEl=document.querySelector('form');
const rolbuttonEl=document.getElementById('roll-button');
const diceEl=document.getElementById('dice');

const rollHistoryEl=document.getElementById('roll-history');

let historyList=[];


function rollDice(){
    const randomNumber = Math.floor(Math.random() * (6-1+1))+1;

    const diceFace=getDiceFace(randomNumber);
    diceEl.innerHTML=diceFace;
    historyList.push(randomNumber);
    updateRollHistory();


}


function updateRollHistory(){
    rollHistoryEl.innerHTML="";
    for(let i=0;i<historyList.length;i++){
        const listItem=document.createElement("li");
        listItem.innerHTML=`Player ${i+1}: <span>${getDiceFace(historyList[i])}
        </span>`;
        rollHistoryEl.appendChild(listItem);
    }

}


function getDiceFace(randomNumber){
    switch(randomNumber){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";

    }

}

rolbuttonEl.addEventListener('click',()=>{
    
    diceEl.classList.add('roll-animation');
    setTimeout( ()=>{diceEl.classList.remove('roll-animation');rollDice()},1000);
})






 