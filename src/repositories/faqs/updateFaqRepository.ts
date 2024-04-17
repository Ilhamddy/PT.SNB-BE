import Faq from "../../db/models/faq";
import { IFaq } from "../../types/faq.type";

export const updateFaqRepository = async (id: number, data: IFaq) => {
    try {

        const updateFaq = await Faq.update(
           data,
            {
                where: { id },
            }
        );
        return updateFaq;
    } catch (error) {
        throw error;
    }
};