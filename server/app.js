// const { getRandomValues } = require('crypto')
const express = require('express')
const app = express()
const port = 3000
const Dog = require('./dog')
var cors = require('cors')

app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello Worldsds!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/google', (req, res) => {
   const dogsData = Dog.all;
   res.send(dogsData);
});

app.get('/google/dogs', (req, res) => {
 const dogsData = Dog.all;
  res.send(dogsData);

});

app.get('/results', (req, res) => {
   const dogsData = Dog.all;
  // console.log(dogsData)
  res.send(dogsData);
  
})

app.get('/google/random', (req, res) => {
    const dogRandom = Dog.random();
    res.send(dogRandom);
});


app.get('/google/dogs/:id', (req, res) => {
  try {
      const dogId = parseInt(req.params.id);
      const selectedDog = Dog.findById(dogId);
      res.send(selectedDog);
  } catch (err) {
      console.log(err);
      res.status(404).send(err);
  }
});


