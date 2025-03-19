const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors()); // Permet les requêtes de tous les domaines

// Middleware pour parser les corps de requêtes JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon portfolio API!');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
