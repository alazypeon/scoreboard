let homeScore = 0;
let awayScore = 0;

let homeStoreEl = document.getElementById("home-score");
let awayStoreEl = document.getElementById("away-score");

function add1Home() {
    homeScore += 1;
    homeStoreEl.textContent = homeScore;
}

function add2Home() {
    homeScore += 2;
    homeStoreEl.textContent = homeScore;
}

function add3Home() {
    homeScore += 3;
    homeStoreEl.textContent = homeScore;
}

function add1Away() {
    awayScore += 1;
   awayStoreEl.textContent = awayScore;
}

function add2Away() {
    awayScore += 2;
    awayStoreEl.textContent = awayScore;
}

function add3Away() {
    awayScore += 3;
    awayStoreEl.textContent = awayScore;
}

function reset() {
    homeStoreEl.textContent = 0;
    awayStoreEl.textContent = 0;
}
