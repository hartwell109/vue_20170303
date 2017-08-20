var config = {
  axios: {
    baseURL: 'http://192.168.0.103:3000',
    timeout: 5000,
    headers: {token: global.token},
    responseType: 'json'
  },
  socket: {
    url: 'http://localhost:3333'
  }
}
module.exports = config
