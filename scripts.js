let score = 0;

function checkQuestion1(event, correct) { //"correct" here will be changed to the correct answer for each question when
    // the function is run, and "event" lets the bottom bits know that it's an event, which the event listener catches
    console.log('question1')
    // "prevent default" stops the page from reloading when the form is submitted, which is the default action
    event.preventDefault();

    let inputBox = document.getElementById('answer');
    let answer = inputBox.value; 
    //so "answer" is whatever the user has typed

    if (answer == correct) {
        //This is correct answer
        document.getElementById('answer').style.borderColor = 'green';
        // the green/red border makes it clearer to the user that their answer is correct or incorrect.    
        document.getElementById('message').innerHTML = 'Correct! Well done';
        score += 1;
    } else if (answer == '') {
        //Nothing has been entered :(
        document.getElementById('answer').style.borderColor = 'red';
        document.getElementById('message').innerHTML = 'Please enter an answer :(';
    } else {
        //This is the wrong answer- anything that isn't the correct answer
        console.log('wrong')
        document.getElementById('answer').style.borderColor = 'red';
        document.getElementById('message').innerHTML = 'Incorrect :( The correct answer is ' + correct; 
        // "+ correct" just puts whatever the correct answer is for that question into the message
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

// The things below check if the element "check[number]" is present on the page, which kind of determines what
// question page it's on. Then it takes the "check" element, adds the listener which picks up the event.preventDefault
// and the event of running the function when the "check" element is clicked, rather than using "onclick." 

if (document.getElementById('check1')){
    document.getElementById('check1').addEventListener('click', (event) => checkQuestion1(event, 'polynucleotide'));
    //(event, 'polynucleotide')
    // This means that "correct" in the brackets in the original function is the same as "polynucleotide" here
}
if (document.getElementById('check2')) {
    document.getElementById('check2').addEventListener('click', (event) => checkQuestion1(event, 'thread-like structure'));
}
if (document.getElementById('check3')) {
    document.getElementById('check3').addEventListener('click', (event) => checkQuestion1(event, 'protein'));
}