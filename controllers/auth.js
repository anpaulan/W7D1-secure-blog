// controllers/auth.js

// Importing the jsonwebtoken package for handling JSON Web Tokens (JWTs)
const jwt = require("jsonwebtoken");

// Importing the dotenv package to load environment variables from a .env file
require("dotenv").config();

// Middleware function to verify the authenticity of the token provided in the request header
const verifyToken = (req, res, next) => {
    // Extracting the token from the request header
    const authHeader = req.headers.token;

    // Checking if the token exists in the request header
    if (authHeader) {
        // Splitting the token from the 'Bearer' keyword and extracting the actual token
        const token = authHeader.split(" ")[1];

        // Verifying the token using the JWT_SECRET stored in the environment variables
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            // Handling errors if the token is not valid
            if (err) res.status(403).json("Token is not valid!");

            // Assigning the user object decoded from the token to the request object for further use
            req.user = user;

            // Proceeding to the next middleware in the chain
            next();
        });
    } else {
        // Returning an unauthorized status and message if no token is provided in the request header
        return res.status(401).json("You are not authenticated!");
    }
};

// Exporting the verifyToken middleware function to be used by other modules
module.exports = { verifyToken };
