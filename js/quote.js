function getQuoteOfTheDay(){
   let response = fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', {
    method : 'GET',
    mode: 'no-cors'
   });

   if(response.ok){
        let json = response.json();
   }else{
    console.log('HTTP Error' + response.status)
   }
}

getQuoteOfTheDay();