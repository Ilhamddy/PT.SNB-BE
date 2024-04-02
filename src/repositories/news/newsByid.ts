import News from "../../db/models/news"

export const newsByIdRepository = async (id: number) => {
    try {
        const newsId = await News.destroy(
            {
                where : {id}
            }
        );
        return newsId;
       
    } catch (error) {
        throw error
    }
    
}