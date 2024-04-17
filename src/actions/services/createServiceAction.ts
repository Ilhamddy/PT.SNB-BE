import { createServicesRepository } from "../../repositories/services/createServiceRepository"
import { IServices } from "../../types/services.type"

export const createServicesAction = async (data:IServices) => {
    try {
        const createServices = await createServicesRepository(data);
        return {
            status: 200,
            message: 'Create Service berhasil',
            data: createServices,
        };
      
    } catch (error) {
        return {
            status: 500,
            message: 'Cant get data',
          };
    
    }
}