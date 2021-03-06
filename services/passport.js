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

const callback = async (accessToken, refreshToken, profile, done) => {
    const googleId = profile.id;
    const existingUser = await User.findOne({googleId: googleId});

    if (existingUser) {
        return done(null, existingUser);
    }

    const user = await new User({googleId: googleId}).save();
    done(null, user);
};

passport.use("google", new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
    }, callback)
);
