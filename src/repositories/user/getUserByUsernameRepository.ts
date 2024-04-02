import User from "../../db/models/user";


export const getUserByUsernameRepository = async (name: string) => {
  try {
      const result = await User.findOne({
          where: {
              name
          }
    })
    return result;
  } catch (error) {
    throw error;
  }
};
