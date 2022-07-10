import { Router } from "express";
import {
    getNews,
    createNews,
    updateNews,
    deleteNews
} from "../controllers/news.controllers.js";


const router = Router()

router.get('/news', getNews);
router.post('/news', createNews);
router.put('/news', updateNews);
router.delete('/news', deleteNews);

export default router;