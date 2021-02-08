# jwt
app.js=> Launch a server.

auth=>VerifyToken.js=>its verify token (so only authorize person can access).

auth=>AuthController=>It handle login/logout/register route , Encrypted the password, jwt.sign token if userid and password is correct.

user=>user.js=>making UserSchema.

user=>userController=>it have a restfull api to edit/delete data if token verify.
