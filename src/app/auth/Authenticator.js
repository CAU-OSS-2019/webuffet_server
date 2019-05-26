import User from 'Database/models/user';

export default class Authenticator {
  /**
   * Check if auth info is valid.
   * 
   * @param { JSON } auth
   * 
   * @return { Promise }  Resolve boolean
   */
  async isValid(auth) {
    if (!auth.hasOwnProperty('id') || !auth.hasOwnProperty('email')) {
      return Promise.resolve(false);
    }

    try {
      this.user = await User.findOneAndUpdate(
        { account_id: auth.id, email: auth.email },
        {},
        { upsert: true, new: true }
      );

      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  getUser() {
    return this.user;
  }
}
