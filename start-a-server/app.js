 const express = require('express');
 const app = express()

 const PORT = process.env.PORT | 5500;

 app.use(express.static('public'))

 app.get('/expressions', (req, res, next) => {
   console.log(req)
 })

 app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
 })