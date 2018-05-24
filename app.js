
function main()
{
let userScore = 0;
let compScore = 0;
const us_span = document.getElementById('score1');
const cs_span = document.getElementById('score2');
const Rock = document.getElementById('r');
const Paper = document.getElementById('p');
const Scissor = document.getElementById('s');
const result = document.querySelector('.mid > h1');
    
function char(character)
    {
        if (character === "r"){return "Rock";}
        if (character === "s"){return "Scissor";}
        if (character === "p"){return "Paper";}
    }
function win(userchoice , compchoice){
    userScore++;
    us_span.innerHTML = userScore;
    result.innerHTML = `${char(userchoice)} Beats ${char(compchoice)}. You win..!!`;
    document.getElementById(userchoice).classList.add('blue');
    setTimeout(() => document.getElementById(userchoice).classList.remove('blue'),300 );
}
    function lose(userchoice , compchoice)
    {
        compScore++;
        cs_span.innerHTML = compScore;
        result.innerHTML = `${char(compchoice)} Beats ${char(userchoice)}. You lose..!!`;
        document.getElementById(userchoice).classList.add('red');
        setTimeout(() => document.getElementById(userchoice).classList.remove('red') ,300 );
    }
     function draw(userchoice , compchoice)
    {
        result.innerHTML = `${char(userchoice)} Equals ${char(compchoice)}. Its a Draw!!`;
        document.getElementById(userchoice).classList.add('grey');
        setTimeout(() => document.getElementById(userchoice).classList.remove('grey') ,300 );
    }

 function computerchoice()
    {
        let choice = [ 'r' , 'p' , 's'];
        let number = Math.floor(Math.random()*3);
        return choice[number];
        
    }
function game(userchoice)
    {
        let compchoice = computerchoice();
        switch (userchoice + compchoice)
            {
                case "rs":
                case "pr":
                case "sp":
                win(userchoice , compchoice);
                    break;
                case "rp":
                case "ps":
                case "sr":
                lose(userchoice , compchoice);
                break;
                case "pp":
                case "ss":
                case "rr":
                draw(userchoice , compchoice);    
                    
            }
    }
Rock.addEventListener('click',()=>game("r"));
Scissor.addEventListener('click',()=>game("s"));
Paper.addEventListener('click',()=>game("p"));
};


main();












