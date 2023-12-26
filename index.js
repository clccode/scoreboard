// grab the home and guest scores by id
let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let periodEl = document.getElementById("period-display")

// set home points and guest points to zero
let homePoints = 0
let awayPoints = 0
let period = 1

// To add home score
function homePlusOne() {
    homeScoreEl.textContent = homePoints += 1
}

function homePlusTwo() {
    homeScoreEl.textContent = homePoints += 2
}

function homePlusThree() {
    homeScoreEl.textContent = homePoints += 3
}

// To add away score
function awayPlusOne() {
    awayScoreEl.textContent = awayPoints += 1
}

function awayPlusTwo() {
    awayScoreEl.textContent = awayPoints += 2
}

function awayPlusThree() {
    awayScoreEl.textContent = awayPoints += 3
}

// add and subtract period
function perPlusOne() {
    periodEl.textContent = period += 1
}

function perMinusOne() {
    periodEl.textContent = period -= 1
}

// To reset the score to zero
function newGame() {
    homePoints = 0
    awayPoints = 0
    period = 1
    homeScoreEl.textContent = homePoints
    awayScoreEl.textContent = awayPoints
    periodEl.textContent = period
}