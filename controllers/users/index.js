const {
  getUserService,
  postUserService,
  putUserService,
  deleteUserService,
} = require("../../service/user/index");

const getAllUsers = async (req, res) => {
  try {
    const users = await getUserService.all();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await getUserService.byId(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postUser = async (req, res) => {
  try {
    const user = await postUserService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putUser = async (req, res) => {
  try {
    const user = await putUserService.byId(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await deleteUserService.byId(req.params.id);
    res.status(204).end();
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
