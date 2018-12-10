



/// TO DO fade in on text// 
const apiUrl = 'https://quote-api.glitch.me/pull/1';


var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const tweetQuote = document.getElementById('tweet-quote');
var quoteText = document.getElementById('quote-text');
var authorText = document.getElementById('author-text');
const newQuoteButton = document.getElementById('new-quote');



const handleClick = () => {
  getQuotes()
  changeColor()
}

function changeColor() {
  var color = Math.floor(Math.random() * colors.length)
  var btn = document.querySelector('.button')
  var btn2 = document.querySelector('.button2')

  // body styling 
  document.body.style.backgroundColor = colors[color]
  document.body.style.color = colors[color]
  document.body.style.transition = 'all 1s'
  //btn styling
  btn.style.backgroundColor = colors[color]
  btn.style.transition = 'all 1s'
  btn2.style.backgroundColor = colors[color]
  btn2.style.transition = 'all 1s'

}

function getQuotes() {
  axios.get(apiUrl)
    .then((res) => {
      console.log('res')
      displayQuote(res.data[0].body, "-" + " " + res.data[0].author)
      tweetQuote.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteText.innerHTML + '" ' + authorText.innerHTML));
    })
    .catch((error) => {
      console.log('error');
    })
}

function init() {
  getQuotes();
  changeColor();
}

function displayQuote(quote, author) {
  quoteText.textContent = quote;
  authorText.textContent = author;
}

newQuoteButton.addEventListener('click', handleClick, false)

document.addEventListener('DOMContentLoaded', function () {
  init()
})

