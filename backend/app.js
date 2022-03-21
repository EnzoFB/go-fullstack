const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requete recue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message: 'Votre requete a bien ete recue !'});
    next();
});

app.use((req, res, next) => {
    console.log('Reponse envoyée avec succès !');
});

module.exports = app;