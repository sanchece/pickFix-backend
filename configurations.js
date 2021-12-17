
const PORT = +process.env.PORT || 3001;

//for testing use a low BCRYPT WORK FACTOR, use standard 12 when not testing
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;
const JWT_KEY="key";
module.exports={
    BCRYPT_WORK_FACTOR,
    JWT_KEY,
    PORT
}