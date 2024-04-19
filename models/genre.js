const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }] // Reference to books associated with this genre
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
