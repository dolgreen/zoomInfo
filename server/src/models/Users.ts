import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, required: true },
  age: { type: Number, require: true },
  company: { type: String, required: true },
});

const User = mongoose.model("Users", userSchema);

export default User;
