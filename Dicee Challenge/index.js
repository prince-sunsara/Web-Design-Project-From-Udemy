// /* change dice 1 */
// var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; // 1 to 6
// document.querySelector(".img1").setAttribute("src", "./images/dice"+ randomNumber1 +".png");


// /* change dice 2 */
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// document.querySelector(".img2").setAttribute("src", "./images/dice"+ randomNumber2 +".png");

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
// } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
// } else {
//     document.querySelector("h1").innerHTML = "The match is Draw!";
// }

function playGame() {
    /* change dice 1 */
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 to 6
    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");


    /* change dice 2 */
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}