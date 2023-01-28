const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const places = require('./data/places.json');
const hotels = require('./data/hotels.json');

app.get('/', (req, res) => {
    res.send('What a trip API');
});

app.get('/places', (req, res) => {
    res.send(places);
});

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    const selectedPlace = places.find(place => place.id == id);
    res.send(selectedPlace);
});

app.get('/hotels', (req, res) => {
    res.send(hotels);
});

app.get('/hotels/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    const foundHotels = hotels.filter(hotel => hotel.category_id === categoryId);
    res.send(foundHotels);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
