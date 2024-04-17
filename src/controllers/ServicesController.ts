import { NextFunction, Request, Response } from "express";
import { createServicesAction } from "../actions/services/createServiceAction";
import { getServiceAction } from "../actions/services/getServicesAction";
import { getServicesByIdAction } from "../actions/services/getServiceByIdAction";
import { updateServiceAction } from "../actions/services/updateServiceAction";
import { deleteServiceAction } from "../actions/services/deleteServiceAction";

export class ServicesController{

async createServiceController (req: Request, res: Response, next : NextFunction) {
    try {
        const data  = req.body 
        const createServices = await createServicesAction(data);
            return res.status(200).send(createServices);
    } catch (error) {
        next(error)
        
    }
}
    
    
async getServiceController (req: Request, res: Response, next : NextFunction) {
    try {
        const getServices = await getServiceAction();
            return res.status(200).send(getServices);
    } catch (error) {
        next(error)
        
    }
}
    
    
async getServicesByIdController (req: Request, res: Response, next : NextFunction) {
    try {
        const {id} = req.params
        const getFaq = await getServicesByIdAction(Number(id));
            return res.status(200).send(getFaq);
    } catch (error) {
        next(error)
        
    }
}

async updateServiceController(req: Request, res: Response, next: NextFunction)  {
    try {
        const { id } = req.params;
        const data = req.body;
        const updateFaq = await updateServiceAction(Number(id), data);
    
        return res.status(200).send(updateFaq);
        
    } catch (error) {
       next(error);
    }
       
   }

async deleteServiceController(req: Request, res: Response, next: NextFunction)  {
try {
    const {id} = req.params;
    const deleteService = await deleteServiceAction(Number(id));
    return res.status(200).send(deleteService);
} catch (error) {
 next(error)   
}    
}
    
    
    
}

export default ServicesController