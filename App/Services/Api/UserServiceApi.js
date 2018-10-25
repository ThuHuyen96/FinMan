import apisauce from 'apisauce';
import { ApiConstants, LoginConstants, generateHeader } from './Constants';


export default class UserServiceApi {
    constructor() {
      this.api = apisauce.create({
        baseURL: ApiConstants.baseURL,
        timeout: 30000
      })
    }

    async login(username, password) {
        let response = await this.api.post(ApiConstants.authURL, {
          "grant_type": LoginConstants.grant_type,
          "client_id": LoginConstants.client_id,
          "client_secret": LoginConstants.client_secret,
          "scope": LoginConstants.scope,
          "username": username,
          "password": password,
        }, {
          headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        })
        .catch((error) => {
          console.log("UserServiceApi.login: ", error);
          return { ok: false };
        });
    
        return response;
      }
      async getUserInfoByUsername(username) {
          
        let response = await this.api.get(ApiConstants.userURL + '?username=' + username, { }, {
          headers: generateHeader()
        }).catch((error) => { 
          console.log("UserServiceApi.getUserInfoByUsername: ", error);
          return { ok: false };
        });
        return response;
      }
}