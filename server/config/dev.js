//Add mongo connection string

require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
};
