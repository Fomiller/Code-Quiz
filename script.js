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
            "answer02": "None of the above",
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
            "question": "How dogit a you link a javaScipt file?",
            "answer01": "Inside a link tag",
            "answer02": "Inside a head tag",
            "answer03": "Inside a script tag",
            "answer04": "Inside the body tag",
            "correct": ["Inside a script tag"],
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
        answerBtn1.removeClass("d-none");
        answerBtn2.removeClass("d-none");
        answerBtn3.removeClass("d-none");
        answerBtn4.removeClass("d-none");
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
    
    // adds 1 to the global variable which is used to acces the gameobject array
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

    // removes 10 seconds if you get an answer wrong
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

    // functions that run at the start of the game
    var startGame = function() {
        $("#startBtn").addClass("d-none");
        console.log("Game Running");
        countdownTimer();
        removeStartBtn();
        clearHTML();
        showGameBtns();
        renderQuestion();
        
    };
    
    
    // Functions below are used for the endGame inital gathering and submit button 
    var displayMessage = function(){
        alert("Players' initials can not be blank.")
    }
    
    var createInitInput = function(){
        var createDiv = $("<div>");
        var textInput = $('<input/>');

        // var subBtn = $('<button>');

        createDiv.attr("id", "init-form")
        createDiv.appendTo($("#div_title"))

        // subBtn.attr({"id": 'submitBtn', "class": 'btn btn-success'})
        // subBtn.text("Submit")
        // subBtn.on("click", storePlayer);

        $("#sub-btn").removeClass("d-none")

        textInput.attr({ type: 'text', id: 'init-input', value: '',});
        textInput.appendTo($("#init-form"));
        subBtn.appendTo($(".card"));
    }

    var storePlayer = function(event){
        event.preventDefault();
        users = JSON.parse(localStorage.getItem('session')) || [];
        localStorage.setItem("users", JSON.stringify(users))        

        var player = {
            name: $("#init-input").val(),
            score: score,
            };
        
        if (player.name ===""){
            displayMessage();
            } else {
                users.push(player);
                localStorage.setItem("session", JSON.stringify(users));
                hsRedirect();
            }
        
        
        // auto redirects to highscore page
    }

    // Highscores logic
    // redirect to Highscores page
    var hsRedirect = function() {
        window.location.href = "highscores.html"
    }

    var createHS = function () {

        // set Parsed JSON to variable
        var allScores = JSON.parse(localStorage.getItem('session'))
        // sort allScores variable in descending order
        allScores.sort((a, b) => b.score - a.score);
        // For Each element in all scores array create a row and data tag and add to page
        allScores.forEach(element => {
            var rowEl = $("<tr>")
            var tdName = $("<td>")
            var tdScore = $("<td>")
            // add name and score to table data
            tdName.text(element.name)
            tdScore.text(element.score)
            // append row to table body then fill with data
            rowEl.appendTo($("#t-body"))
            rowEl.append(tdName, tdScore)
        });
    }

    var highscorePage = function() {
        if ($('body').is('.HS-body')) {
          createHS();
        }
    };
    
    $("#sub-btn").on("click", storePlayer);
    $("#test").on("click", createHS);
    $("#HS-btn").on("click", hsRedirect);
    $("#startBtn").on("click", startGame);
    $(".gameBtn").on("click", gameBtn);
    
    // only calls if page is = to highscores.html
    highscorePage();
    
});
