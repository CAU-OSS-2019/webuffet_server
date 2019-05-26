import UserController from 'Controller/UserController';
import User from 'Database/models/user';

export default class ThemeUpdateMiddleware {
  /**
   * Update a theme.
   * 
   * @param { JSON } user_info
   * @param { JSON } theme_info
   * 
   * @return { Promise }
   */
  async update(user_info, theme_info) {
    const user = await UserController.findAndRegister(user_info);

    if (!theme_info.hasOwnProperty('id')) {
      return Promise.reject("invalid parameter");
    }

    // not allowed to modify "edited_date" item directly
    if (theme_info.hasOwnProperty('edited_date')) {
      delete theme_info.edited_date;
    }

    // change key name "id" to "_id"
    theme_info._id = theme_info.id;
    delete theme_info.id;

    const result = await User.update(
      { _id: user._id, "themes._id": theme_info._id },
      { $set: { "themes.$": theme_info } }
    );

    if (result.n === 0) {   // if theme is not found
      return Promise.reject("nonexistent theme id");
    }

    return Promise.resolve();
  }
}
