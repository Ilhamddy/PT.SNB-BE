import { deleteServiceRepository } from "../../repositories/services/deleteServiceRepository";

export const deleteServiceAction = async (id: number) => {
    try {
        const deleteService = await deleteServiceRepository(id);

        if (!deleteService) {
            return {
                status: 404,
                message: "Data Not Found",
                data: null
            }
        }
        return ({
            status: 200,
            message: " Data delete Service Berhasil",
            data: {deleteService : deleteService},
          });
    } catch (error) {
        throw error;       
    }
}
