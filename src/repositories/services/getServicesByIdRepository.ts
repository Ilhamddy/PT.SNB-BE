import Services from "../../db/models/services";


export const getServiceByIdRepository = async (id: number) => {
    try {
        const getService = await Services.findByPk(id);
        return getService;
    } catch (error) {
        throw error;
    }
}