import Services from "../../db/models/services";
import { IServices } from "../../types/services.type";

export const createServicesRepository = async (data: IServices) => {
    try {
        const createServices = await Services.create(data);
        
        return createServices;
    } catch (error) {
        throw error;
    }
} 