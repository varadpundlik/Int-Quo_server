const { getUserService } = require("../../service/user/index");
const { compare } = require("../../utils/encrypt");
const JsonWebToken = require("../../utils/jwt");
const config = require("../../config");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserService.byEmail(email);
  if(!user) {
    return res.status(200).json({ message: "User not found" });
  }
  const user_password = user.password;

  const valid = await compare(password, user_password);
  console.log(valid);
  if (valid) {
    const jwtUtil = new JsonWebToken(config.secret);
    const accessToken = jwtUtil.generate({ id: user.id }, 10000000);
    const refreshToken = jwtUtil.generate({ id: user.id }, 10000000);

    delete user.dataValues.password;

    return res
      .status(200)
      .json({ ...user.dataValues, accessToken, refreshToken });
  }
  return res.status(200).json({ message: "Incorrect Password" });
};

module.exports = { login };
