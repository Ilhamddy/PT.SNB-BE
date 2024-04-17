import Faq from "../../db/models/faq";


export const getFaqByIdRepository = async (id: number) => {
    try {
        const getFaq = await Faq.findByPk(id);
        return getFaq;
    } catch (error) {
        throw error;
    }
}