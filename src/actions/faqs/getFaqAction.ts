import { getFaqRepository } from "../../repositories/faqs/getFaqRepository";
import { IFaq } from "../../types/faq.type";

export const getFaqAction = async () => {
    try {
        const getFaq = await getFaqRepository();

 return {
            status: 200,
            message: 'Get Faq berhasil',
            data: getFaq,
        };
      
    } catch (error) {
        return {
            status: 500,
            message: 'Cant get data',
          };
    
    }
}