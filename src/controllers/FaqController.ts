import { NextFunction, Request, Response } from "express";
import { createServicesAction } from "../actions/services/createServiceAction";
import { createFaqAction } from "../actions/faqs/createFaqAction";
import { getFaqAction } from "../actions/faqs/getFaqAction";
import { getFaqByIdAction } from "../actions/faqs/getFaqByIdAction";
import { updateFaqAction } from "../actions/faqs/updateFaqAction";
import { deleteFaqAction } from "../actions/faqs/deleteFaqAction";

export class FaqController{

async createFaqController (req: Request, res: Response, next : NextFunction) {
    try {
        const data  = req.body 
        const createFaq = await createFaqAction(data);
            return res.status(200).send(createFaq);
    } catch (error) {
        next(error)
        
    }
}

async getFaqController (req: Request, res: Response, next : NextFunction) {
    try {
        const getFaq = await getFaqAction();
            return res.status(200).send(getFaq);
    } catch (error) {
        next(error)
        
    }
}
    
async getFaqByIdController (req: Request, res: Response, next : NextFunction) {
    try {
        const {id} = req.params
        const getFaq = await getFaqByIdAction(Number(id));
            return res.status(200).send(getFaq);
    } catch (error) {
        next(error)
        
    }
}
    
async updateFaqController(req: Request, res: Response, next: NextFunction)  {
    try {
        const { id } = req.params;
        const data = req.body;
        const updateFaq = await updateFaqAction(Number(id), data);
    
        return res.status(200).send(updateFaq);
        
    } catch (error) {
       next(error);
    }
       
   }

async deleteFaqController(req: Request, res: Response, next: NextFunction)  {
try {
    const {id} = req.params;
    const deleteFaq = await deleteFaqAction(Number(id));
    return res.status(200).send(deleteFaq);
} catch (error) {
 next(error)   
}    
}
    

}

export default FaqController