let Rps = document.querySelectorAll('.btn');
let msg = document.querySelector('.msg');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
let resetbtn = document.querySelector('#reset');
let uscore = 0;
let cscore = 0;

resetbtn.addEventListener('click',()=>{
    uscore = 0;
    cscore = 0;
    userScore.innerText = uscore;
    compScore.innerText = cscore;
})
let userWin = true;
Rps.forEach((el)=>{
    el.addEventListener('click',()=>{
        let userChoice = el.innerText;
        let compChoice = Rps[Math.floor(Math.random()*3)].innerText;
        checkWin(userChoice,compChoice);
    })
})
const checkWin = (userChoice,compChoice) =>{
    if(userChoice === 'Rock'){
        // paper scissor
        userWin = compChoice === 'Paper'? false:true;
    }
    else if(userChoice === 'Paper'){
        // rock scissor
        userWin = compChoice === 'Scissor'? false:true;
    }
    else {
        // rock paper
        userWin = compChoice === 'Rock'? false:true;
    }
    showWin(userWin,userChoice,compChoice);
}

const showWin = (userWin,userChoice,compChoice)=>{
    if(userChoice === compChoice){
        msg.innerText = 'Game is Drown';
    }
    else if(userWin){
        uscore++;
        userScore.innerText = uscore;
        msg.innerText = 'You win';
    }
    else{
        cscore++;
        compScore.innerText = cscore;
        msg.innerText = 'Comp win';
    }
}