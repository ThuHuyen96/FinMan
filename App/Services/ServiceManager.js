import test from './test';
import UserService from './UserService';


export class ServiceManager {

    constructor() {
      this.test = new test();
      this.userService = new UserService();
      
  
      this.navigation = undefined;
    }
    gettest () {
        return this.test;
    }

    setNavigation(navigation) {
      this.navigation = navigation;
    }

    getUserService() {
      return this.userService;
    }
    goToScreen(screenName, props) {
        if (this.navigation) {
          const callback = CallbackService.getCallback(screenName);
          if (callback) {
            callback(props);
          } else {
            this.navigation.navigate({
              key: 'ServiceManager',
              routeName: screenName,
              params: {...props},
            });
          }
        }
    }

}
export const serviceManager = new ServiceManager();