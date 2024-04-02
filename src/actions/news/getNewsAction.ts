import { getNewsRepository } from "../../repositories/news/getNewsRepository"

export const getNewsAction = async () => {
    try {
    const result = await getNewsRepository();
       return {
            status: 200,
            message: 'succes get date user',
            data: result,
       };
    } catch (error) {
        throw error
    }
    
}