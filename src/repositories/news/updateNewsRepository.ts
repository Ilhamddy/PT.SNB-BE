import { where } from "sequelize";
import News from "../../db/models/news";
import { INews } from "../../types/news.user";

export const updateNewsRepository = async (id: number, data: INews) => {
    try {
     
        const updatedNews = await News.update(
           data,
            {
                where: { id },
            }
        );


        return updatedNews;
    } catch (error) {
        throw error;
    }
};