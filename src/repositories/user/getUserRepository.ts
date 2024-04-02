import User from "../../db/models/user"

export const getUserRepository = async () => {
    try {
        const getUser = await User.findAll();
        return getUser;
    } catch (error) {
        
        throw error
    }
} 