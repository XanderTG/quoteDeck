//require stuff
//connect to db
//make calls to db

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/quotedeck', {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const quoteSchema = new mongoose.Schema({
  id: Number,
  author: String,
  quote: String,
  topic: String,
});

// Create a model for items in the museum.
const Quote = mongoose.model('Quote', quoteSchema);

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/quotes', async (req, res) => {
  const quote = new Quote({
    id: req.body.id,
    author: req.body.author,
    quote: req.body.quote,
    topic: req.body.topic,
  });
  try {
    await quote.save();
    res.send(quote);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get all the quotes in the quotedeck database collection
app.get('/api/quotes', async (req, res) => {
  try {
    let quotes = await Quote.find();
    res.send(quotes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete an items
app.delete('/api/quotes/:id', async (req, res) => {
  try {
    // console.log("TEST");
    // console.log(req.params.id);
    await Quote.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// app.put('/api/items/:id', async (req, res) => {
//   try {
//     let item = await Item.findOne({
//       _id: req.params.id
//     });
//     item.title = req.body.title;
//     item.save();
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });


app.listen(3000, () => console.log('Server listening on port 3000!'));
