const JsonWebToken = require("../../utils/jwt");

const {
  getUserService,
  postUserService,
  putUserService,
  deleteUserService,
} = require("../../service/user/index");

const constants = require("../../constants");

const config = require("../../config");

const {encrypt} = require("../../utils/encrypt");

const {
  user_not_found,
  user_already_exists,
  user_created,
  user_deleted,
  user_updated,
} = constants;

const getAllUsers = async (req, res) => {
  try {
    const users = await getUserService.all();
    users.map(user => delete user.dataValues.password);
    res.status(200).json({data:users});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await getUserService.byId(req.params.id);
    console.log(user);
    if (!user[0]) return res.status(404).json({ message: user_not_found });
    delete user[0].dataValues.password;
    res.status(200).json({data:user[0]});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postUser = async (req, res) => {
  try {
    const userExists = await getUserService.byEmail(req.body.email);
    console.log(userExists);

    if (!userExists){
        const userData ={...req.body, password: await encrypt(req.body.password)}
        const user = await postUserService.create(userData);

        const jwtUtil = new JsonWebToken(config.secret);
        const accessToken = jwtUtil.generate({ id: user.id }, 10000000);
        const refreshToken = jwtUtil.generate({ id: user.id }, 10000000);

        delete user.dataValues.password;

        res.status(201).json({ data: {...user.dataValues,accessToken,refreshToken}, message: user_created });
    } 
    else {
        res.status(400).json({ message: user_already_exists });
    }
    
  } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
  }
};

const putUser = async (req, res) => {
  try {
    const user = await putUserService.byId(req.params.id, req.body);

    if (!user[0]) 
        return res.status(404).json({ message: user_not_found });

    res.status(200).json({ message: user_updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const del = await deleteUserService.byId(req.params.id);
    
    if (!del)
        return res.status(404).json({ message: user_not_found });
    else 
        return res.status(200).json({ message: user_deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
};
