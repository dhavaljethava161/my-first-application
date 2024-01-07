import Video from '../model/video';

export default async (fastify) => {
  fastify.post('/create', async (req, res) => {
    await Video.create(req?.body)
      .then((result) => {
        res.send({ status: 200, result });
      })
      .catch((err) => {
        res.send({ status: 400, err: err.message });
      });
  });

  fastify.get('/getvideos', async (req, res) => {
    await Video.find({})
      .then((result) => {
        res.send({ status: 200, result });
      })
      .catch((err) => {
        res.send({ status: 400, err: err.message });
      });
  });
};
