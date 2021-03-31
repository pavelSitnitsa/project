const chai = require("chai");
const axios = require("axios");
describe("testing HTTP request", function () {
  it(`get testing`, function () {
    // Make a request for a user with a given ID
    axios
      .get("https://reqres.in/api/users/2")

      .then(function (response) {
        chai
        .expect(200)
        .equals(response.status)
        let firstName = response.data.data.first_name;
        chai
        .expect("Janet")
        .equals(firstName)
        let lastName = response.data.data.last_name;
        chai
        .expect("Weaver")
        .equals(lastName)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
});
