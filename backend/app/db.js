const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'db', // Nom du service défini dans Docker Compose
    user: 'root',
    password: 'root',
    database: 'todolist'
});

// Établir la connexion
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        process.exit(1);
    }
    console.log('Connecté à la base de données MySQL');
});

module.exports = connection;
