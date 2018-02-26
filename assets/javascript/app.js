$(document).ready(function() {

    // Create array of strings, store in var 'topics'
    var topics = [
        'Soccer', 'Swimming', 'Diving', 'Skiing',
        'Snowboarding', 'Surfing', 'Skateboarding', 'Tennis'
    ];

    // When a button is clicked, the page should grab 10 static, 
    // non-animated gif images from the GIPHY API and place them on the page
    function displayGifs() {

        // Access topic from button's 'data-name'
        // Use GIPHY API and search for selected topic
        var sport = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=LLE4Ks0CoMJkAZS9t3E4xR4k95Re7mhU&limit=10"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // Clear gifs before loading more
            $('#giphy-view').empty();

            // Loop through 10 gifs to display their image and rating
            for (var i = 0; i<response.data.length; i++) {

                // Create div to hold the topics
                var topicDiv = $('<div class="topic">');

                // Display static, non-animated gif
                // Under every gif, display its rating (PG, G, so on).
                var image = response.data[i].images.fixed_height_still.url;
                var rating = response.data[i].rating;
                topicDiv.append(
                    '<figure class="floatLeft">' + 
                        '<img class="gif" src="' + image + '">' +
                        '<figcaption>' + 'Rating: ' + rating + '</figcaption>' +
                    '</figure>' + '<br>'
                );

                // Display gifs on page
                $('#giphy-view').append(topicDiv);
            }

        });
    }

    // Take topics in array and create buttons in HTML
    function generateButtons() {

        // Clear buttons before remaking
        $('#buttons-view').empty();

        // Use a loop that appends a button for each string in the array
        for (var i = 0; i<topics.length; i++) {

            var button = $('<button type="button">');
            button.addClass("btn btn-primary");
            button.addClass("sport");
            button.attr("data-name", topics[i]);
            button.text(topics[i]);
            $('#buttons-view').append(button);
        }
    }

    // Create function to add more sports buttons
    $("#add-sport").on("click", function(event) {
        event.preventDefault();

        // Capture input
        var sport = $('#sport-input').val().trim();

        // Clear text box after submitted
        $('#sport-input').val("");

        // Add input to beginning of topics array
        topics.unshift(sport);

        // Remake buttons with new input
        generateButtons();
    });

    // Display gifs of when selected topic is clicked
    $(document).on("click", ".sport", displayGifs);

    generateButtons();

    // When the user clicks one of the still GIPHY images, the gif should animate. 
    // If the user clicks the gif again, it should stop playing.
    $('body').on("click", '.gif', function() {
        var src = $(this).attr('src');
        if($(this).hasClass('playing')) {
            // stop
            $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
            $(this).removeClass('playing');
        }
        else {
            // play
            $(this).addClass('playing');
            $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
        }
    });

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