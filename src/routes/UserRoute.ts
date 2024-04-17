// import express from "express";

import { Router } from "express";
import UsersController from "../controllers/userController";
import { verifyToken } from "../middleware/jwtVerifyToken";

// import userController from "../controllers/userController";

// const userRouter = express.Router();
// userRouter.get("/user", userController.getUserController);
// userRouter.post("/create-user", userController.createUserController);
// userRouter.delete("/delete-user/:id", userController.deleteUserController);
// userRouter.patch("/update-user/:id", userController.updateUserControler);
// userRouter.post("/login", userController.loginUserController)




// export default userRouter;


export class UserRouter{
    private router: Router;
    private usersController: UsersController;


    constructor() {
        this.usersController = new UsersController();
        this.router = Router();
        this.initializeRoutes();

    }

    private initializeRoutes(): void{
        this.router.get('/', this.usersController.getUserController);
        this.router.post('/create-user', this.usersController.createUserController);
        this.router.delete('/delete-user/:id', this.usersController.deleteUserController);
        this.router.patch('/update-user/:id', this.usersController.updateUserControler);
        this.router.post('/login', this.usersController.loginUserController);
    this.router.get('/keep', verifyToken, this.usersController.keepLogin);





        

    }

    getRouter(): Router{
        return this.router
    }

}