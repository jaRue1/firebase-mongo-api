import mongoose from "mongoose"
import { uri } from "../secrets.js"

export default async function dbConnect() {
  const connection = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.on("connected", () => {
    console.log("connected to mongo")
  })

  return connection
}
