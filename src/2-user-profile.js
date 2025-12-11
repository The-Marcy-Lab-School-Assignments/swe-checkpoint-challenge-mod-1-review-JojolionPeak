// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  newObj = {
  username : username,
  email : email,
  loginCount : 0,
  isActive : true
  }
  return newObj;
};
let user1 = createUser("coder123", "coder@example.com");
//console.log(user1)

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  user.loginCount++;
  return user.loginCount;
};
// incrementLogin(user1)
// console.log(incrementLogin(user1))

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;
  return user;
};
// console.log(deactivateUser(user1))

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  for (let keys in user){
    console.log(`${keys}: ${user[keys]}`)
  }
};
 printUserInfo(user1)

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  return {...user}
};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
