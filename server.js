const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/track-click', (req, res) => {
  const logEntry = `${new Date().toISOString()} — ${req.body.link}\n`;
  fs.appendFile('clicks.log', logEntry, err => {
    if (err) return res.status(500).send('Error logging');
    res.status(200).send('Logged');
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
