import Faq from "../../db/models/faq";
import { IFaq } from "../../types/faq.type";

export const createFaqRepository = async (data: IFaq) => {
    try {
        const createFaq = await Faq.create(data);
        
        return createFaq;
    } catch (error) {
        throw error;
    }
} 