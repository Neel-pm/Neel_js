let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user_score");
const cscore = document.querySelector("#comp_score");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=> {
    console.log(choice)
    choice.addEventListener("click",()=>{
        const  userchoiceid = choice.getAttribute("id");
        playgame(userchoiceid);
    });
});

const condition=(userchoiceid,compchoiceid)=>
{
    let userwin = true;

    if(userchoiceid === "rock"){
        userwin = compchoiceid==="paper" ? false : true;
    }
    else if(userchoiceid==="paper")
    {
        userwin = compchoiceid==="scissor" ? false : true;
    }
    else{
        userwin = compchoiceid==="rock" ? false : true;
    }

    return userwin;
}

const playgame = (userchoiceid)=>{
    const compchoiceid = gencompchoice();
    let result;
    if(userchoiceid === compchoiceid)
    {
        msg.innerText = "Game draw";
    }
    else{
        result = condition(userchoiceid,compchoiceid);
        showresult(result);
    }
}

const showresult=(result)=>{
    if(result)
    {
        msg.innerText = "you win"
        userscore++;
        uscore.innerText = userscore;
    }
    else{
        msg.innerText = "you lose"
        compscore++;
        cscore.innerText = compscore;
    }
}

const gencompchoice = ()=>
{
    const opt = ["rock","paper","scissor"];
    const randix = Math.floor(Math.random()*3);
    return opt[randix];
}