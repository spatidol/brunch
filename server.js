'use strict';

const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');
const request = require('request');
const bodyParser  = require('body-parser');

const app = express();

app.use(volleyball);
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname));

const brunchplaces = [{
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
}, {
  id: 2,
  name: 'Reggie',
  image: 'http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/puppy-2_0.jpg'
}, {
  id: 3,
  name: 'Christian',
  image: 'https://www.askideas.com/media/19/Papillon-Puppy-Looking.jpg'
}, {
  id: 4,
  name: 'Jessie',
  image: 'http://www.101dogbreeds.com/wp-content/uploads/2015/10/Chi-Spaniel-Puppy-Pictures.jpg'
}, {
  id: 5,
  name: 'Pandora',
  image: 'http://4.bp.blogspot.com/-3JeIxWBU7bY/UKjIt8lVpCI/AAAAAAAABx8/YM8piSOwczs/s1600/Schipperke-Puppy.jpg'
}];

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './index.html'));
});



app.get('/api/brunchplaces/:location', function(req, res) {
  request(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.location}&radius=500&type=restaurant&keyword=brunch&key=AIzaSyBfORPro4T5h_hqpHX2Ug6QB1sCGOOlCbA`, function (error, response, body) {
      res.send(body);
        // body.map(function(brunch){
        //   return {
        //     id: brunch.results.id,
        //     name: brunch.results.name
        //   }

      // });
    });
});

app.get('/api/brunchplace/:brunchId', function(req, res){
  request(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.params.brunchId}&key=AIzaSyBfORPro4T5h_hqpHX2Ug6QB1sCGOOlCbA`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return res.send(body)
    }
  })
});



// app.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${brunchId}&key=AIzaSyBfORPro4T5h_hqpHX2Ug6QB1sCGOOlCbA
// `, function (req, res) {
//   const aBrunch = brunchplaces.find(b => b.id === Number(req.params.id));
//   if (!aBrunch) res.status(404).end();
//   else res.json(aBrunch);
// });

app.listen(process.env.PORT || 3000, function () {
  console.log('Server listening on port', 3000);
});

