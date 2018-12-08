


const apiUrl = 'https://quote-api.glitch.me/pull/1';





var quoteText = document.getElementById('quote-text');
var authorText = document.getElementById('author-text');


var currentQuote = ''
var currentAuthor = ''

const handleClick = () => {
  getQuotes()
  console.log('tesr')
}

function getQuotes() {
  axios.get(apiUrl)
    .then((res) => {
      console.log(res)
      displayQuote(res.data[0].body , res.data[0].author)
      currentQuote = res.data[0].body
      currentAuthor = res.data[0].author
    })
    .catch((error) => {
      console.log('error');
    })
}



function displayQuote(quote, author) {
  quoteText.textContent = quote;
  authorText.textContent = author;
}
function displayAuthor() {
  
}

const getRandomQuote = () => {
  const i = Math.floor(Math.random() * 5)

  

}

/*const getQuote = () => {
  let randomQuote = getRandomQuote()

  currentQuote = randomQuote.quote
  currentAuthor = randomQuote.author
}
*/

const newQuoteButton = document.getElementById('new-quote');
newQuoteButton.addEventListener('click', handleClick, false)

const tweetQuote = document.getElementById('tweet-quote');
tweetQuote.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + currentQuote + '" ' + currentAuthor);

getQuotes()

