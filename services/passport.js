const passport = require("passport");
const {Strategy: GoogleStrategy} = require("passport-google-oauth20");
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
});

passport.use("google", new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            const googleId = profile.id;
            User.findOne({googleId: googleId})
                .then(existingUser => {
                    if (existingUser) {
                        // Do not save a new item
                        done(null, existingUser);
                    } else {
                        new User({googleId: googleId})
                            .save()
                            .then(user => done(null, user));
                    }
                });
        }
    )
);
