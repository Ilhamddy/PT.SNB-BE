import Services from "../../db/models/services";

export const deleteServiceRepository = async (id: number) => {
    try {
        const deleteService = await Services.destroy(
            {
                where : {id}
            }
        );
        return deleteService;
       
    } catch (error) {
        throw error
    }
    
}