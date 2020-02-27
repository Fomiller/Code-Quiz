//  when start button is clicked 
    // the timer start with x time TIMER()
    // the start button will disappear 
    // clear all innerHTMl of the card
    
    // run question()

// create object of all questions with
$(document).ready(function(){
    // define variables
    var globalVariable = [0];
    var createBtn = $("<button>");
    var answerBtn1 = $("#answerBtn1");
    var answerBtn2 = $("#answerBtn2");
    var answerBtn3 = $("#answerBtn3");
    var answerBtn4 = $("#answerBtn4");
    var questionTitle = $("#question-title");


    // removes start button
    var removeStartBtn = function() {
        $("#startbtn").addClass("invisible");
    }

    // deletes HTML inside container
    var clearHTML = function() {
        $("#quiz-title").empty();
        $("#quiz-description").empty();
        $("#question-title").empty();
        $("#quiz-title").empty();
    }

    // renders question info
    var renderQuestion = function (){
        // creates title text
        questionTitle.text(gameObject[globalVariable].question);
        // fills answer 1 text
        answerBtn1.text(gameObject[globalVariable].answer01);
        // fills answer 1 text
        answerBtn2.text(gameObject[globalVariable].answer02);
        // fills answer 1 text
        answerBtn3.text(gameObject[globalVariable].answer03);
        // fills answer 1 text
        answerBtn4.text(gameObject[globalVariable].answer04);

        globalVariable++;
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
        if(gameObject[globalVariable].answer01 == gameObject[globalVariable].correct){
            console.log("CORRECT!")
        } else {
            console.log("WRONG!")
        }
    }


    // removes start button and renders the first title tag
    function runGame(){
        removeStartBtn();
        // console.log(gameObject[globalVariable]);
    }
// Removes start button
    var showGameBtns = function () {
        answerBtn1.removeClass("invisible");
        answerBtn2.removeClass("invisible");
        answerBtn3.removeClass("invisible");
        answerBtn4.removeClass("invisible");
    }
    
    function startGame() {
        console.log("working");
        // runGame();
        clearHTML();
        showGameBtns();
        renderQuestion();

    };
    
    
    
    
    compareAnswer();
    $("#startbtn").on("click", startGame);
    // $("#startbtn").on("click", clearHTML);

});
