import { deleteUserRepository } from "../../repositories/user/deleteUserRepository";

export const deleteUserAction = async (id: number) => {
    try {
        const deleteUser = await deleteUserRepository(id);
        if (!deleteUser) {
            return {
              status: 404,
              message: " Data not Found",
              data: null,
            };
        }
        return ({
            status: 200,
            message: " Delete Data User Berhasil",
            data: { deleteUser: deleteUser},
          });
    } catch (error) {
        throw error;       
    }
}
