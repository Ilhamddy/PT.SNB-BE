import { getServiceByIdRepository } from "../../repositories/services/getServicesByIdRepository";


export const getServicesByIdAction = async (id:number) => {
    try {
        const getService = await getServiceByIdRepository(id);
        if (!getService) {
            return {
              status: 404,
              message: " Data not Found",
              data: null,
            };
        }

 return {
            status: 200,
            message: 'Get Service berhasil',
            data: getService,
        };
      
    } catch (error) {
        return {
            status: 500,
            message: 'Cant get data',
          };
    
    }
}