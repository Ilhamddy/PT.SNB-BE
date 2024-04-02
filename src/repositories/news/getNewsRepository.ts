import News from "../../db/models/news"
import User from "../../db/models/user";
import { INews } from "../../types/news.user";

export const getNewsRepository = async () => {
    try {
        const getNews = await News.findAll({
       
               order: [
                   ['id', 'DESC']
            ]
            
           
        });
        return getNews;
    } catch (error) {
        throw error;
    }
}