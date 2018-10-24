import testApi from './Api/testAPI';

export default class test {
    constructor() {
        this.api = new testApi();
        this.currentPage = 1;
        this.test = [];
      }

    async gettest(params, callback) {
    if (callback) {
        this.api.gettest(params).then(response => {
        let test = [];
        if (response && response.data) {
            test = response.data;
        }
        if (callback) {
            callback(test);
        }
        }).catch(error => {
        console.log("error: ", JSON.stringify(error));
        if (callback) {
            callback([]);
        }
        });
    } else {
        let response = null;
        try {
            response = await this.api.gettest(params);
        } catch (error) {
            console.log("error: ", JSON.stringify(error));
        }
        if (response && response.data) {
            return response.data;
        } else {
            return [];
        }
    }
    }
}