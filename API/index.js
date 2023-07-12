const server = require("./src/app");
const { PORT } = require("./config");

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
