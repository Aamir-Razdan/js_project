

const buttons=document.querySelectorAll('button');

const match_result=document.getElementById('result');
const playersc=document.getElementById('user-score');
const computersc=document.getElementById('computer-score');


let player;
let computerScore=0;
let playerScore=0;

let computer_choice;

let item=["rock","paper","scissor"];


let computer=item[(Math.floor(Math.random()*3))];




buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        player=button.id;
        console.log(player);
        Game(player);
    })
});


function Game(player){
    if(computer ==='rock' && player==='scissor' ){
        match_result.innerHTML='computer win';
        computerScore++;
        computersc.innerHTML=`${computerScore}`;

    }
    
    else if(computer==='scissor' && player=='paper' ){
        match_result.innerHTML='computer win';
        computerScore++;
        computersc.innerHTML=`${computerScore}`;
    }
    
    else if(computer  ==='rock' && player=='paper' ){
        match_result.innerHTML='player win';
        playerScore++;
        playersc.innerHTML=`${playerScore}`;

    }
    else if(computer  ==='paper' && player=='rock' ){
        match_result.innerHTML='computer win';
        computerScore++;
        computersc.innerHTML=`${computerScore}`;
    }
    else if(computer  ==='scissor' && player=='rock' ){
        match_result.innerHTML='player win';
        playerScore++;
        playersc.innerHTML=`${playerScore}`;
    }
    else if(computer  ==='paper' && player=='scissor' ){
        match_result.innerHTML='player win';
        playerScore++;
        playersc.innerHTML=`${playerScore}`;
    }
    else{
        match_result.innerHTML='draw';
    }
}



