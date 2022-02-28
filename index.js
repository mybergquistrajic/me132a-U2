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

    // Pushes object to the database
    else {
        database.push(newWinner);
        //Resets form after adding to database
        let form = document.querySelector("form");
        form.reset();
    }
}

function setAddWinnerHandler() {
    let form = document.querySelector("form");
    form.addEventListener("submit", onAddWinner);
}


setAddWinnerHandler()