import News from '../models/news.model.js';

export const getNews = async (req, res) => {
    const news = await News.find()
    res.json(news)
};
export const createNews =  async (req, res) => {
    const {author, title, content} = req.body
    
    const news = new News({
        author,
        title,
        content
    })
    await news.save()
    res.json(news)
};
export const updateNews = (req, res) => res.send('Updating News');
export const deleteNews = (req, res) => res.send('Delete News');
