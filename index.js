// grab the home and guest scores by id
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// set home points and guest points to zero
let homePoints = 0
let guestPoints = 0

// To add home score
function homePlusOne() {
    homeScore.textContent = homePoints += 1
}

function homePlusTwo() {
    homeScore.textContent = homePoints += 2
}

function homePlusThree() {
    homeScore.textContent = homePoints += 3
}

// To add guest score
function guestPlusOne() {
    guestScore.textContent = guestPoints += 1
}

function guestPlusTwo() {
    guestScore.textContent = guestPoints += 2
}

function guestPlusThree() {
    guestScore.textContent = guestPoints += 3
}

// To reset the score to zero
function setZero() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints;
    guestScore.textContent = guestPoints;
}