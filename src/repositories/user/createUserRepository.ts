import User from "../../db/models/user";
import { IUser } from "../../types/news.user";

export const createUserRepository = async (data: IUser) => {
    try {
        const createNews = await User.create(data);

        
        return createNews;
    } catch (error) {
        throw error;
    }
    
}