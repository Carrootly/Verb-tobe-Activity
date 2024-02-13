function checkAnswer (){
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const correctAnswer = "is";

    if (userInput === correctAnswer){
        document.getElementById('resultMessage').innerText = "Correct";
    } else {
        document.getElementById('resultMessage').innerText = "Incorrect"
    }
}

function checkAnswer1(){
    const userInput1 = document.getElementById('userInput1').value.toLowerCase();
    const correctAnswer1 = "am";

    if(userInput1 === correctAnswer1){
        document.getElementById('resultMessage1').innerText = "Correct";
    }else{
        document.getElementById('resultMessage1').innerText = "Incorrect";
    }
}

function checkAnswer2(){
    const userInput2 = document.getElementById('userInput2').value.toLowerCase();
    const correctAnswer2 = "are";
    
    if(userInput2 === correctAnswer2){
        document.getElementById('resultMessage2').innerText = "Correct";
    }else{
        document.getElementById('resultMessage2').innerText = "Incorrect";
    }
}