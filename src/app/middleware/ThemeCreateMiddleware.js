import Authenticator from 'Auth/Authenticator';
import User from 'Database/models/user';

export default class ThemeCreateMiddleware {
  /**
   * Create new theme.
   * 
   * @param { JSON } auth
   * @param { String } theme_url
   * 
   * @return { Promise }  Created theme id
   */
  async create(auth, theme_url) {
    const authenticator = new Authenticator();

    if (false === await authenticator.isValid(auth)) {
      return Promise.reject("invalid auth");
    }
    const user = authenticator.getUser();

    const updated_user = await User.findByIdAndUpdate(
      user._id,
      { $push: { themes: { url: theme_url } } },
      { new: true }
    );

    return Promise.resolve(updated_user.themes[updated_user.themes.length - 1]._id);
  }
}
