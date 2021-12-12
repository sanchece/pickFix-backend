const { UnauthorizedError } = require("../CustomErrors");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../configurations");

function authenticateJWT(req, res, next) {
  try {
    const bcrytpedToken = req.headers.authorization;
    const token = bcrytpedToken.replace(/^[Bb]earer /, "").trim();

    if (token != "undefined") {
      const verification = jwt.verify(token, JWT_KEY);
      res.locals.user = verification;
    }
    return next();
  } catch (err) {
    next(err);
  }
}

function ensureLoggedIn(req, res, next) {
  try {
    if (!res.locals.user.email) throw new UnauthorizedError();
    return next();
  } catch (err) {
    return next(err);
  }
}

function ensureContractor(req, res, next) {
  try {
    if (res.locals.user.userType !== "contractors") {
      throw new UnauthorizedError();
    }
    return next();
  } catch (err) {
    return next(err);
  }
}

function ensureCorrectUser(req, res, next) {
  try {
    const user = res.locals.user;

    if (!(user && user.id == req.params.userId)) {
      throw new UnauthorizedError();
    }
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  authenticateJWT,
  ensureContractor,
  ensureCorrectUser,
  ensureLoggedIn,
};
