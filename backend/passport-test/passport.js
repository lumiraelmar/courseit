const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const UserService = require("./services/userService");
const UserInstance = new UserService();
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },
    async (username, password, cb) => {
      try {
        const userData = await UserInstance.getUserByName(username.toLowerCase());
        if (!userData) {
          //este usuario esta mal
          cb(null, false);
        }

        const compare = await bcrypt.compare(password, userData.password);
        if (!compare) {
          //este usuario esta mal
          cb(null, false);
        }
        // este usuario esta bien
        cb(null, userData);
      } catch (err) {
        //este usuario esta mal
        cb(null, false);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user.name);
});

passport.deserializeUser(async (name, cb) => {
  const data = await UserInstance.getUserByName(name);
  cb(null, data);
});
