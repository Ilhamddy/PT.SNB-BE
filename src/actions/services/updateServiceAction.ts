import { updateFaqRepository } from "../../repositories/faqs/updateFaqRepository";
import { getServiceByIdRepository } from "../../repositories/services/getServicesByIdRepository";
import { updateServiceRepository } from "../../repositories/services/updateServiceRepository";
import { IFaq } from "../../types/faq.type";
import { IServices } from "../../types/services.type";

export const updateServiceAction = async (id: number, data: IServices) => {
    try {
    
        const updateService = await updateServiceRepository(Number(id), data);
        const updateServiceAll = await getServiceByIdRepository(id);
        if (!updateServiceAll) {
            return{
                status: 404,
                message: "Data Not Found",
                    data: null
            }
        }
        
        return ({
            status: 200,
            message: " Data update Service Berhasil",
            data: updateServiceAll,
          });
    } catch (error) {
        throw error
    }
    
}