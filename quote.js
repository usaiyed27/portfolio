// function get_quote_of_the_day() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
// 	 if (this.readyState == 4 && this.status == 200) {
// 	     // Access the result here
// 	     alert(this.responseText);
// 	 }
//     };
//     xhttp.open("GET", "http://quotes.rest/quote/random.json?api_key=<your_api_key>", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "<your_api_key>");
//     xhttp.send();
// }

// get_quote_of_the_day()


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});