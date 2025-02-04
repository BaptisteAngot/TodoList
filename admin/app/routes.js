const express = require('express');
const router = express.Router();
const db = require('./db');

// Route pour supprimer un todo par ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM todos WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la suppression de la tâche' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Tâche non trouvée' });
        }
        res.status(200).json({ message: 'Tâche supprimée avec succès' });
    });
});
module.exports = router;