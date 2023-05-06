import mongoose from "mongoose"

const { Schema } = mongoose

const Furniture = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
export default mongoose.model("furniture", Furniture)
