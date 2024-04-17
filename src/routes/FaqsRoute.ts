import  { Router } from "express";
import FaqController from "../controllers/FaqController";



export class FaqRouter {
    private router: Router;
    private faqController: FaqController;
    constructor() {
        this.faqController = new FaqController();
        this.router = Router();
        this.initializeRoutes()

    }
    private initializeRoutes(): void{
        this.router.get("/", this.faqController.getFaqController);
        this.router.post("/create", this.faqController.createFaqController);
        this.router.get("/:id", this.faqController.getFaqByIdController);
        this.router.delete("/delete/:id", this.faqController.deleteFaqController);
        this.router.patch("/update/:id", this.faqController.updateFaqController);      
    }

    getRouter(): Router {
        return this.router
    }
}




