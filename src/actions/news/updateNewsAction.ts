import { getNewsByIdRepository } from "../../repositories/news/getNewsById";
import { updateNewsRepository } from "../../repositories/news/updateNewsRepository";
import { INews } from "../../types/news.user";

export const updateNewsAction = async (id: number, data: INews) => {
    try {
    
        const updateNews = await updateNewsRepository(Number(id), data);
        const updateNewsAll = await getNewsByIdRepository(id)
        return({
            status: 200,
            message: "Data update News Berhasil",
            data: updateNewsAll
          });
    } catch (error) {
        throw error
    }
    
}