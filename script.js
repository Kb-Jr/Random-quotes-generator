let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function loading(){
    quoteContainer.hidden = true;
    loader.hidden = false;
}

function loaded() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuotes(){
    loading();

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    if (!quote.author){
        quoteAuthor.textContent = 'Unspecified Author'
    }
    else{
        quoteAuthor.textContent = quote.author;
    }

    if (quote.text.length > 100){
        quoteText.classList.add('long-quote')
    }
    else{
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text;

    loaded();
}



async function getQuotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes'; 
    
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();

    }
    catch(error){

    }
}


function sharetweet(){
    const twitterUrl = `https:twitter.com/intent/tweet?text= ${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl);
}


newQuoteBtn.addEventListener('click', newQuotes);
twitterBtn.addEventListener('click', sharetweet);

getQuotes();
