import { getUserRepository } from "../../repositories/user/getUserRepository";

export const getUserAction = async () => {
    try {
        const getUser = await getUserRepository();
        return {
            status: 200,
            message: 'succes get date user',
            data: getUser,
       };
    } catch (error) {
        
    }
}