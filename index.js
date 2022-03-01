"use strict"

/* –––––––– Form ––––––––– */

// Creates a new winner (object) and returns it
function addWinner(id, country, artist, song, year) {
    let winner = {
        id: id,
        country: country,
        artist: artist,
        song: song,
        year: year,
    }
    return winner;
}

function onAddWinner(event) {
    event.preventDefault();
    let id = database[database.length - 1].id + 1;
    let country = document.getElementById("country").value;
    let artist = document.getElementById("artist").value;
    let song = document.getElementById("song").value;
    let year = document.getElementById("year").value;

    // Calls function addWinner (which creates an object), and places it (the return) in a varaible
    let newWinner = addWinner(id, country, artist, song, year);

    // Checks and alerts user if they've missed an input field
    if (document.getElementById("country").value.length == 0 ||
        document.getElementById("artist").value.length == 0 ||
        document.getElementById("song").value.length == 0 ||
        document.getElementById("year").value.length == 0
    ) { alert(`You've missed filling one or more input fields`); }

    // Pushes object to the database and renders the winners (database)
    else {
        database.push(newWinner);
        renderWinners();
        //Resets form after adding to database
        let form = document.querySelector("form");
        form.reset();
    }
}

function setAddWinnerHandler() {
    let form = document.querySelector("form");
    form.addEventListener("submit", onAddWinner);
}


/* –––––––– Render ––––––––– */

// Renders a winner
function renderWinner(winner) {
    let div = document.createElement("div");
    div.classList.add("winneritem");
    div.id = database[winner].id;
    div.innerHTML = `
        <div>${winner + 1}</div>
        <div>${database[winner].country}</div>
        <div>${database[winner].artist}</div>
        <div>${database[winner].song}</div>
        <div>${database[winner].year}</div>
        <button id="delete" type="button">Remove winner</button>
    `
    return div;
}

// Renders all winners in the database
function renderWinners() {
    let winnersElement = document.getElementById("result");
    winnersElement.innerHTML = "";

    // Loops through the database, renders a winner and appends it
    for (let i = 0; i < database.length; i++) {
        let winnerElement = renderWinner(i);
        winnersElement.appendChild(winnerElement);
    }

    // Sets remove-buttons
    setRemoveWinnerHandlers();
}


/* –––––––– Remove / Delete winner ––––––––– */

// Removes winner based on ID
function removeWinnerById(winners, id) {
    for (let i = 0; i < winners.length; i++) {
        let winner = winners[i];
        if (winner.id == id) {
            winners.splice(i, 1);
            return;
        }
    }
}

// When the user clicks on the remove-button
function onRemoveWinner(event) {
    let button = event.target;
    let id = button.parentElement.id;
    removeWinnerById(database, id);

    // Renders database again after every removal/button-click
    renderWinners(database);
}

// Adds event handler buttons
function setRemoveWinnerHandlers() {
    let buttons = document.querySelectorAll("#delete");

    // Iterates and adds event listner to every remove-button
    for (let button of buttons) {
        button.addEventListener("click", onRemoveWinner);
    }
}

/* –––––––– Initialization / Direct code ––––––––– */
setAddWinnerHandler();
renderWinners();