function goToQuiz(){
    document.getElementById('takeQuiz').innerHTML
}

function checkQuestion1(){
    event:preventDefault()

    let inputBox = document.getElementById('answer1').value;
    let answer = inputBox.value;
    let message

    if (answer == 'hellspawn') {
        //This is correct answer
        message = "Correct answer: Hellspawn. You are correct"
    } else if (answer == '') {
        //Nothing has been entered :(
       message = "Enter an answer please."
    } else {
        //This is the wrong answer- anything that isn't "hellspawn"
       message ="Correct answer: Hellspawn. WRONG!"
    }

    document.getElementById('message').innerText = message;
}

document.getElementById('check').onclick = checkQuestion1