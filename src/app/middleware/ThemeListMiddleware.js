import Authenticator from 'Auth/Authenticator';

export default class ThemeListMiddleware {
  /**
   * Load all themes of the user.
   * 
   * @param { JSON } auth
   * 
   * @return { Promise }  Theme list
   */
  async getList(auth) {
    const authenticator = new Authenticator();

    if (false === await authenticator.isValid(auth)) {
      return Promise.reject("invalid auth");
    }
    const user = authenticator.getUser();
    
    const theme_list = [];
    user.themes.forEach((theme) => {
      theme_list.push({
        id: theme._id,
        url: theme.url,
        style_data: theme.style_data,
        title: theme.title,
        edited_date: theme.edited_date
      });
    });
    
    return Promise.resolve(theme_list);
  }
}
