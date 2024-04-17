import  { Router } from "express";
import FaqController from "../controllers/FaqController";
import ServicesController from "../controllers/ServicesController";



export class ServicesRouter {
    private router: Router;
    private servicesController: ServicesController;
    constructor() {
        this.servicesController = new ServicesController();
        this.router = Router();
        this.initializeRoutes()

    }
    private initializeRoutes(): void{
        this.router.post("/create", this.servicesController.createServiceController);
        this.router.get("/", this.servicesController.getServiceController);
        this.router.get("/:id", this.servicesController.getServicesByIdController);

        this.router.delete("/delete/:id", this.servicesController.deleteServiceController);
        this.router.patch("/update/:id", this.servicesController.updateServiceController);
      
            
    }

    getRouter(): Router {
        return this.router
    }
}




