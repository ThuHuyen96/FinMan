import test from './test';

export class ServiceManager {
    constructor() {
      this.test = new test();
  
      this.navigation = undefined;
    }
    gettest () {
        return this.test;
    }

    setNavigation(navigation) {
      this.navigation = navigation;
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