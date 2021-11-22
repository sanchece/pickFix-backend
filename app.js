const express = require('express');
const app = express();

// creates object to call routes from routes folder 
const userRoutes=require("./routes/users")
const projectRoutes=require("./routes/projects")
const locationRoutes=require("./routes/userLocations")
const eventRoutes=require("./routes/userEvents")
const { authenticateJWT } = require("./middleware/authentication");



// app.use(express.json());
app.use(authenticateJWT);

//middleware methods to route into appropriate route
app.use("/users",userRoutes)
app.use("/projects",projectRoutes)
app.use("/location",locationRoutes)
app.use("/event",eventRoutes)

// handles 404 errors - when none of the routes above are matched
app.use(function(req,res,next){
  return res.send("404 no route was matched, this end point does not exist")
})

// Custom error handler when next(err) is called in the above routes
// triggering this middleware error handler
app.use(function (err,req, res, next) {
  // if (process.env.NODE_ENV !== "test") console.error(err.stack); 
  const status = err.status || 500;
  const message = err.message;
  return res.status(status).json({
    error: { message, status },
  });
});




module.exports = app;