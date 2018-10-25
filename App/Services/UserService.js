import UserServiceApi from './Api/UserServiceApi';
import { serviceManager } from './ServiceManager';
import { setToken } from './Api/Constants';
import { CommonConstants } from '../Constants';
import { AsyncStorage } from 'react-native';

const DEFAULT_EMPLOYEE_PROFILE = {
  fullName: '',
  governmentId: '',
  GIDPlaceOfIssue: '',
  GIDDateOfIssue: '',
  permanentAddress: '',
  position: '',
  effectiveDateOfContract: '',
  department: {
    name: '',
  },
  contact: {
    phone: '',
    email: '',
    dob: '',
  }
}
export default class UserService {
    constructor() {
      this.api = new UserServiceApi();
      this.loggedUser = {
        userId: '',
        username: '',
        password: '',
        fullName: '',
        role: '',
        email: '',
        phone: '',
        employeeId: -1,
        thumbnail: null,
        token: null,
        isLogged: false,
      };
      this.sidebar = null;
    }
    login(username, password, callback) {
        this.api.login(username, password).then(async (response) => {
          let message = '';
          let retVal = false;
          if (response.ok === true) {
            // TO-DO: add timer to monitor expired time of token
            setToken({
              type: response.data.token_type,
              access_token: response.data.access_token,
              refresh_token: response.data.refresh_token,
            });
            retVal = await this.setLoggedUserInfo(username, password, response.data);
            if (retVal !== true) {
              message = "Không thể truy xuất thông tin người dùng.\nVui lòng thử lại.";
            } else {
              //serviceManager.getNotificationService().initFirebaseDbMonitor(username);
            }
          } else {
            message = "Không thể đăng nhập.\nSai tên đăng nhập hoặc mật khẩu.";
          }
    
          if (callback) {
            callback({ ok: retVal, message });
          }
        }).catch(error => {
          console.log("UserService.login: ", error);
          if (callback) {
            callback({ ok: false, message: '' });
          }
        });
      }
      async setLoggedUserInfo(username, password, token) {
        let retVal = false;
        const userInfo = await this.getUserBasicInfoByUsername(username);
        this.loggedUser.username = username;
        this.loggedUser.password = password;
        if (userInfo) {
          this.loggedUser.userId = userInfo.id;
          this.loggedUser.token = token;
          this.loggedUser.fullName = userInfo.fullName;
          this.loggedUser.role = userInfo.role;
          this.loggedUser.email = userInfo.email;
          this.loggedUser.employeeId = userInfo.employee.id;
          //this.loggedUser.contactId = userInfo.employee.contact_id;
          this.loggedUser.phone = userInfo.employee.phone;
          //this.loggedUser.position = userInfo.employee.position_name;
          //this.loggedUser.branchId = userInfo.employee.company.id;
          this.loggedUser.isLogged = true;
          retVal = true;
        } else {
          this.loggedUser = {
            username,
            password,
            isLogged: false,
          };
        }
        // this.storeLoggedUser(this.loggedUser);
        // const thumbnail = await serviceManager.getCommonService().getContactThumbnail(this.loggedUser.contactId);
        // if (thumbnail) {
        //   this.loggedUser.thumbnail = { uri: thumbnail + '?' + (new Date()).getTime() }
        // } else {
        //   this.loggedUser.thumbnail = CommonConstants.DEFAULT_THUMBNAIL;
        // }
    
        // if (!Boolean(userInfo.oneSignalId)) {
        //   serviceManager.getNotificationService().retrieveOneSignalUserId(oneSignalUserId => {
        //     if (Boolean(oneSignalUserId)) {
        //       this.updateUser({
        //         id: this.loggedUser.userId.toString(),
        //         username: this.loggedUser.username,
        //         email: this.loggedUser.email,
        //         oneSignalId: oneSignalUserId,
        //       });
        //     }
        //   });
        // }
        return retVal;
      }
      async getUserBasicInfoByUsername(username, callback) {
        const getUserInfo = await this.api.getUserInfoByUsername(username);
        if (callback) {
          getUserInfo.then(response => {
            let data = {};
            if (response.ok === true && response.data.data) {
              data = response.data.data[0];
            }
            if (callback) {
              callback({ ok: response.ok, data });
            }
          }).catch(error => {
            console.log("UserService.getUserInfoByUsername: ", error); callback({ ok: false })
          });
        } else {
          const response = await getUserInfo;
          if (response.ok === true && response.data.data) {
            return response.data.data[0];
          } else {
            return null;
          }
        }
      }
      async storeLoggedUser(object) {
        try {
          await AsyncStorage.setItem('users:loggedUser', JSON.stringify(object));
        } catch (error) {
          console.log("UserService.storeLoggedUser:", error);
        }
      }
      getUserThumbnail() {
        return this.loggedUser.thumbnail;
      }
}