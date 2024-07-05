let Rps = document.querySelectorAll('.btn');
let msg = document.querySelector('.msg');
// let Rock = Rps[0];
// let Paper = Rps[1];
// let Scissor = Rps[2];
let userWin = true;
Rps.forEach((el)=>{
    el.addEventListener('click',()=>{
        let userChoice = el.innerText;
        let compChoice = Rps[Math.floor(Math.random()*3)].innerText;
        console.log(compChoice);
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
        msg.innerText = 'You win';
    }
    else{
        msg.innerText = 'Comp win';
    }
}