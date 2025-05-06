
    userInput = prompt('Enter your word');
    num = Number()

    for(let i = 1; i <= num; i++){
        alert(i + " : "+userInput)
    }


function Number(){
    input = prompt("Enter the number of reps");
    let cleaned = input.trim().match(/^[1-9]\d*$/);
    if (cleaned){
        return input
    }
    else{
        alert("invalid input")
    }
}

