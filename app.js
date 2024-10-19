const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/index'); // Adjust the path if necessary

const app = express();

// Connect to MongoDB Atlas
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Set up Handlebars view engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Middleware
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.render('index'); // Make sure there's an index.hbs file in the views folder
});

// Use the movies route
app.use('/movies', movieRoutes); // This assumes you created a router for movies

// Error handling
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
