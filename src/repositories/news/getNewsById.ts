import News from "../../db/models/news"
import User from "../../db/models/user";

export const getNewsByIdRepository = async (id: number) => {
    try {
        const getNewsId = await News.findByPk(id,
        
        );
        
        return getNewsId;
    } catch (error) {
        throw error;
    }
} 