const { expect } = require("chai");
const axios = require("axios");

const testObject = {
  name: "Alex",
  age: 32,
};

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const GET_URL = "https://reqres.in/api/users/2";
const TEST_FIRST_NAME = "Janet";
const TEST_LAST_NAME = "Weaver";

describe("testing HTTP request", async function () {
  it("post testing", async function () {
    let response;
    try {
     response = await axios.post(POST_URL, testObject);
    } catch (error) {
      console.log(error);
    }
    expect(201).equals(response.status);
    const expected = { ...testObject, id: 101 };
    const actual = response.data;
    expect(expected).deep.equals(actual);
  });

  it(`get testing`, async function () {
    let response;
    try {
      response = await axios.get(GET_URL);
    } catch (error) {
      console.log(error);
    }
    expect(200).equals(response.status);
    let firstName = response.data.data.first_name;
    expect(TEST_FIRST_NAME).equals(firstName);
    let lastName = response.data.data.last_name;
    expect(TEST_LAST_NAME).equals(lastName);
  });
});
