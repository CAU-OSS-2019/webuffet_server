export default class ServiceProvider {
  constructor() {
    if (new.target === ServiceProvider) {
      throw new TypeError("Cannot construct 'ServiceProvider' instances directly");
    }
  }

  /**
   * @abstract
   * 
   * Boot the service
   */
  boot() {
    throw new Error("You have to implement the method 'boot'");
  }
}
