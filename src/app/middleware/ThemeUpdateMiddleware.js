import Authenticator from 'Auth/Authenticator';
import User from 'Database/models/user';

export default class ThemeUpdateMiddleware {
  /**
   * Update a theme.
   * 
   * @param { JSON } auth
   * @param { JSON } theme_info
   * 
   * @return { Promise }
   */
  async update(auth, theme_info) {
    const authenticator = new Authenticator();

    if (false === await authenticator.isValid(auth)) {
      return Promise.reject("invalid auth");
    }
    const user = authenticator.getUser();

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
