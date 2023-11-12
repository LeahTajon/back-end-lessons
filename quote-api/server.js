const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 5500;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

// Get Random Quote
app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({ quote: randomQuote})
  })
  
  // Get quotes or all quotes from author
  app.get('/api/quotes', (req, res, next) => {
    const filterQuotes = quotes.filter(author => {
      return author.person === req.query.person;
    })
  
    if (req.query.person) {
      res.send({ quotes: filterQuotes})
    } else {
      res.send({ quotes: quotes})
    }
  })
  
  // Add new quotes and author
  app.post('/api/quotes', (req, res, next) => {
    const newQuote = req.query.quote;
    const newPerson = req.query.person;
  
    if (newQuote !== '' & newPerson !== '') {
      quotes.push({ quote: newQuote, person: newPerson})
      res.send({quote: { quote: newQuote, person: newPerson}})
    } else {
      res.status(404).send()
    }
  })
  