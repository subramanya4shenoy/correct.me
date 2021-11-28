const jwt = require('jsonwebtoken');

module.exports = (ctx) => {
  const authHeader = ctx.req.headers.authorization;
  const authStaus = false;
  if (!authHeader) {
    authStaus = false;
    return null;
  }
  const token = authHeader.split(' ')[1];
  let user;
  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    authStaus = false;
    return null;
  }
  if (!user) {
    authStaus = false;
    return null;
  }
  authStaus = true;
  return {user, authStaus};
};
