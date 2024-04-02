import { excludeFields } from "../../helpers/excludeFields";
import { comparePassword } from "../../lib/bycrpt";
import { createToken } from "../../lib/jwt";
import { getUserByEmailRepository } from "../../repositories/user/getUserByEmailRepository";
import { getUserByUsernameRepository } from "../../repositories/user/getUserByUsernameRepository";
import { ILogin } from "../../types/news.user";

export const loginUserAction = async (body: ILogin) => {
  try {
    let user;

    if (body.usernameOrEmail.includes("@")) {
      user = await getUserByEmailRepository(body.usernameOrEmail);
    } else {
      user = await getUserByUsernameRepository(body.usernameOrEmail);
    }
    if (!user) {
      return {
        status: 404,
        message: "Account Not Found Please Register",
      };
    }
    const isPasswordValid = await comparePassword(body.password, user.password);
    if (!isPasswordValid) throw new Error("invalid Password");

    const dataWithoutPassword = excludeFields(user, ["password"]);
    const token = createToken({ email: user.email });


    return {
      message: "Berhasil Login",
      data: dataWithoutPassword,
      token
    };
  } catch (error) {
    throw error;
  }
};
