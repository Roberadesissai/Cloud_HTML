// Select the button element with the class "roll"
const button = document.querySelector(".roll");

document.querySelector(".img1").setAttribute("src", "images/dice" + 1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + 1 + ".png");

// Add a click event listener to the button
button.addEventListener("click", function () {

    // Generate a random number between 1 and 6
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Select the image element with the class "img1" and change the image to match the random number
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Compare the random numbers and display the result in the h1 element
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
});


