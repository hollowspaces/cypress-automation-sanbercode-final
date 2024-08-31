function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function randomizeUserForSignup() {
  // Membuat username dan password random
  const username = `user_${generateRandomString(8)}`;
  const password = `pass_${generateRandomString(10)}`;
  return { username, password };
}

module.exports = randomizeUserForSignup;
