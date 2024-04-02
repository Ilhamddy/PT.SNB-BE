import { excludeFields } from "../../helpers/excludeFields";
import { getUserByEmailRepository } from "../../repositories/user/getUserByEmailRepository";

export const keepLoginAction = async (email: string) => {
  try {
    const user = await getUserByEmailRepository(email);
    if (!user) throw new Error('Account not found');

    const dataWithoutPassword = excludeFields(user, ['password']);

    return {
      message: 'keep login berhasil',
      data: dataWithoutPassword,
    };
  } catch (error) {
    throw error;
  }
};
