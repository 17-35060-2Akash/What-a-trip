const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const places = require('./data/places.json');

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

app.listen(port, () => console.log(`Server is running on port ${port}`));
