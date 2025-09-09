const express = require('express');
const app = express();
const mongodb = require('./data/database');
const port = process.env.PORT || 3000;

app.use(express.json()); // Good practice
app.use('/', require('./routes')); // Mount all routes

mongodb.initDb((err) => {
    if (err) {
        console.error(err);
    } else {
        app.listen(port, () => {
            console.log(`✅ Server running on port ${port}`);
        });
    }
});