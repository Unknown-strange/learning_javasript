const questions = {
    "What is 5 + 2" : 7,
    "Are you gay" : "No",
    "Is this a python program" : "No",
    "Are you stupid" : "Yes"
}

let quiz_count = 0;
let userInput;

while (Object.keys(questions).length != 0){
    for (let i of Object.keys(questions)){
        
        userInput = prompt(i);

        if (userInput == questions[i]){
            alert("Correct")
            quiz_count += 1;
        }
        else{
            alert("Wrong")
        }

  
    }

    delete questions[i];

    break

}

alert("Quiz complete "+ "Total-score: " + quiz_count);
