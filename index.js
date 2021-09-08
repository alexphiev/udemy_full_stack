const express = require('express');
require('./services/passport'); // Just to make sure the passport.js file is ran
const authRoutes = require("./routes/authRoutes");

const app = express();
authRoutes(app); // Same as: require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);