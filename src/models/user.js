import mongoose from "mongoose";
import { USER_ADMIN, USER_CONTRACTOR, USER_DISTRIBUTER } from "../utils/constant.js";

// Defining user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum:[USER_ADMIN,USER_DISTRIBUTER,USER_CONTRACTOR],
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  tc: {
    type: Boolean,
    required: false
  }
}, { timestamps: true });

// Model
const UserModel = mongoose.model("user", userSchema);

export default UserModel;