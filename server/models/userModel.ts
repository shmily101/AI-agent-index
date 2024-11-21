import mongoose from "mongoose"

// 建立 Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    phonenumber: {
      type: "string",
      required: true,
    },
    info: {
      type: "string",
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

// 建立 Model
const User = mongoose.model("User", userSchema)

export default User
