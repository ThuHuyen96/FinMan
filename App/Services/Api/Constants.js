const ApiConstants = {
    baseURL: 'http://10.0.3.2:8000',
    authURL: '/oauth/token',
    testURL: '/api/currentdevice',
    userURL: '/api/users',
}
const LoginConstants = {
    grant_type: "password",
    client_id: "1",
    client_secret: "123456789",
    scope: "*"
  }
const GlobalToken = {
    type: '',
    access_token: '',
    refresh_token: '',
  }
  
  function getToken() {
    return GlobalToken;
  }
  
  function setToken(token) {
    GlobalToken.type = token.type;
    GlobalToken.access_token = token.access_token;
    GlobalToken.refresh_token = token.refresh_token;
    GlobalToken.toString = token.type + " " + token.access_token;
  }

  function generateHeader() {
    return {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': GlobalToken.toString,
    }
  }
export {
    ApiConstants,
    LoginConstants,
    getToken,
    setToken,
    generateHeader
  }