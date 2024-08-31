function validLoginCredentials() {
  return {
    username: "testpuji",
    password: "testpuji123",
  };
}

function invalidLoginPassword() {
  return {
    username: "testpuji",
    password: "invalidPassword123",
  };
}

function invalidUsernameValidPassword() {
  return {
    username: "testpujiii",
    password: "testpuji123",
  };
}

module.exports = {
  validLoginCredentials,
  invalidLoginPassword,
  invalidUsernameValidPassword,
};
