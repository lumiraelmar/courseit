const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const UserService = require("./services/userService");
const UserInstance = new UserService();

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },
    async (username, password, cb) => {
      try {
        const userData = await UserInstance.getUserByName(username);
        console.log(userData);
        if (!userData) {
          //este usuario esta mal
          cb(null, false);
        }

        if (userData.password != password) {
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
  console.log("serialize", user);
  cb(null, user.name);
});

passport.deserializeUser(async (name, cb) => {
  console.log("deserialize", name);
  const data = await UserInstance.getUserByName(name);
  cb(null, data);
});
