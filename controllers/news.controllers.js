import News from "../models/news.model.js";

export const getNews = async (req, res) => {
  const news = await News.find();
  res.json(news);
};
export const getNew = async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news)
    return res.status(404).json({
      message: "News does not exists",
    });
  return res.json(news);
};
export const createNews = async (req, res) => {
  const { author, title, content } = req.body;
  const news = new News({
    author,
    title,
    content,
  });
  await news.save();
  res.json(news);
};
export const updateNews = async (req, res) => {
  const { id } = req.params;
  const newsUpdated = await News.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return res.json(newsUpdated);
};
export const deleteNews = async (req, res) => {
  const news = await News.findByIdAndDelete(req.params.id);
  if (!news)
    return res.status(404).json({
      message: "News does not exists",
    });
  return res.json(news);
};
