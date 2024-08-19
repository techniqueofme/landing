function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote(quote) {
    // Combine the quote and author on the same line
    document.getElementById('quote').innerText = `${quote.quote} - ${quote.author}`;
}

function loadQuotes() {
    fetch('resources/quotes.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Skip header row
            const quotes = rows.map(row => {
                const [author, quote] = row.split(',');
                return { author: author.trim(), quote: quote.trim() };
            }).filter(quote => quote.author && quote.quote); // Filter out empty rows

            const randomQuote = getRandomQuote(quotes);
            displayQuote(randomQuote);
        })
        .catch(error => console.error('Error loading quotes:', error));
}

// Display a new quote every 12 hours (43200000 milliseconds)
setInterval(loadQuotes, 43200000);

// Load an initial quote
loadQuotes();
