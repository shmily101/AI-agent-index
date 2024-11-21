import User from "@/server/models/userModel"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const { name, email, phonenumber, info } = body
    if (!name || !email || !phonenumber || !info) {
      return {
        code: 500,
        msg: '请将信息填写完整！'
      }
    }

    await User.create({ name, email, phonenumber, info })
    return {
      code: 200,
      msg: '已成功提交！我们将尽快联系您。'
    }
  } catch (error) {
    console.log("error", error)
    return {
      code: 500,
      msg: '出了一点问题，请稍后重试'
    }
  }
})
