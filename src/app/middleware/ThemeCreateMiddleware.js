import UserController from 'Controller/UserController';
import User from 'Database/models/user';

export default class ThemeCreateMiddleware {
  /**
   * Create new theme.
   * 
   * @param { JSON } user_info
   * @param { String } theme_url
   * 
   * @return { Promise }  Created theme id
   */
  async create(user_info, theme_url) {
    const user = await UserController.findAndRegister(user_info);

    const updated_user = await User.findByIdAndUpdate(
      user._id,
      { $push: { themes: { url: theme_url } } },
      { new: true }
    );

    return Promise.resolve(updated_user.themes[updated_user.themes.length - 1]._id);
  }
}
