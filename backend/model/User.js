const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  status: {
    type: Boolean,
    default: 1,
  },
  token: {
    type: String,
    default: "",
  },
});
module.exports = User = mongoose.model("users", UserSchema);
