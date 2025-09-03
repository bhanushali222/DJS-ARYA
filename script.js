const gameboard=document.querySelector('.gameboard');
const message=document.querySelector('.message');
const movescount=document.getElementById('movescount');
const bestscore=document.getElementById('bestscore');
const resetbtn=document.getElementById('resetbtn');
const icons=['fa-solid fa-star','fa-solid fa-heart','fa-solid fa-moon','fa-solid fa-bell','fa-solid fa-bolt','fa-solid fa-snowflake','fa-solid fa-fire','fa-solid fa-crown'];
const cards=[...icons,...icons];
let flipped=[];
let matches=0;
let locked=false;
let moves=0;

resetbtn.addEventListener('click',resetgame);
function loadbest()
{
    const score=localStorage.getItem('highscore');
    bestscore.textContent=score?`${score} moves`:'--';
}

function updatebest()
{
    const current=localStorage.getItem('highscore');
    if(!current||moves<parseInt(current))
    {
        localStorage.setItem('highscore',moves);
        loadbest();
    }
}

function shuffle(array)
{
    array.sort(()=>Math.random()-0.5);
}

function makecard(iconclass)
{
    const card=document.createElement('div');
    card.classList.add('card');
    card.dataset.icon=iconclass;
    const cardback=document.createElement('div');
    cardback.classList.add('card-face','card-back');
    card.appendChild(cardback);
    const cardfront=document.createElement('div');
    cardfront.classList.add('card-face','card-front');
    const icon=document.createElement('i');
    icon.classList.add(...iconclass.split(' '));
    cardfront.appendChild(icon);
    card.appendChild(cardfront);
    card.addEventListener('click',flipcard);
    return card;
}

function flipcard()
{
    if(locked||this===flipped[0]||this.classList.contains('match'))
    {
        return;
    }
    this.classList.add('flip');
    flipped.push(this);
    if(flipped.length===2)
    {
        locked=true;
        moves++;
        movescount.textContent=moves;
        checkmatch();
    }
}

function checkmatch()
{
    const [card1,card2]=flipped;
    if(card1.dataset.icon===card2.dataset.icon)
    {
        card1.classList.add('match');
        card2.classList.add('match');
        matches++;
        resetboard();
        if(matches===icons.length)
        {
            message.textContent='You Win';
            updatebest();
        }
    }
    else
    {
        setTimeout(()=>{
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            resetboard();
        },1000);
    }
}

function resetboard()
{
    flipped=[];
    locked=false;
}

function startgame()
{
    gameboard.innerHTML='';
    shuffle(cards);
    cards.forEach(iconclass=>{
        const card=makecard(iconclass);
        gameboard.appendChild(card);
    });
    loadbest();
}

function resetgame()
{
    moves=0;
    matches=0;
    movescount.textContent=moves;
    message.textContent='';
    resetboard();
    startgame();
}
startgame();