import { getFaqByIdRepository } from "../../repositories/faqs/getFaqByIdRepository";
import { getFaqRepository } from "../../repositories/faqs/getFaqRepository";

export const getFaqByIdAction = async (id:number) => {
    try {
        const getFaq = await getFaqByIdRepository(id);

        if (!getFaq) {
            return {
              status: 404,
              message: " Data not Found",
              data: null,
            };
        }

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