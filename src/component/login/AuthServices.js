import { authGetService, authPostService} from "../../utilis/globalApiServices";

const adminLogin = async (data) => {
    try {
        const res = await authPostService('/login', data)
        return res;
    } catch (error) {
        console.error("Error in adminLogin:", error);
        throw error;
    }
}

const adminRegister = async (data) => {
    try {
        const res = await authPostService('/register', data)
        return res;
    } catch (error) {
        console.error("Error in adminLogin:", error);
        throw error;
    }
}
const fetchUser = async (data) => {
    try {
      const response = await authGetService( '/users/2',data);
      return response;
    } catch (error) {
      console.error(`Error fetching list :`, error);
      throw error;
    }
  };

export const AuthService = {
    adminLogin,
    adminRegister,
    fetchUser
   
}