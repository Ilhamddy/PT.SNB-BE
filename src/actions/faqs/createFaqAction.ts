import { createFaqRepository } from "../../repositories/faqs/createFaqRepository";
import { IFaq } from "../../types/faq.type";

export const createFaqAction = async (data: IFaq) => {
    try {
        const createFaq = await createFaqRepository(data);
        return {
            status: 200,
            message: 'Create Faq berhasil',
            data: createFaq,
        };
      
    } catch (error) {
        return {
            status: 500,
            message: 'Cant get data',
          };
    
    }
    
}