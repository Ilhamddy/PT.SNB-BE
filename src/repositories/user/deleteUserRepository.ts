import User from "../../db/models/user";

export const deleteUserRepository = async (id: number) => {
    try {
        const userId = await User.destroy(
            {
                where : {id}
            }
        );
        return userId;
       
    } catch (error) {
        throw error
    }
    
}