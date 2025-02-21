
import Cookies from 'js-cookie';

const verifyToken = () => {
    const token = Cookies.get("adminToken");


    if (!token) {
        Cookies.remove("adminToken");
        return { status: false };
    }

    return { status: true, token };
};

export default verifyToken;

