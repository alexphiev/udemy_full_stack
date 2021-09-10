const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
require('./models/User'); // Needs to be loaded before passport which uses User
require('./services/passport'); // Just to make sure the passport.js file is loaded

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app); // Same as: require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);