const db = require("../db.js");
const User = require("../models/user");
const Location = require("../models/location");
const createToken = require("../helpers/createTokens");

async function commonBeforeAll() {
  await db.query("DELETE FROM projects ");
  await db.query("DELETE FROM customers ");
  await db.query("DELETE FROM contractors ");
  await db.query("DELETE FROM user_locations ");
  await User.register({
    firstname: "First-1",
    lastname: "Last-1",
    password: "password-1",
    email: "1@email.com",
    userType: "customers",
  });
  await User.register({
    name: "Name-2",
    firstname: "First-2",
    lastname: "Second-2",
    password: "password-2",
    email: "2@email.com",
    userType: "contractors",
  });
  await Location.add({
    userID: 1,
    newLocationData: {
      lat: 42.382,
      lng: -83.087,
      userType: "customers",
    },
  });
  await Location.add({
    userID: 2,
    newLocationData: {
      lat: 42.312,
      lng: -83.067,
      userType: "contractors",
    },
  });
}
async function commonBeforeEach() {
  await db.query("BEGIN");
}
async function commonAfterEach() {
  await db.query("ROLLBACK");
}
async function commonAfterAll() {
  await db.end();
}

const user1Token = createToken({
  id: 1,
  firstname: "First-1",
  lastname: "Last-1",
  password: "password-1",
  email: "1@email.com",
  userType: "customers",
});
const user2Token = createToken({
  id: 1,
  firstname: "First-2",
  lastname: "Second-2",
  password: "password-2",
  email: "2@email.com",
  userType: "contractors",
});

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  user1Token,
  user2Token,
};
