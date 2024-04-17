import Services from "../../db/models/services";
import { IServices } from "../../types/services.type";

export const getServicesRepository = async () => {
    try {
        const getServices = await Services.findAll();
        return getServices;
    } catch (error) {
        throw error;
    }
}