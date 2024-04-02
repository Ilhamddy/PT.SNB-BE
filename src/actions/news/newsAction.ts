import path from "path";
import News from "../../db/models/news";
import { newsRepository } from "../../repositories/news/newsRepository";
import { INews } from "../../types/news.user";
export const newsAction = async(data : INews , file: string) => {
    try {
        const imageUrl = file ? `/news/${path.basename(file)}` : null;
    
        // Creating the news item with the image URL
        const createNews = await News.create({
            title: data.title,
            description: data.description,
            image: imageUrl, // Assuming your News model has an 'image' field
            createdAt: new Date(), // Add this line if you need to set the createdAt property
            updatedAt: new Date(), // Add this line if you need to set the updatedAt property
        });
    
        return createNews;
    } catch (error) {
        throw error;
    }
}