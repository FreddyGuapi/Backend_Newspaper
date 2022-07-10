import { Router } from "express";
import {
  getNews,
  createNews,
  updateNews,
  deleteNews,
  getNew,
} from "../controllers/news.controllers.js";

const router = Router();

router.get("/news", getNews);
router.post("/news", createNews);
router.put("/news/:id", updateNews);
router.delete("/news/:id", deleteNews);
router.get("/news/:id", getNew);

export default router;
