import { newsByIdRepository } from "../../repositories/news/newsByid";
import { INews } from "../../types/news.user";

export const deleteNewsAction = async (id: number) => {
    try {
        const deleteNews = await newsByIdRepository(id);
        return ({
            status: 200,
            message: " Data delete news Berhasil",
            data: {deleteNews : deleteNews},
          });
    } catch (error) {
        throw error;       
    }
}
