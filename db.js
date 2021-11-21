/** Database setup for users. */

const { Client } = require("pg");

let DB_URI;
//Check enviromental variable to set Database to testing or production
if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///pickfixtest";
} else {
  DB_URI = "postgresql:///pickfix";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();
module.exports = db;