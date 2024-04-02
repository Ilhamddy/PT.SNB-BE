import User from "../../db/models/user"

export const getUserByEmailRepository = async (email: string) => {
    try {
        const getEmail = await User.findOne({
            where: {
                email
            }
        })
        return getEmail;
    } catch (error) {
        throw error;
    }
}


// hasbi@purwadhika.com