const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (value.length < 8) {
          throw new Error("password should be at least 8 characters long");
        }
      },
    },
  },
  { timestamps: true }
);

// Add a virtual property to the userSchema which is not stored in the database and links all the rankings which the user has created
// Add the virtul property here.

userSchema.pre("save", async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("User", userSchema);
