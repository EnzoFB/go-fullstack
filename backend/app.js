
// MongoDB Logs
// User1
// 5PF7SUzSlYK3cevy

const express = require('express');
const mongoose = require('mongoose');
const app = express();

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
})

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
          },
          {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
          },
    ];
    res.status(200).json(stuff);
})

app.post('api/stuff', (req, res, next) => {
    console.log(res.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
});

module.exports = app;