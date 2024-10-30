import mongoose from "mongoose"

export default async () => {
  const mongoUri = process.env.MONGODB_URI
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in the environment variables")
  }

  try {
    await mongoose.connect(mongoUri)
    console.log("DB connection established")
  } catch (err) {
    console.error("DB connection failed", err)
  }
}
