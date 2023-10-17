const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  // freindRequests: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  // sentFriendRequests: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

module.exports = mongoose.model("User", userSchema);
