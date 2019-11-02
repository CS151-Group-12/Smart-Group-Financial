import localStrategy from "passport-local";
const LocalStrategy = localStrategy.Strategy;

import bcrypt from "bcrypt";

export const applyPassportStrategy = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.query(`SELECT * FROM User WHERE id like ${id}`, (err, rows) => {
      done(err, rows[0]);
    });
  });

  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      (email, password, done) => {
        db.query(
          `SELECT * FROM User WHERE email like '${email}'`,
          (err, rows) => {
            if (err) return done(err, false);

            if (!rows.length) {
              return done(null, false, { message: "User Not Found" });
            }

            bcrypt.compare(password, rows[0].password, (err, res) => {
                if(err){
                    console.log("Error: "+err)
                    return done(null, false, { message: "Wrong Password" });
                }

                if(!res){
                    return done(null, false, { message: "Wrong Password" });
                }else{
                    return done(null, rows[0]);
                }
            });
          }
        );
      }
    )
  );
};