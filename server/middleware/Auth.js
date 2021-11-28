const jwt = require('jsonwebtoken');

module.exports = (ctx) => {
  const authHeader = ctx.req.headers.authorization;
  let authStaus = false;
  if (!authHeader) {
    authStaus = false;
    return authStaus;
  }
  const token = authHeader.split(' ')[1];
  let user;
  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    authStaus = false;
    return authStaus;
  }
  if (!user) {
    authStaus = false;
    return authStaus;
  }
  authStaus = true;
  return {user, authStaus};
};
