import User from 'Database/models/user';
import { UserDoc } from 'Database/schemas/user';

export interface Auth {
  id: string,
  email: string
};

export default class Authenticator {
  private user: UserDoc;

  /**
   * Check if auth info is valid.
   * 
   * @return Resolve boolean
   */
  public async isValid(auth: Auth): Promise<boolean> {
    if (!auth.hasOwnProperty('id') || !auth.hasOwnProperty('email')) {
      return Promise.resolve(false);
    }

    try {
      this.user = <UserDoc>(await User.findOneAndUpdate(
        { account_id: auth.id, email: auth.email },
        {},
        { upsert: true, new: true }
      ));

      return Promise.resolve(true);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  public getUser(): UserDoc {
    return this.user;
  }
};
