import  { Router } from "express";
import  { NewsController } from "../controllers/newsController";
import { uploader } from "../middleware/uploader";
import multer from "multer";


export class NewsRouter {
    private router: Router;
    private newsController: NewsController;
    constructor() {
        this.newsController = new NewsController();
        this.router = Router();
        this.initializeRoutes()

    }
    private initializeRoutes(): void{
        this.router.get("/", this.newsController.getNewsController);
        this.router.post("/create-news", uploader('image', '/news').single('image'), this.newsController.createNewsController);
        this.router.delete("/delete/:id", this.newsController.deleteNewsController);
        this.router.patch("/update/:id", this.newsController.updateNewsController);
        this.router.get("/:id", this.newsController.getNewsByIdController);
            
    }

    getRouter(): Router {
        return this.router
    }
}




