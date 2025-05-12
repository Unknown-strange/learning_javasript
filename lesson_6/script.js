let userInputArray = [];

function addStudent(){
    while(true){
        let userinput = prompt("Do you want to add a student name");
        if(userinput.toLowerCase() === "no"){
            break;
        }

        let studenttName = prompt("Student's name");
        let age = prompt("Age");
        let Grade = prompt("Grade");
        let Gender = prompt("Gender(male/female");
        let details = {
            studnetname: studenttName,
            age : age,
            grade: Grade,
            gender: Gender,
        }
     userInputArray.push(details)
    }
    return userInputArray
}



function searchStudent(){
    let studentName = prompt("Name of student")
    for(student in userInputArray){
        if (student.name.toLowerCase() === studentName.toLowerCase()){
            alert({studentName} + "is a student")
            alert("Name:" + student.name)
            alert("Age:" + student.age)
            alert("Grade:" + student.grade)
            alert("Gender:"+ student.gender)
        }
        else{
            alert({studentName} + "is not a student")
        }

    }
}


let input = prompt("Do you want to search or add student")
if(input === "add"){
    addStudent()
}
else if(input === "search"){
    if(userInputArray.length == 0){
        alert("Add a student first")
        addStudent()
    }
    else{
        searchStudent()
    }
}


