import apisauce from 'apisauce';
import { ApiConstants, generateHeader } from './Constants';

export default class testApi {
    constructor() {
        this.test = apisauce.create({
            baseURL: ApiConstants.baseURL + ApiConstants.testURL,
            timeout: 10000
        })
    }
    async gettest(params){
        let response = await this.api.get('', params, {
            headers: generateHeader()
          }).catch((error) => {
            console.log("error: ", error);
          });
          if (response.ok === true) {
            return response.data;
          }
          throw new Error(response);
    }
}