const User = require("../models/user");
const db = require("../db.js");

const {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll
  } = require("./commonModelTest");
  
  beforeAll(commonBeforeAll);
  beforeEach(commonBeforeEach);
  afterEach(commonAfterEach);
  afterAll(commonAfterAll);
  
  describe("authenticate", function () {
    const newCustomerData={
        email:"test-email",
        password: "password-2", 
        userType:"customers"};
    test("works", async function () {
      const user = await User.authenticate(newCustomerData);
      console.log("USER FROM LOGIN &*&*&*&*&*&*&*&*&&*&", user)
        
      expect(user).toEqual({
        id:expect.any(Number),
        firstname: 'test-firstname',
        lastname: 'test-secondname',
        email: 'test-email',
        userType: 'customers'

      });
    })
})
  describe("register", function () {
    const newCustomerData={
        firstname: "test-firstname2",
        lastname: "test-secondname2",
        password: "password-1",
        email: "test-email2",
        userType: "customers",
      };
    test("works", async function () {
      const user = await User.register(newCustomerData);
      console.log("USER FROM register &*&*&*&*&*&*&*&*&&*&", user)

        
      expect(user).toEqual({
        id:expect.any(Number),
        firstname: "test-firstname2",
        lastname: "test-secondname2",
        email: "test-email2",
        userType: "customers",

      });
    })
})