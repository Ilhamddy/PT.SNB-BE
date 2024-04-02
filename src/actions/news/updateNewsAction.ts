import { updateNewsRepository } from "../../repositories/news/updateNewsRepository";
import { INews } from "../../types/news.user";

export const updateNewsAction = async (id: number, data: INews) => {
    try {
    
        const updateNews = await updateNewsRepository(Number(id), data);
        return({
            status: 200,
            message: " Data update User Berhasil",
            data: {
                updateNews: {
                 updateNews
             }},
          });
    } catch (error) {
        throw error
    }
    
}