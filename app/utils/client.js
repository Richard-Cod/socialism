import axios from 'axios'
import manageJwtToken from './manageJwtToken';

// Set config defaults when creating the instance
const client = axios.create({
    baseURL: "http://localhost:8080/api/"
  });



  client.interceptors.request.use((config) => {
      config.headers.token = manageJwtToken.getTokenFromLocalStorage()

    // if (store.getters['auth/webSocketId'] !== null) {
    //   const webSocketId = store.getters['auth/webSocketId']
    //   config.headers.WebSocketId = webSocketId
    // }
    return config
  })





// Add a response interceptor
client.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });




export default client