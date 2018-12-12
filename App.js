




const apiUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';


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

function fadeIn(event) {
  quoteText.classList.add('fade')
  authorText.classList.add('fade')

}
function fadeOut(event) {
  quoteText.classList.remove('fade')
  authorText.classList.remove('fade')

}

function getQuotes() {
  axios.get(apiUrl)
    .then((res) => {
      console.log(res)
      quoteData = res.data.quotes
      fadeIn(quoteText, authorText)
      setTimeout(() => {
        displayQuote(quoteData[Math.floor(Math.random() *
          res.data.quotes.length)].quote, "-" + " " + quoteData[Math.floor(Math.random() * res.data.quotes.length)].author)
      }, 800)
      tweetQuote.setAttribute(
        'href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(
          '"' + quoteText.innerHTML + '" ' + authorText.innerHTML));
    })
    .catch((error) => {
      console.log('error');
    })
};

function init() {
  getQuotes();
  changeColor();
}


function displayQuote(quote, author) {
  quoteText.textContent = quote;
  authorText.textContent = author;
}
newQuoteButton.addEventListener('click', function () {
  if (quoteText.className.indexOf('fade') === -1 && authorText.className.indexOf('fade') === -1) {
    fadeIn(quoteText, authorText)
  }
  else {
    fadeOut(quoteText, authorText)
  }
})
newQuoteButton.addEventListener('click', handleClick, false)

document.addEventListener('DOMContentLoaded', function () {
  init()
})

