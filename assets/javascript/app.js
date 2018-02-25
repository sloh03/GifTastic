$(document).ready(function() {

    // Create array of strings, store in var 'topics'
    var topics = [
        'Soccer', 'Swimming', 'Diving', 'Skiing',
        'Snowboarding', 'Surfing', 'Skateboarding', 'Tennis'
    ];

    // When a button is clicked, the page should grab 10 static, 
    // non-animated gif images from the GIPHY API and place them on the page
    function displayGifs() {

        var sport = $(this).attr('data-name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=LLE4Ks0CoMJkAZS9t3E4xR4k95Re7mhU&limit=10"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);
            
        });
    }

    // Take topics in array and create buttons in HTML
    function generateButtons() {

        $('#buttons-view').empty();

        // Use a loop that appends a button for each string in the array
        for (var i = 0; i<topics.length; i++) {

            var buttons = $('<button type="button" class="btn btn-primary">' + topics[i] + '</button>');
            buttons.appendTo('#buttons-view');
        }
    }

    generateButtons();

    // When the user clicks one of the still GIPHY images, the gif should animate. 
    // If the user clicks the gif again, it should stop playing.

    // Under every gif, display its rating (PG, G, so on).

    // Add a form to your page takes the value from a user input box and adds it into your topics array.
    // make a function call that takes each topic in the array remakes the buttons on the page.
});

// Create array of strings, store in var 'topics'
// Take topics in array and create buttons in HTML
    // Use a loop that appends a button for each string in the array

// When a button is clicked, the page should grab 10 static, 
// non-animated gif images from the GIPHY API and place them on the page

// When the user clicks one of the still GIPHY images, the gif should animate. 
// If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// Add a form to your page takes the value from a user input box and adds it into your topics array.
// make a function call that takes each topic in the array remakes the buttons on the page.