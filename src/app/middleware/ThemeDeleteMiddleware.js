import Authenticator from 'Auth/Authenticator';
import User from 'Database/models/user';

export default class ThemeDeleteMiddleware {
  async delete(auth, theme_id) {
    const authenticator = new Authenticator();

    if (false === await authenticator.isValid(auth)) {
      return Promise.reject("invalid auth");
    }
    const user = authenticator.getUser();

    const result = await User.update(
      { _id: user._id, "themes._id": theme_id },
      { $pull: { themes: { _id: theme_id } } }
    );

    if (result.n === 0) {   // if theme is not exist
      return Promise.reject("nonexistent theme id");
    }

    return Promise.resolve();
  }
}
