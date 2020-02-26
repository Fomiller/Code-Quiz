//  when start button is clicked 
    // the timer start with x time TIMER()
    // the start button will disappear 
    // clear all innerHTMl of the card
    
    // run question()

// create object of all questions with

var gameObject = [{
    "q1": {
        "id": "1",
        "question": "What does HTML stand for?",
        "answer01": "Hyper Text Mark-up Language",
        "answer02": "Huge tall Tanly Language",
        "answer03": "Hyper Text Mark Language",
        "answer04": "Happy Tree Making Language",
        "correct": ["Hyper Text Mark-up Language"]
        // how do i reference answer01 in the position of correct[0] in a shorter hand notation
        //  I think that turning my nested objects into arrays would be easier to loop through
    },
    "q2": {
        "id": "2",
        "question": "What does CSS stand for?",
        "answer01": "Cascading Style Sheet",
        "answer02": "Computer Style Sheet",
        "answer03": "Computer Styling Sheet",
        "answer04": "Computer Super Style",
        "correct": "Cascading Style Sheet",
        "correct": ["Cascading Style Sheet"]

    },
    "q3": {
        "id": "3",
        "question": "What can JavaScript do?",
        "answer01": "Create HTML",
        "answer02": "Add functionality to your web page ",
        "answer03": "Manipulate the DOM",
        "answer04": "All of the Above",
        "correct": ["All of the Above"],
    },
    "q4": {
        "id": "4",
        "question": "What is the DOM?",
        "answer01": "Doing Optimal Mechanics",
        "answer02": "Document Object Model",
        "answer03": "Daily Object Model",
        "answer04": "Directorate of Material",
        "correct": ["Document Object Model"],
    }
}];

console.log(gameObject[0]);
console.log(gameObject[0].q1);
console.log(gameObject[0].q1.question);
console.log(gameObject[0].q1.answer01);
console.log(gameObject[0].q1.correct[0]);
// console.log(gameObject.q1.answer01);
// console.log(gameObject.q1.correct);

function compareAnswer(){
    if(gameObject[0].q1.answer01 == gameObject[0].q1.correct[0]){
        console.log("CORRECT!")
    } else {
        console.log("WRONG!")
    }
}
compareAnswer();

function clearHtml() {
    // deletes HTML inside container
    // clears slate for new HTML to be written
}

function startGame() {
    console.log("working");
};




$("#startbtn").on("click", function(event){
    event.preventDefault();
    console.log("working");
});


