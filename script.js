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
    // var submitButton = $("#submitBtn");

    var gameObject = [
        {
            "id": "q01",
            "question": "What does HTML stand for?",
            "answer01": "Hyper Text Mark-up Language",
            "answer02": "Huge tall Tanly Language",
            "answer03": "Hyper Text Mark Language",
            "answer04": "Happy Tree Making Language",
            "correct": ["Hyper Text Mark-up Language"]

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
            "question": "NaN stands for?",
            "answer01": "Not a numeral",
            "answer02": "Not a number",
            "answer03": "Not a negative",
            "answer04": "Not a node",
            "correct": ["Not a number"],
        },
        {
            "id": "q06",
            "question": "What does JSON mean?",
            "answer01": "Jason",
            "answer02": "Jquery Super Object Notation",
            "answer03": "JavaScript Object Notation",
            "answer04": "Joing String Object Notation",
            "correct": ["JavaScript Object Notation"],
        },
        {
            "id": "q07",
            "question": "How can you include a script tag?",
            "answer01": "Inside a link tag",
            "answer02": "Inside a head tag",
            "answer03": "Iniside a script tag",
            "answer04": "Inside the body tag",
            "correct": ["Iniside a script tag"],
        },
        {
            "id": "q08",
            "question": "API is an acronym for",
            "answer01": "Application Program Interface",
            "answer02": "Application Programming Interface",
            "answer03": "Application Proprietary Interface",
            "answer04": "Application Programing Interval",
            "correct": ["Application Programming Interface"],
        },
        {
            "id": "q09",
            "question": ".split(' ')",
            "answer01": "Split a string into an array of substrings",
            "answer02": "Split a string into an array of arrays",
            "answer03": "Split a string into an array of objects",
            "answer04": "Split a array into an string of substrings",
            "correct": ["Split a string into an array of substrings"],
        },
        {
            "id": "q10",
            "question": "Jquery is a JavaScript ______.",
            "answer01": "API",
            "answer02": "Document Object Model",
            "answer03": "Array",
            "answer04": "Framework",
            "correct": ["Framework"],
        },
        {
            "id": "Game Over",
            "title": ["All done!", "Time's up! Game Over!",],
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

    var clearHTMLMax = function() {
        $("#quiz-title").empty();
        $("#quiz-description").empty();
        $("#question-title").empty();
        $("#quiz-title").empty();
        $("#answerBtn1").remove();
        $("#answerBtn2").remove();
        $("#answerBtn3").remove();
        $("#answerBtn4").remove();
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
        if (globalVariable < 10){
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
        } else {
            // clearHTMLMax();
            // clearInterval(timer);
            gameFinish();
        }

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
                timesUp();
            }
        }, 1000);
    }

    var subtractTime = function() {
        clearInterval(timer);
        sec = sec - 10;
        countdownTimer();
    }

    // Run if you make it through all questions without running out of time displays a congratulations title 
    var gameFinish = function() {
        clearInterval(timer);
        clearHTMLMax();
        $("#quiz-title").text(gameObject[10].title[0])
        $("#question-title").text("You scored: " + score + "/10");
        createInitInput();

    }

    // Only run when time seconds becomes less then 0, called in the time interval
    var timesUp = function() {
        clearInterval(timer);
        clearHTMLMax();
        $("#quiz-title").text(gameObject[10].title[1])
        $("#question-title").text("You scored: " + score + "/10");
        createInitInput();
    }


    var startGame = function() {
        console.log("Game Running");
        countdownTimer();
        removeStartBtn();
        clearHTML();
        showGameBtns();
        renderQuestion();
        
    };

    var createInitInput = function(){
        var textInput = $('<input/>');
        var subBtn = $('<button>');
        subBtn.attr("id", 'submitBtn')
        subBtn.attr("class", 'btn btn-success')
        subBtn.text("Submit")
        textInput.attr({ type: 'text', id: 'init-input',});
        textInput.appendTo($("#content"));
        subBtn.append($("#content"));
    }

    var displayMessage = function(){
        alert("Players' initials can not be blank.")
    }

    var storePlayer = function(event){
        event.preventDefault();

        console.log("store player")
        // console.log($("#initial-input").value.trim());

        var player = {
            name: "forrest",
            name: $("#init-input").value.trim(),
            score: score,
        };

        if (player.name ===""){
            displayMessage();
        }

        console.log(player)
        localStorage.setItem("player", JSON.stringify(player));
    }

    var sub = function(){
        console.log($("#init-input").value.trim())
    }
    
    
    // localStorage.setItem({"Player Name", "Forrest" "Score", "10",})

    $("#submitBtn").on("click", sub);
    $("#startBtn").on("click", startGame);
    $(".gameBtn").on("click", gameBtn);

});
