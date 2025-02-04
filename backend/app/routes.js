const express = require('express');
const router = express.Router();
const db = require('./db');

// Route pour récupérer toutes les ToDos
router.get('/', (req, res) => {
    const query = 'SELECT * FROM todos';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        }
        res.json(results);
    });
});

// Route pour ajouter une nouvelle ToDo
router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Le champ "title" est obligatoire' });
    }
    const query = 'INSERT INTO todos (title) VALUES (?)';
    db.query(query, [title], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de l’ajout de la tâche' });
        }
        res.status(201).json({ id: results.insertId, title });
    });
});

module.exports = router;