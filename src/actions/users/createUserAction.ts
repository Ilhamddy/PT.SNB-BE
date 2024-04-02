import { error } from "console";
import { hashPassword } from "../../lib/bycrpt";
import { createUserRepository } from "../../repositories/user/createUserRepository";
import { getUserByEmailRepository } from "../../repositories/user/getUserByEmailRepository";
import { IUser } from "../../types/news.user";

export const createUserAction = async (data: IUser) => {
  try {
    // console.log("register", data);
    // const { email } = data;
    // const emailIsExist = await getUserByEmailRepository(email);
    // if (emailIsExist) throw new Error("email Already exist");

    // console.log("register", data);
    const { email, password } = data;
    const emailExist = await getUserByEmailRepository(email);
    if (emailExist) throw new Error("email Already exist ");

    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;

    const createUser = await createUserRepository(data);
    return {
      status: 200,
      message: "add User berhasil",
      data: createUser,
    };
  } catch (error) {
    throw error;
  }
};
