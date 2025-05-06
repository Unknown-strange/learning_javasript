
function Children(){
    alert("Play with toys")
}

function Adults(){
    alert("Go to work ")
}

userInput = prompt("Enter your age: ")


cleaned = userInput.trim().match(/^\d+$/);
if (cleaned){
    if (userInput < 13){
        alert("You are a child");
        Children()
    }
    else if (userInput >= 13 && userInput <= 17){
        alert("You are a teenager");
        Children()
    }
    else if (userInput >= 18 && userInput <= 64){
        alert("You are an adult")
        Adults()
    }
    else{
        alert("You are a senior")
        Adults()
    }
}

else{
    alert("Invalid input")
}


