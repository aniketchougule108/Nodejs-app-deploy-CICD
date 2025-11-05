const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>🚀 CI/CD Pipeline Deployment Test</h1>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});