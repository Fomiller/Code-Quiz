//  when start button is clicked 
    // the timer start with x time TIMER()
    // the start button will disappear 
    // clear all innerHTMl of the card
    
    // run question()

// create object of all questions with
$(document).ready(function(){
    globalVariable = [0];

    // clears slate for new HTML to be written
    // deletes HTML inside container
    function clearHTML() {
        $("#quiz-title").empty();
        $("#question-title").empty();
        $("#card-text").empty();
        $("#quiz-title").empty();
    }

    var gameObject = [
        {
            "id": "q1",
            "question": "What does HTML stand for?",
            "answer01": "Hyper Text Mark-up Language",
            "answer02": "Huge tall Tanly Language",
            "answer03": "Hyper Text Mark Language",
            "answer04": "Happy Tree Making Language",
            "correct": ["Hyper Text Mark-up Language"]
            // how do i reference answer01 in the position of correct[0] in a shorter hand notation
            //  I think that turning my nested objects into arrays would be easier to loop through
        },
        {
            "id": "q2",
            "question": "What does CSS stand for?",
            "answer01": "Cascading Style Sheet",
            "answer02": "Computer Style Sheet",
            "answer03": "Computer Styling Sheet",
            "answer04": "Computer Super Style",
            "correct": "Cascading Style Sheet",
            "correct": ["Cascading Style Sheet"]

        },
        {
            "id": "q3",
            "question": "What can JavaScript do?",
            "answer01": "Create HTML",
            "answer02": "Add functionality to your web page ",
            "answer03": "Manipulate the DOM",
            "answer04": "All of the Above",
            "correct": ["All of the Above"],
        },
        {
            "id": "q4",
            "question": "What is the DOM?",
            "answer01": "Doing Optimal Mechanics",
            "answer02": "Document Object Model",
            "answer03": "Daily Object Model",
            "answer04": "Directorate of Material",
            "correct": ["Document Object Model"],
        },
    ];

    function compareAnswer(){
        // answer will have to be a .this
        if(gameObject[0].answer01 == gameObject[0].correct[0]){
            console.log("CORRECT!")
        } else {
            console.log("WRONG!")
        }
    }
    
    function startGame() {
        console.log("working");
        runGame();
    };
    
    function runGame(){
        $("startbtn").attr("style", "display: none")
        // console.log(gameObject[globalVariable]);
        $("#question-title").text(gameObject[globalVariable].question);
    }
    
    
    
    compareAnswer();
    $("#startbtn").on("click", startGame);
    // $("#startbtn").on("click", clearHTML);

});
