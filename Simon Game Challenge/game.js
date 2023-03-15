var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = false;

$(document).keypress(() => {
    if (!start) {
        $("#level-title").text("Level " + level);
        nextSequence();
        start = true;
    }
});

// $(".btn").click(function(event) {
//     var userChosenColour = event.target.id;
//     userClickedPattern.push(userChosenColour);
//     playSound(userChosenColour);
// });

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    var recentUserChoosenClick = userClickedPattern.length - 1;
    checkAnswer(recentUserChoosenClick);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("Wrong!");
        $("body ").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
}

function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

