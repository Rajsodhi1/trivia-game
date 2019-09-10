$("#start").on("click", function() {
    //console.log("Clicked");
    game.start();

})

var questions = [{
    question:"What is the process for making rose?",
    answers:["skin contact fermented red grapes", "skin contact fermented white grapes", "no skin contact fermented red grapes", "no skin contact fermented white grapes"],
    correctAnswer:"no skin contact fermented red grapes"
    }, {
    question:"What is the process for making orange wine?",
    answers:["skin contact fermented red grapes", "skin contact fermented white grapes", "no skin contact fermented red grapes", "no skin contact fermented white grapes"],
    correctAnswer:"skin contact fermented white grapes"
    }];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter==0) {
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#subcontainer").prepend("<h3>Time Left: <span id = 'counter'>120</span> seconds</h3>");
        $("#start").remove();
        for(var i=0; i<questions.length; i++){
            $("#subcontainer").append("<h2>" + questions[i].question + "</h2>");
            for( var j=0; j<answers.length; j++){
                $("#subcontainer").append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" +questions[i].answers[j])
            }
        }
    }
}