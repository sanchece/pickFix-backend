const express = require('express');
const app = express();

// creates object to call routes from routes folder 
const userRoutes=require("./routes/users")
const projectRoutes=require("./routes/projects")
const locationRoutes=require("./routes/userLocations")
const eventRoutes=require("./routes/userEvents")
const { authenticateJWT } = require("./middleware/authentication");
const {NotFoundError}= require("./CustomErrors")

const cors = require("cors");
app.use(cors());

app.use(express.json());

 app.use(authenticateJWT);

//middleware methods to route into appropriate route
app.use("/users",userRoutes)
app.use("/projects",projectRoutes)
app.use("/location",locationRoutes)
app.use("/events",eventRoutes)


// handles 404 errors - when none of the routes above are matched
app.use(function(req,res,next){
  return next(new NotFoundError());
})

// Custom error handler when next(err) is called in the above routes
// triggering this middleware error handler
app.use(function (err,req, res, next) {
  // if (process.env.NODE_ENV !== "test") console.error(err.stack); 
  const status = err.status || 500;
  const message = err.message;
  return res.status(status).json({
    error: { message, status },
    pickfix: "hello"
  });
});




module.exports = app;