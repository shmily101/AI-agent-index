import User from "@/server/models/userModel"

export default defineEventHandler(async (event) => {
  try {
    console.log("123123123", event)
    const body = await readBody(event)
    console.log("Request body:", body)

    const { name, email, phonenumber, info } = body
    if (!name || !email || !phonenumber || !info) {
      throw new Error("required")
    }

    await User.create({ name, email, phonenumber, info })
    const user = await User.findOne({ email })
    return user
  } catch (error) {
    console.error("Error:", error)
    return createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: error instanceof Error ? error.message : String(error),
    })
  }
})
