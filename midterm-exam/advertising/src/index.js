const express = require('express');
const app = express();

const PORT = process.env.PORT

const products = [
  {
    name: 'Chat GPT',
    url: 'https://chat.openai.com/'
  },
  {
    name: 'Github',
    url: 'https://github.com/'
  },
  {
    name: 'Kubernetes',
    url: 'https://kubernetes.io/'
  },
  {
    name: 'Docker',
    url: 'https://docs.docker.com/'
  },
  {
    name: 'Stackoverflow',
    url: 'https://stackoverflow.com/'
  }
];

app.get('/advertising', (req, res) => {
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  res.json(randomProduct);
});

app.listen(PORT, () => {
  console.log(`Advertising microservice listening at http://localhost:${PORT}`);
});
