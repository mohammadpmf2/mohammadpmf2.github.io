var result = document.getElementById("result");
result.innerHTML = "Guess a number between -512 and 512";
var answer = Math.floor(Math.random()*1025-512);
var counter = 0;
var message = "";
result.style.backgroundColor = "green";
var audio = new Audio('audio/1.mp3');
var input = document.getElementById("guess");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
            event.preventDefault();
            f();
        }
    }
)
function f(){
    if (counter<10){
        var user_guess = document.getElementById("guess").value;
        if (counter<2){}
        else if (counter<5)
            result.style.backgroundColor = "orange";
        else if (counter<8)
            result.style.backgroundColor = "red";
        else
            audio.play();
        counter++;
        if (user_guess>answer)
            message = `High! guess a lower number. you have ${10-counter} lives left!`;
        else if(user_guess<answer)
            message = `Low! guess a higher number. you have ${10-counter} lives left!`;
        else{
            message = `Right. found the answer in ${counter} guesses.`;
            audio.pause();
            result.style.backgroundColor = "green";
        }
        result.innerHTML = message;
    }
    else{
        alert("You lose! You can not guess more numbers!");
    }
}