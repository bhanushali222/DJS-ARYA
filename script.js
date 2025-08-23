const timedisplay=document.getElementById('timedisplay');
const startbtn=document.getElementById('startbtn');
const resetbtn=document.getElementById('resetbtn');
const sessiondisplay=document.getElementById('sessiondisplay');

let mins=25;
let secs=0;
let sessions=0;
let timer=null;
let running=false;

function countdown()
{
    let displaymins;
    if(mins<10)
    {
        displaymins='0'+mins;
    }
    else
    {
        displaymins=mins;
    }
    let displaysecs;
    if(secs<10)
    {
        displaysecs='0'+secs;
    }
    else
    {
        displaysecs=secs;
    }
    timedisplay.textContent=displaymins+':'+displaysecs;
    secs=secs-1;
    if(secs<0)
    {
        secs=59;
        mins=mins-1;
    }
    if(mins<0)
    {
        clearInterval(timer);
        running=false;
        startbtn.textContent='Start';
        sessions=sessions+1;
        sessiondisplay.textContent='Sessions : '+sessions;
        mins=25;
        secs=0;
    }
}

startbtn.addEventListener('click',()=>
{
    if(running===true)
    {
        clearInterval(timer);
        running=false;
        startbtn.textContent='Start';
    }
    else
    {
        running=true;
        startbtn.textContent='Pause';
        timer=setInterval(countdown,1000);
    }
});

resetbtn.addEventListener('click',()=>
{
    clearInterval(timer);
    running=false;
    startbtn.textContent='Start';
    mins=25;
    secs=0;
    timedisplay.textContent='25:00';
});

