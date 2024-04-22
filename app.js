// app.js
const express = require('express');
const app = express();
const userRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const CONNECTDB = require("./config/config");
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
CONNECTDB(process.env.MONGO_DB_URL);

// Routes
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

// Listen to the port
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
