// Declaring variables and creating random images
const random1 = Math.floor(Math.random() * 6) + 1;
const random2 = Math.floor(Math.random() * 6) + 1;
const randomImg1 = `images/dice${random1}.png`;
const randomImg2 = `images/dice${random2}.png`;

// Displaying images and identifying the winner
function displayResult() {
  document.querySelector(".img1").setAttribute("src", randomImg1);
  document.querySelector(".img2").setAttribute("src", randomImg2);

  if (random1 < random2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  } else if (random1 === random2) {
    document.querySelector("h1").innerHTML = "Draw";
  } else {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  }
}

// Calling the function to display the result and identify the winner
displayResult();

// Page refresh on click of the refresh button
document.querySelector("button").addEventListener("click", () => {
  location.reload();
});
