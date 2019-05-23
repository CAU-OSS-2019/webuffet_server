import UserController from 'Controller/UserController';

export default class ThemeListMiddleware {
  /**
   * Load all themes of the user.
   * 
   * @param { JSON } user_info
   * 
   * @return { Promise }  Theme list
   */
  async getList(user_info) {
    const user = await UserController.findAndRegister(user_info);

    const theme_list = [];

    user.themes.forEach((theme) => {
      theme_list.push({
        id: theme._id,
        url: theme.url,
        style_data: theme.style_data,
        title: theme.title
      });
    });
    
    return Promise.resolve(theme_list);
  }
}
