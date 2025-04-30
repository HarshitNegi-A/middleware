const express = require('express');
const app = express();


app.get('/products', (req, res) => {
    res.send('<h3>Here is the list of all products.</h3>');
});

app.post('/products', (req, res) => {
    res.send('<h3>A new product has been added.</h3>');
});

app.get('/categories', (req, res) => {
    res.send('<h3>Here is the list of all categories.</h3>');
});

app.post('/categories', (req, res) => {
    res.send('<h3>A new category has been created.</h3>');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});


app.listen(4000, () => console.log("Server is now running"));
