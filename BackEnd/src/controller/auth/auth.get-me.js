import { Title } from "../../utils/strings.js";
import User from "../../models/user.model.js";
import jwt from "jsonwebtoken";

const getMe = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    if (!token) {
      return res.status(401).json({ message: Title.TOKEN_NOT_FOUND });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const userData = await User.findById(decodedToken.id);

    res.status(200).json({
      status: Title.SUCCESS,
      message: Title.USER_DATA_FETCHED_SUCCESSFULLY,
      userInfo: {
        name: userData?.name,
        email: userData?.email,
      },
    });
  } catch (error) {
    console.error(Title.ERROR_IN_GET_ME_CONTROLLER, error);
    res.status(500).json({ message: Title.INTERNAL_SERVER_ERROR });
  }
};

export default getMe;
