console.log('client.js has been loaded');

$(document).ready(function () {

    console.log('jQuery has been loaded');
    $.ajax({
        method: 'GET',
        url: '/quote/random',
        success: function (response) {  //response is whatever the res.send is
            console.log('random quote response', response);
            $('p').text(response.quoteText);
        },
        error: function (error) {
            console.log('There was an error gettign a random quote!!!');
        }
    });
    getAllQuotes();
    $.ajax({
        method: 'GET',
        url: '/quote/first',
        success: function (response) {
            $('p').text(response.quoteText);
            console.log('first quote response', response)

        }
    })
    $('#newQuoteButton').on('click', function () {
        console.log('button clicked');
        $.ajax({
            method: 'POST',
            url: '/quote/new',
            data: { quote_to_add: $('#newQuoteIn').val(), author_to_add: $('#newAuthorIn').val()}, //data should always be an object, can't use caps, so use underscore
            success: function (response) { //author_to_add and quote_to_add link to quotes.js on line 30 with req.body
                console.log('new quote post response:', response);
                getNewQuotes();
            }
        })
    })
});

function getAllQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function (response) {
            console.log('all quotes array', response);
            for (var i = 0; i < response.length; i++) {
                $('ul').append('<li>"' + response[i].quoteText + '" -' + response[i].author +'</li>');//.quoteText and .author come from quotes-data.js where we edited the array
            }
        }
    })
}
//AJAX - get data on page without having to go to new page

function getNewQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function (response) {
            $('ul').append('<li>"' + response[response.length - 1].quoteText + '" -' + response[response.length - 1].author +'</li>');  //.quoteText and .author come from quotes-data.js where we edited the array
        $('#newQuoteIn').val('');//clears the input field of Quote
        $('#newAuthorIn').val('');//clears the input field of Author
        }
    })
}
