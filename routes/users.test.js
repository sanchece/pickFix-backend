const request = require("supertest");
const db = require("../db.js");
const app = require("../app");
const User = require("../models/user");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  user1Token,
  user2Token,
} = require("./commonRouteTest");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

describe("POST /register AND /login", function () {
  test("register customer", async function () {
    const resp = await request(app).post("/users/register").send({
      firstname: "First-3",
      lastname: "Last-3",
      password: "password-3",
      email: "3@email.com",
      userType: "customers",
    });
    expect(resp.body).toEqual({
      token: expect.any(String),
    });
  });

  test("register contractor", async function () {
    const resp = await request(app).post("/users/register").send({
      firstname: "First-4",
      lastname: "Last-4",
      password: "password-4",
      email: "4@email.com",
      userType: "contractors",
    });
    expect(resp.body).toEqual({
      token: expect.any(String),
    });
  });
});
describe("POST /login", function () {
  test("login customer", async function () {
    const resp = await request(app).post("/users/login").send({
      password: "password-1",
      email: "1@email.com",
      userType: "customers",
    });
    expect(resp.body).toEqual({
      token: expect.any(String),
    });
  });

  test("login contractor", async function () {
    const resp = await request(app).post("/users/login").send({
      password: "password-2",
      email: "2@email.com",
      userType: "contractors",
    });
    expect(resp.body).toEqual({
      token: expect.any(String),
    });
  });
});

describe("GET all users", function () {
    test("get all customers", async function () {
      const resp = await request(app).post("/users/customers")
      expect(resp.body).toEqual([{
          id:expect.any(Number),
        firstname: "First-1",
        lastname: "Last-1",
        email: "1@email.com"
      }]);
    });
    test("get all contractors", async function () {
      const resp = await request(app).post("/users/contractors")
 
      console.log("*****************all contractors", resp.body)
      expect(resp.body).toEqual([{
          id:expect.any(Number),
          firstname: "First-2",
          lastname: "Second-2",
          email: "2@email.com",
      }]);
    });

})  
