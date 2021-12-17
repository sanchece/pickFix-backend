const app = require("./app");

const { PORT } = require("./configurations");

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
