import mongoose from 'mongoose';

const dbConnection = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/reactdemo')
    .then(() => {
      console.log('database has been connected');
    })
    .catch((err) => {
      console.log('database has thrown err ', err);
    });
};

export default dbConnection;
