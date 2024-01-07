import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
  title: String,
  views: String,
  time: String,
  verified: Boolean,
});

export default mongoose.model('Video', videoSchema);