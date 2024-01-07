import fastify from 'fastify';
import dbConnection from './database';
import router from './router';
import cors from '@fastify/cors';

const app = fastify({ logger: true });

const port = 3500;

router(app);
app.get('/', (req, res) => {
  res.send('hello');
});

app.register(cors);
app.listen({ port }, (err) => {
  if (err) {
    console.log('server has thrown error', err);
  } else {
    dbConnection();
    console.log(`Server is running on http://localhost:${port}`);
  }
});
