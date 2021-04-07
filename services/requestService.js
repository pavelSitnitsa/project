const axios = require("axios");

class RequestManagement {
  async requestPost(url, body) {
    let response;
    try {
      response = await axios.post(url, body);
    } catch (error) {
      throw error;
    }
    return response;
  }
  async requestGet(url, body) {
    let response;
    try {
      response = await axios.get(url, body);
    } catch (error) {
      throw error;
    }
    return response;
  }
}

const requestManagement = new RequestManagement();
module.exports = { requestManagement };
