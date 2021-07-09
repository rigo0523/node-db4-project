require("dotenv").config();
const server = require("./api/server");

//5000
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`*** Server Running at http://localhost:${port}`);
});
