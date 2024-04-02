import User from "../../db/models/user";
import { IUser } from "../../types/news.user";

export const updateUserRepository = async (id: number, data: IUser) => {
    try {
        const updateUserid = await User.update(
            data,
            {where:{id}}
        )
        return updateUserid;
    } catch (error) {
        throw error;
    }
}