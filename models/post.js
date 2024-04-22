// Importing Schema and model from mongoose for MongoDB schema creation
const { Schema, model } = require("mongoose");

// Defining the schema for the post model
const postSchema = new Schema({
    // Title field with type String, required
    title: {
        type: String,
        required: true
    },
    // User ID field with type String, required
    userId: {
        type: String,
        required: true
    },
    // Description field with type String, required
    description: {
        type: String,
        required: true
    }
});

// Creating the Post model based on the post schema
const Post = model("Post", postSchema);

// Exporting the Post model to be used by other modules
module.exports = Post;
