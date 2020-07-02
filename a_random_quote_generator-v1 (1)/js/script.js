/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "I dedicated all the time I had to it. The 10 hour workout was just what I put in the magazine at the time, but for me it was every waking moment.",
    source: "Steve Vai"
  },
  {
    quote: "A lot of people think that if they learn to read music they are gonna lose their feel or their groove or something. It\’s the stupidest thing I have ever heard.",
    source: "Frank Gambale"

  },
  {
    quote: "I started out playing guitar because Jimi Hendrix was my hero, so my roots were really based on Jimi Hendrix and his style of playing.",
    source: "Joe Satriani"

  },
  {
    quote:"The beautiful thing about learning is nobody can take it away from you.",
    source: "B.B. King"

  },
  {
    quote:"When I look for what I’m going to listen to I go backwards. I’m always going the other way you see. Most people are trying to figure out how do I get in the fast lane going that way?. I\'m going in the other direction. I wanna find the oldest thing to do.",
    source: "Eric Clapton"

  },

  {
      quote: "Listening is the key to everything good in music.",
      source: "Pat Metheny"

  },

  {
    quote: "For me, the ultimate form of expression is blues, where jazz appeals to me on an intellectual level.",
    source: "Scott Henderson"

},

{
  quote: "If you play music for no other reason than actually just because you love it, the skills just kinda creep up on you.",
  source: "Nuno Bettencourt"

},

{
  quote: "You can’t think and play. If you think about what you’re playing the playing becomes stilted. You have to just focus on the music you feel, concenctrate on the music, focus on what you’re playing and let the playing come out. Once you start thinking about doing this or doing that, it\’s not good. What you are doing is like a language, you’re always learning about this thing everytime you pick it up.",
  source: "Kieth Richards"

},

{
  quote: "No. Anybody that plays guitar knows that only Jimi Hendrix was able to use the standard tremolo and still keep it in tune. Those things are totally worthless. I do have one on a Japanese Strat, but I don’t use it.",
  source: "Kurt Cobain", 
  year: "1992",
  citation: "Guitar World Magazine"

}

];


/***
 * `getRandomQuote` function
 * 
 *  gets a random quote from the quotes object and returns it
***/
function getRandomQuote (){
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return (quotes[randomQuote]);
}


/***
 * `printQuote` function
 * 
 *    creates an html string containing the random quote and appends it to the page.
***/
function printQuote(){
  let newQuote = getRandomQuote();
  let html = `<p class = "quote">${newQuote.quote}</p>`;
  html += `<p class = "source">${newQuote.source}`;
/*

checks to see if there are year and citation properties in the quotes object and then appends them to the page.
*/
  if (newQuote.hasOwnProperty("citation")) {
    html += `<span class= "citation">${newQuote.citation}</span>`;
}

if(newQuote.hasOwnProperty("year")) {
  html += `<span class="year">${newQuote.year}</span>`;
  
}
html += `</p>`;
let divQuoteBox = document.getElementById("quote-box");
divQuoteBox.innerHTML = html;
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);