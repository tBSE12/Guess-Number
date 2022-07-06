var systemGuess = Math.floor(Math.random()*100)+1
var guess=0
function guessNumber()
{
    var num = document.getElementById('in').value
    if(num===' '||num>100||num<1)
    {
        console.log('Input is not Valid');
        document.getElementById('out').innerText='Input is not Valid'
    }
    else
    {
        guess++
        var num=parseInt(document.getElementById('in').value);
        if(num===systemGuess)
        {
            console.log("Got the Answer correctly in "+guess+"moves...!");
            document.getElementById('out').innerHTML='<i>Bingo... Got the Answer correctly in </i>'+guess+' moves..!'
        }
        else if(num>systemGuess)
        {
            console.log("Guess a Smaller Number");
            document.getElementById('out').innerText='Guess a Smaller Number'
        }
        else 
        {
            console.log("Guess a Greater Number");
            document.getElementById('out').innerText='Guess a Greater Number'
        }
    }
}