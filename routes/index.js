const express = require('express');
const Movie = require('../models/movies.model'); // Import the Movie model
const router = express.Router();

// Movies route
router.get('/movies', (req, res) => {
    Movie.find()
        .then(movies => {
            res.render('movies', { movies }); // Pass the movies array to the view
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});
// Movie details route
router.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
        .then(movie => {
            if (!movie) {
                return res.status(404).send('Movie not found');
            }
            res.render('movie-detail', { movie });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});


module.exports = router;
