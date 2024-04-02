import { updateUserRepository } from "../../repositories/user/updateUserRepository"
import { IUser } from "../../types/news.user"

export const updateUserAction = async (id: number, data: IUser) => {
    try {
        const updateUser = await updateUserRepository(Number(id), data);
        if (!updateUser) {
            return {
                status: 200,
                message: "Data Not Found",
                data : null
            }
        }
       
        return ({
            status: 200,
            message: " Data update User Berhasil",
            data: {
                updateUser: {
                 updateUser
             }},
          });
    } catch (error) {
        throw error
    }
}