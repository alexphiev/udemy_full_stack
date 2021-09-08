const express = require('express');
const passport = require('passport');
const keys = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use("google-strategy", new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    }, (accessToken) => {
        console.log(accessToken);
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);