
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Thing = require('./models/thing');

mongoose.connect('mongodb+srv://User1:5PF7SUzSlYK3cevy@cours-gofullstack.4stfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true 
})
.then(() => console.log('Connexion a MongoDB réussi !'))
.catch(() => console.log('Connexion a MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    // Acces à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Ajout des headers mentionnés aux requêtes envoyées vers l'API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // Envoie des requêtes avec les méthodes mentionnées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/stuff', (req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({error}));
});

app.post('api/stuff', (req, res, next) => {
    delete req.body._id;

    const thing = new Thing({
        ...req.body
    });

    thing.save()
        .then(() => res.status(201).json({message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({error}));
});

module.exports = app;