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
        console.error("⚠️ Impossible de se connecter à MySQL :", err.message);
        console.log("🟡 L'API continue de tourner sans MySQL...");
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

module.exports = connection;
