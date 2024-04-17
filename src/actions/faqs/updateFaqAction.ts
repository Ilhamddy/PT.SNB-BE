import { getFaqByIdRepository } from "../../repositories/faqs/getFaqByIdRepository";
import { updateFaqRepository } from "../../repositories/faqs/updateFaqRepository";
import { IFaq } from "../../types/faq.type";

export const updateFaqAction = async (id: number, data: IFaq) => {
    try {
    
        const updateFaq = await updateFaqRepository(Number(id), data);

        const updateFaqAll = await getFaqByIdRepository(id)

        if (!updateFaqAll) {
            return {
              status: 404,
              message: " Data not Found",
              data: null,
            };
        }
        return({
            status: 200,
            message: " Data update Faq Berhasil",
            data:updateFaqAll
          });
    } catch (error) {
        throw error
    }
    
}