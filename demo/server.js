const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config()

const Scrapers = require('./Scrapers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

// api routes
app.get('/',  (req, res) => {
  res.send('welcome!')
})

app.post('/api/v1/scrape', (req, res) => {
    let productUrl = req.body.url
let scraper = new Scrapers()
scraper.scrapeAmazonStore(productUrl)
.then(data => {
    res.status(200).json({
        status: true,
        message:data
    })
})
.catch(err => {
    res.status(400).json({
        status: false,
        message: err
    })
})
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(res.status(400).json({
    status: false,
    data: 'Bad request'
  }));
});

// error handler
app.use((err, req, res) => {
  // render the error page
  res.status(err.status || 500).json({
    status: false,
    data: 'internal server error'
  });
});

app.listen( process.env.PORT, () =>
console.log(` listening at http://localhost:${process.env.PORT}`)
)