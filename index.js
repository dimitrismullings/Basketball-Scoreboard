// set the variables for the scores
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreCount = 0
let guestScoreCount = 0

//highlight the leader

function highlightLeader() {
    if (homeScoreCount > guestScoreCount) {
        homeScore.style.color = "#FFD700"
        guestScore.style.color = "#F94F6D"
    } else if (homeScoreCount < guestScoreCount) {
        homeScore.style.color = "#F94F6D"
        guestScore.style.color = "#FFD700"
    } else {
        homeScore.style.color = "#F94F6D"
        guestScore.style.color = "#F94F6D"
    }
}

//make the buttons add to the score

function homePlusOne() {
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
    highlightLeader() 
}

function homePlusTwo() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
    highlightLeader()
}

function homePlusThree() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
    highlightLeader()
}

function guestPlusOne() {
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
    highlightLeader() 
}

function guestPlusTwo() {
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
    highlightLeader()
}

function guestPlusThree() {
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
    highlightLeader()
}


//Start a new game by resetting the score to zero

function startNewGame() {
    homeScoreCount = 0
    guestScoreCount = 0
    homeScore.textContent = homeScoreCount
    guestScore.textContent = guestScoreCount
    highlightLeader()
}


