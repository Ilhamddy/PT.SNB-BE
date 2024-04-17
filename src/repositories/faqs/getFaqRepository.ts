import Faq from "../../db/models/faq";
import { IServices } from "../../types/services.type";

export const getFaqRepository = async () => {
    try {
        const getFaq = await Faq.findAll();
        return getFaq;
    } catch (error) {
        throw error;
    }
}