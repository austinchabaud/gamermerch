const bcrypt = require("bcrypt");
module.exports = {
  gamerRegister: async (req, res, next) => {
    const { email, password, username } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.find_gamer_by_email(email);

    if (foundUser.length) {
      res.status(400).send("that user is invalid");
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await db.create_gamer([email, hashedPassword, username]);
      console.log(newUser);
      req.session.user = newUser[0];
      res.status(200).send(req.session.user);
    }
  },
  gamerLogin: async (req, res, next) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.find_gamer_by_email(email);
    console.log(foundUser);
    if (!foundUser.length) {
      res.status(404).send("user not registered");
    } else {
      const authenticated = await bcrypt.compare(
        password,
        foundUser[0].password
      );

      if (authenticated) {
        req.session.user = {
          id: foundUser[0].id,
          email: foundUser[0].email,
          username: foundUser[0].username
        };
        req.session.cart = [];

        res.status(200).send(req.session.user);
      } else {
        res.status(401).send("incorrect email/password combo");
      }
    }
  },
  gamerLogout: (req, res, next) => {
    req.session.destroy();
    res.status(200).send("later gamer");
  },
  getGamerSession: (req, res, next) => {
    res.status(200).send(req.session.user);
  }
};
