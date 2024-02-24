const router = require("express").Router();
const userController = require("../../controllers/users/index");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.postUser);
router.put("/:id", userController.putUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
