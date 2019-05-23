import UserController from 'Controller/UserController';

export default class ThemeListMiddleware {
  /**
   * Load all themes of the user.
   * 
   * @param { JSON } user_info
   * 
   * @return { Promise }  Resolved theme list or error
   */
  async getList(user_info) {
    const user = await UserController.findAndRegister(user_info);

    user.themes.forEach((theme) => {
      delete theme._id;
    });

    return Promise.resolve(user.themes);
  }
}
