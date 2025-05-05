
function addition(a,b){
    add_values = a + b;
    printout(add_values)
}

function subtration(a,b){
    subtract_values = a - b;
    printout(subtract_values)
}

function divison(a,b){
    if (b == 0){
        alert("Zero Erro detected")
    }

    div_values = a / b;
    printout(div_values)


}

function multiplication(a,b){
    multi_values = a * b;
    printout(multi_values)
}

function printout(x){
    alert(x)
}



const userInput = prompt("Waiting for entry")


while (userInput != "break"){
    const [firstValue, operand, secondValue] = userInput.split("").map(item => item.trim());

    if (operand === "+"){
        addition(firstValue, secondValue)
    }

    else if (operand === "-"){
        subtration(firstValue,secondValue)
    }

    else if(operand === "/"){
        divison(firstValue,secondValue)
    }

    else if(operand === "*"){
        multiplication(firstValue, secondValue)
    }
    
    break
}
