import { getNewsByIdRepository } from "../../repositories/news/getNewsById"

export const getNewsByIdAction = async (id:number) => {
    try {
        
        const getNewsById = await getNewsByIdRepository(id);

        if (!getNewsById) {
            return {
              status: 404,
              message: " Data not Found",
              data: null,
            };
        }
        return {
            status: 200,
            message: 'get news by Id berhasil',
            data: getNewsById,
        };
      
    } catch (error) {
        return {
            status: 500,
            message: 'Cant get data',
          };
    }
}