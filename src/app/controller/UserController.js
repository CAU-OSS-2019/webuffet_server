import User from 'Database/models/user';

export default class UserController {
  /**
   * Find user and register if not exists.
   * 
   * @param { JSON } user_info
   * 
   * @return { Promise }  User doc or error
   */
  static async findAndRegister(user_info) {
    if (!user_info.hasOwnProperty('id') || !user_info.hasOwnProperty('email')) {
      return Promise.reject("invalid parameter");
    }

    try {
      const user = await User.findOneAndUpdate(
        { account_id: user_info.id, email: user_info.email },
        {},
        { upsert: true, new: true }
      );

      return Promise.resolve(user);
    } catch (err) {
      return Promise.reject("cannot register the user");
    }
  }
}
