import Faq from "../../db/models/faq";


export const deleteFaqRepository = async (id: number) => {
    try {
        const deleteFaq = await Faq.destroy(
            {
                where : {id}
            }
        );
        return deleteFaq;
       
    } catch (error) {
        throw error
    }
    
}