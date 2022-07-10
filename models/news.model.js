import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    public_id: String,
    secure_url: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("News", newsSchema);
