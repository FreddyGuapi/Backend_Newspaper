import News from "../models/news.model.js";

export const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getNew = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news)
      return res.status(404).json({
        message: "News does not exists",
      });
    return res.json(news);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const createNews = async (req, res) => {
  try {
    const { author, title, content } = req.body;
    const news = new News({
      author,
      title,
      content,
    });
    await news.save();
    res.json(news);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const newsUpdated = await News.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json(newsUpdated);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news)
      return res.status(404).json({
        message: "News does not exists",
      });
    return res.json(news);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
