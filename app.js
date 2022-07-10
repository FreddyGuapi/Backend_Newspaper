import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./routers/index.routes.js";
import newsRouters from "./routers/news.routes.js";


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



app.use(indexRoutes);
app.use(newsRouters);

export default app;
