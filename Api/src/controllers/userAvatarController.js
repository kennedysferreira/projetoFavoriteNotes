const knex = require("knex");
const AppError = require("../utils/appError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
  async update(req, res) {
    const user_id = req.user.id;
    const { filename } = req.file;
    const user = await knex("users").where({ user_id }).first();
    const disckStorage = new DiskStorage();

    if (!user) {
      throw new AppError("User not found", 404);
    }

    if (user.avatar) {
      await disckStorage.deleteFile(user.avatar);
    }

    const fileName = await disckStorage.saveFile(filename);
    user.avatar = fileName;

    await knex("users").update(user).where({ id: user_id });

    return res.json(user);
  }
}

module.exports = UserAvatarController;
