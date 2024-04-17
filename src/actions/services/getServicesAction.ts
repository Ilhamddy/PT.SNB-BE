import { getFaqRepository } from "../../repositories/faqs/getFaqRepository";
import { getServicesRepository } from "../../repositories/services/getServicesRepository";
import { IFaq } from "../../types/faq.type";

export const getServiceAction = async () => {
    try {
        const getServices = await getServicesRepository();
        if (!getServices) {
            return {
              status: 404,
              message: " Data not Found",
              data: null,
            };
        }


 return {
            status: 200,
            message: 'Get Service berhasil',
            data: getServices,
        };
      
    } catch (error) {
        return {
            status: 500,
            message: 'Cant get data',
          };
    
    }
}