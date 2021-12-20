const db = require("../db.js");
const User = require("../models/user");

async function commonBeforeAll() {
  await db.query("DELETE FROM customers ");
  await db.query("DELETE FROM contractors ");
  await db.query(`
    INSERT INTO customers(
        firstname,
        lastname, 
        email,
        password
)
VALUES (
    'test-firstname',
    'test-secondname',
  'test-email',
    '$2b$12$7SRkm4Z.DYfumGhPQALmt.O6NlyK2m2fLVpNxE5gXCNKGK./68JRS'
    )
RETURNING email`);

  // await User.register({
  //     firstname: "First-1",
  //     lastname: "Last-1",
  //     password: "password-1",
  //     email: "5@email.com",
  //     userType: "customers",
  //   });
  //   await User.register({
  //     name: "Name-2",
  //     firstname: "First-2",
  //     lastname: "Second-2",
  //     password: "password-2",
  //     email: "6@email.com",
  //     userType: "contractors",
  //   });
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

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
};
