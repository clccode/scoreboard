// grab the home and guest scores by id
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

// set home points and guest points to zero
let homePoints = 0
let awayPoints = 0

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

// To add away score
function awayPlusOne() {
    awayScore.textContent = awayPoints += 1
}

function awayPlusTwo() {
    awayScore.textContent = awayPoints += 2
}

function awayPlusThree() {
    awayScore.textContent = awayPoints += 3
}

// To reset the score to zero
function setZero() {
    homePoints = 0
    awayPoints = 0
    homeScore.textContent = homePoints;
    awayScore.textContent = awayPoints;
}