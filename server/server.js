const express = require('express');
const PORT = process.env.PORT || 3333;
const path = require('path');

const app = express();

app.use(express.static('../client/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), '../client/dist/index.html'));
});

app.get('/api/test', (req, res) => {
  console.log('triggered!');
  res.send({
    message: 'It worked!'
  })
});

app.listen(PORT, () => console.log('Server running on port %s', PORT));

