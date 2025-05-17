let text_input = document.getElementById("input");
let btn = document.getElementById("button");
let phrase = document.getElementById("text")




btn.addEventListener("click", function(){
    if (text_input.value.trim().length === 0){
        phrase.textContent = "Enter a name first";
    }
    else{
        phrase.textContent ="Hello,"+ text_input.value.toUpperCase() +"!" + " Have a nice day!"
    }
})
