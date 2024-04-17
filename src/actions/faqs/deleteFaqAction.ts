import { deleteFaqRepository } from "../../repositories/faqs/deleteFaqRepository";

export const deleteFaqAction = async (id: number) => {
    try {
        const deleteFaq = await deleteFaqRepository(id);
        if (!deleteFaq) {
            return {
                status: 404,
                message: " Data not Found",
                data: null,
            }
        }
        return ({
            status: 200,
            message: " Data delete Faq Berhasil",
            data: {deleteFaq : deleteFaq},
          });
    } catch (error) {
        throw error;       
    }
}
