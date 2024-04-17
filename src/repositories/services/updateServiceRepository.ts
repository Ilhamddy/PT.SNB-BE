import Services from "../../db/models/services";
import { INews } from "../../types/news.user";
import { IServices } from "../../types/services.type";


export const updateServiceRepository = async (id: number, data: IServices) => {
    try {

        const updateService = await Services.update(
           data,
            {
                where: { id },
            }
        );
        return updateService;
    } catch (error) {
        throw error;
    }
};