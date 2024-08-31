const { faker } = require("@faker-js/faker");

// Function to generate random user data
function randomizeUserForSignup() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
  };
}

module.exports = { randomizeUserForSignup };
