const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

// Initialisation de l'application Express
const app = express();
const PORT = 8080;

app.use(cors({
    origin: '*', // Autoriser tout les services (à ne pas faire en production)
}));

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Routes pour gérer les ToDos
app.use('/api/todos', routes);

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

module.exports = app; // Exporter l'application pour les tests