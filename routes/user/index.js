const router = require("express").Router();
const userController = require("../../controllers/users/index");
const auth = require("../../middleware/auth");
router.get("/", userController.getAllUsers);
router.get("/me", auth, userController.getMe);
router.get("/:id", userController.getUserById);
router.post("/", userController.postUser);
router.put("/:id", userController.putUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
