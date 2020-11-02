// // function get_quote_of_the_day() {
// //     var xhttp = new XMLHttpRequest();
// //     xhttp.onreadystatechange = function() {
// //      if (this.readyState == 4 && this.status == 200) {
// //          // Access the result here
// //          alert(this.responseText);
// //      }
// //     };
// //     xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
// //     xhttp.setRequestHeader("Content-type", "application/json");
// //     xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
// //     xhttp.send();
// // }

// // get_quote_of_the_day()


//const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"; // site that doesn’t send Access-Control-*
// fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))