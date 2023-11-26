import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Nodejs with Nginx!!!')
});

app.listen(3000);
