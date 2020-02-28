//  when start button is clicked 
    // the timer start with x time TIMER()
    // the start button will disappear 
    // clear all innerHTMl of the card
    
    // run question()

// create object of all questions with
$(document).ready(function(){
    // define variables
    var globalVariable = [0];
    var score = 0;
    var sec = 59;
    var createBtn = $("<button>");
    var answerBtn1 = $("#answerBtn1");
    var answerBtn2 = $("#answerBtn2");
    var answerBtn3 = $("#answerBtn3");
    var answerBtn4 = $("#answerBtn4");
    var questionTitle = $("#question-title");

    var gameObject = [
        {
            "id": "q01",
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
            "id": "q02",
            "question": "What does CSS stand for?",
            "answer01": "Cascading Style Sheet",
            "answer02": "Computer Style Sheet",
            "answer03": "Computer Styling Sheet",
            "answer04": "Computer Super Style",
            "correct": ["Cascading Style Sheet"]

        },
        {
            "id": "q03",
            "question": "What can JavaScript do?",
            "answer01": "Create HTML",
            "answer02": "Add functionality to your web page ",
            "answer03": "Manipulate the DOM",
            "answer04": "All of the Above",
            "correct": ["All of the Above"],
        },
        {
            "id": "q04",
            "question": "What is the DOM?",
            "answer01": "Doing Optimal Mechanics",
            "answer02": "Document Object Model",
            "answer03": "Data Object Model",
            "answer04": "Directorate of Material",
            "correct": ["Document Object Model"],
        },
        {
            "id": "q05",
            "question": "What is the DOM?",
            "answer01": "Doing Optimal Mechanics",
            "answer02": "Document Object Model",
            "answer03": "Data Object Model",
            "answer04": "Directorate of Material",
            "correct": ["Document Object Model"],
        },
        {
            "id": "q06",
            "question": "What is the DOM?",
            "answer01": "Doing Optimal Mechanics",
            "answer02": "Document Object Model",
            "answer03": "Data Object Model",
            "answer04": "Directorate of Material",
            "correct": ["Document Object Model"],
        },
        {
            "id": "q07",
            "question": "What is the DOM?",
            "answer01": "Doing Optimal Mechanics",
            "answer02": "Document Object Model",
            "answer03": "Data Object Model",
            "answer04": "Directorate of Material",
            "correct": ["Document Object Model"],
        },
        {
            "id": "q08",
            "question": "What is the DOM?",
            "answer01": "Doing Optimal Mechanics",
            "answer02": "Document Object Model",
            "answer03": "Data Object Model",
            "answer04": "Directorate of Material",
            "correct": ["Document Object Model"],
        },
        {
            "id": "q09",
            "question": "What is the DOM?",
            "answer01": "Doing Optimal Mechanics",
            "answer02": "Document Object Model",
            "answer03": "Data Object Model",
            "answer04": "Directorate of Material",
            "correct": ["Document Object Model"],
        },
        {
            "id": "q10",
            "question": "What is the DOM?",
            "answer01": "Doing Optimal Mechanics",
            "answer02": "Document Object Model",
            "answer03": "Data Object Model",
            "answer04": "Directorate of Material",
            "correct": ["Document Object Model"],
        },
    ];

    // removes start button
    var removeStartBtn = function() {
        $("#startBtn").remove();
    }

    // deletes HTML inside container
    var clearHTML = function() {
        $("#quiz-title").empty();
        $("#quiz-description").empty();
        $("#question-title").empty();
        $("#quiz-title").empty();
    }

    // Removes start button
    var showGameBtns = function () {
        answerBtn1.removeClass("invisible");
        answerBtn2.removeClass("invisible");
        answerBtn3.removeClass("invisible");
        answerBtn4.removeClass("invisible");
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
    }
    
    var increaseGlobalV = function(){
        globalVariable++;
        console.log("global " + globalVariable)
    }
    
    // logic for game buttons
    var gameBtn = function(x){
        a = $(this).text();
        compareAnswer(a);
        increaseGlobalV();
        renderQuestion();
    }

    // compares btn chosen text to the correct answer
    var compareAnswer = function(answer) {

        // console.log(this.text())
        // answer will have to be a .this
        if(answer === gameObject[globalVariable].correct[0]){
            console.log("CORRECT!")
            score++;
            console.log("score: " + score)
        } else {
            console.log("WRONG!")
            subtractTime(sec);
            // suubtract time from timer
        }
    }

    // timer
    var countdownTimer = function() {
        timer = setInterval(function(){
            if(sec >= 10){
                $("#quiz-timer").text("00:" + sec);
            } else if (sec <= 9) {
                $("#quiz-timer").text("00:0" + sec);
            }
            console.log(sec)
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    var subtractTime = function() {
        clearInterval(timer);
        sec = sec - 10;
        countdownTimer();
    }
    

    
    var startGame = function() {
        console.log("Game Running");
        countdownTimer();
        removeStartBtn();
        clearHTML();
        showGameBtns();
        renderQuestion();
        
    };
    
    
    
        // removes start button and renders the first title tag
        // function runGame(){
        //     removeStartBtn();
        //     // console.log(gameObject[globalVariable]);
        // }
    
    // compareAnswer();


    $("#startBtn").on("click", startGame);
    $(".gameBtn").on("click", gameBtn)

});
