import Authenticator, { Auth } from 'Auth/Authenticator';
import User from 'Database/models/user';
import { UserDoc } from 'Database/schemas/user';

export default class ThemeCreateMiddleware {
  /**
   * Create new theme.
   * 
   * @return Resolve created theme id
   */
  public async create(auth: Auth, theme_url: string): Promise<string> {
    const authenticator = new Authenticator();

    if (false === await authenticator.isValid(auth)) {
      return Promise.reject("invalid auth");
    }
    const user = authenticator.getUser();

    const updated_user = <UserDoc>(await User.findByIdAndUpdate(
      user._id,
      { $push: { themes: { url: theme_url } } },
      { new: true }
    ));

    return Promise.resolve(updated_user.themes[updated_user.themes.length - 1]._id);
  }
}
