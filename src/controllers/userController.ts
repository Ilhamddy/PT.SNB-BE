import { NextFunction, Request, Response } from "express";
import { getUserAction } from "../actions/users/getUserAction"
import { createUserAction } from "../actions/users/createUserAction";
import { deleteUserAction } from "../actions/users/deleteUserAction";
import { updateUserAction } from "../actions/users/updateUserAction";
import { loginUserAction } from "../actions/users/loginUserAction";
import { keepLoginAction } from "../actions/users/keepLoginAction";
import fs from 'fs';
import { join } from 'path';
import { getNewsByIdAction } from "../actions/news/getNewsByidAction";
import News from "../db/models/news";


export class UsersController {
async  getUserController(req: Request, res: Response, next : NextFunction)  {
        try {
            const getUser = await getUserAction();
    
            return res.status(200).send(getUser);
        } catch (error) {
            next(error)
        }
     }
    
 async createUserController(req: Request, res: Response, next: NextFunction)  {
        try {
            const data = req.body;
            const createUser = await createUserAction(data);
            return res.status(200).send(createUser);
        } catch (error) {
           next(error);
        } 
      }
       
async loginUserController(req: Request, res: Response, next: NextFunction) {
          try {
              const data = req.body;
              const loginUser = await loginUserAction(data);
              return res.status(200).send(loginUser)
              
          } catch (error) {
            next(error)
          }
      }
    
    
    
   async  deleteUserController(req: Request, res: Response, next: NextFunction){
    try {
        const { id } = req.params;
        const deleteUser = await deleteUserAction(Number(id));
        return res.status(200).send(deleteUser)
    } catch (error) {
        next(error)
        
    }
    }
    
   async  updateUserControler(req: Request, res: Response, next: NextFunction)  {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateUser = await updateUserAction(Number(id), data);
            return res.status(200).send(updateUser)
        } catch (error) {
            next(error)
        }
   }
    
    
   async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user?.email;
      console.log('data req user email', req.user?.email);

      const result = await keepLoginAction(email as string);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
    
  // async uploadPhotoProfile(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { file } = req;
  //     const { id } = req.params;
  //     const userId = parseInt(id);

  //     const userData = await getNewsByIdAction(Number(id));

  //     const defaultDir = '../../public/news';
  //     const isOldImageExist = fs.existsSync(
  //       join(__dirname, defaultDir + userData.data?.profile_picture),
  //     );

  //     if (isOldImageExist) {
  //       fs.unlinkSync(
  //         join(__dirname, defaultDir + userData.data?.profile_picture),
  //       );
  //     }

  //     await News.update({
  //       where: { id: userId },
  //       data: { profile_picture: `/${file?.filename}` },
  //     });

  //     res.status(200).send('update photo profile success');
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}


export default UsersController;