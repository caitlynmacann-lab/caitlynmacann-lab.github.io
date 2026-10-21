let score = 0;

function checkQuestion1(event) {
    console.log('question1')
    event.preventDefault();

    let inputBox = document.getElementById('answer1');

    let answer = inputBox.value; 
    //so "answer" is whatever the user has typed

    if (answer == 'polynucleotide') {
        //This is correct answer        
        document.getElementById('message').innerHTML = 'Correct! Well done';
        score += 1;
    } else if (answer == '') {
        //Nothing has been entered :(
        document.getElementById('message').innerHTML = 'Please enter an answer :(';
    } else {
        //This is the wrong answer- anything that isn't the correct answer
        document.getElementById('message').innerHTML = 'Incorrect :( The correct answer is "polynucleotide"';
    }
}

function checkQuestion2(event) {

    event.preventDefault();

    let inputBox = document.getElementById('answer2');
    let answer2 = inputBox.value;
    //so "answer" is whatever the user has typed

    if (answer2 == 'thread-like structure') {
        //This is correct answer
        document.getElementById('message2').innerHTML = 'Correct! Well done';
        score += 1;
    } else if (answer2 == '') {
        //Nothing has been entered :(
        document.getElementById('message2').innerHTML = 'Please enter an answer :(';
    } else {
        //This is the wrong answer- anything that isn't the correct answer
        document.getElementById('message2').innerHTML = 'Incorrect :( The correct answer is "thread-like structure"';
    }
}


//function checkButton(answer) {
 //   if (answer == 'correct') {
 //       document.getElementById('message1').innerHTML = "Correct";
 //       score += 1;
 //   }
   // if (answer == 'incorrect') {
   //     document.getElementById('message1').innerHTML = "Nope";
  //  }
//}


document.getElementById('check1').addEventListener('click', checkQuestion1);
document.getElementById('check2').addEventListener('click', checkQuestion2);