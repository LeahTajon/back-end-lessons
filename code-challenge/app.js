const express = require('express');
const app = express();

const PORT = process.env.PORT || 5500;

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa']

// Add your code below:
app.get('/sausages', (req, res, next) => {
    res.send(sausageTypes)
})






















app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
  })