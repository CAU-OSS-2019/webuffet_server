import User from 'Database/models/user';

export default class UserController {
  /**
   * Find user and register if not exists.
   * 
   * @param { JSON } user_info
   * 
   * @return { Promise }  Resolved user doc or error message
   */
  static async findAndRegister(user_info) {
    // check parameter validity
    if (!user_info.hasOwnProperty('id') || !user_info.hasOwnProperty('email')) {
      return Promise.reject("invalid parameter");
    }

    try {
      const user = await User.findOneAndUpdate(
        { account_id: user_info.id, email: user_info.email },
        {},
        { upsert: true, new: true }
      );

      return user;
    } catch (err) {
      return Promise.reject("cannot register the user");
    }
  }
}
