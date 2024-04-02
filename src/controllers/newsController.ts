import { NextFunction, Request, Response } from "express";
import { newsAction } from "../actions/news/newsAction";
import { getNewsAction } from "../actions/news/getNewsAction";
import { deleteNewsAction } from "../actions/news/deleteNewsAction";
import { updateNewsAction } from "../actions/news/updateNewsAction";
import { getNewsByIdAction } from "../actions/news/getNewsByidAction";
import News from "../db/models/news";
import path from "path";


export class NewsController {
    async getNewsController (req: Request, res: Response, next: NextFunction)  {
        try {
    
            const result = await getNewsAction();
            return res.status(result.status).send(result);
        } catch (error) {
            next(error);
        }
    }
    
    async createNewsController (req: Request, res: Response, next: NextFunction)  {
     try {
         const data = req.body;
     
         const imageUrl =  `${req.file?.filename}`;

         console.log('req dataa', data);
         console.log('req data11', imageUrl);
         
    
         // Creating the news item with the image URL
         const createNews = await News.create({
             title: data.title,
             description: data.description,
             image: imageUrl, // Assuming your News model has an 'image' field
             createdAt: new Date(), // Add this line if you need to set the createdAt property
             updatedAt: new Date(), // Add this line if you need to set the updatedAt property
         });

         return res.status(200).send(createNews);
     } catch (error) {
        next(error);
     }
//     let { product, price, category } = JSON.parse(req.body.data)
   
//         let tambah = await model.product.create({
//             uuid: uuidv4(),
//             product,
//             price,
//             categoryId: category,
//             image: `/imgProduct/${req.files[0]?.filename}`
//         });
    
//     return res.status(200).send({
//         success: true,
//         message: 'Add Product success'
//     })

// } catch (error) {
//     console.log(error);
//     next(error)
// }
        
    }
    
    async updateNewsController(req: Request, res: Response, next: NextFunction)  {
        try {
            const { id } = req.params;
            const data = req.body;
            const updateNews = await updateNewsAction(Number(id), data);
        
            return res.status(200).send(updateNews);
            
        } catch (error) {
           next(error);
        }
           
       }
    
    async deleteNewsController(req: Request, res: Response, next: NextFunction)  {
    try {
        const {id} = req.params;
        const deleteNews = await deleteNewsAction(Number(id));
        return res.status(200).send(deleteNews);
    } catch (error) {
     next(error)   
    }    
    }
    
   async getNewsByIdController (req: Request, res: Response, next: NextFunction)  {
        try {
            const { id } = req.params;
       const getNewsByid = await getNewsByIdAction(Number(id))
       return res.status(200).send(getNewsByid);
        } catch (error) {
            next(error)
        }
    }
    

    // async createNewsImage(req: Request, res: Response, next: NextFunction) {
    //     try {
    //       console.log('reqqqqqq value', req.body);
    //       const { title, description } = req.body;
    //       console.log('reqqq filesss', req.files);
    
    //       const files = req.files;
    
    //       if (!files || !Array.isArray(files)) {
    //         // Handle case where multer encountered an error or no files were uploaded
    //         return res
    //           .status(400)
    //           .json({ success: false, error: 'No files uploaded' });
    //       }
    
    //       const create = await News.afterBulkCreate(async () => {
    //         const news = await News.create({
    //           data: {
    //             title,
    //             description,
    //           },
    //         });
    
    //         const newsId = news.id;
    
    //         const newsPhotoWithId = files.map((file) => ({
    //           newsId,
    //           image : file.filename,
    //         }));
    
    //         await tx.newsPhoto.create({
    //           data: newsPhotoWithId,
    //         });
    
    //         console.log('Photos saved successfully for product:', newsId);
    
    //         return news;
    //       });
    //       console.log('dataaaaa success', create);
    
    //       res.status(200).send(create);
    //     } catch (error) {
    //       next(error);
    //     }
    //   }
}
export default NewsController