const JsonWebToken = require("../utils/jwt");
const { getUserService } = require("../service/user/index");
const config = require("../config/index");

const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const jwtUtil = new JsonWebToken(config.secret);
      const decoded = await jwtUtil.decode(token);

      if (!decoded) {
        return res.status(401).json({ message: "Unauthorised request" });
      }

      const user = await getUserService.byId(decoded.id);

      if (!user) {
        return res.status(401).json({ message: "Unauthorised request" });
      }

      req.user = user[0];

      next();
    } catch (error) {
      res.status(401).send(error);
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

module.exports = auth;
