import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: String,
  age: Number,
  status: {
    type: String,
    enum: ["PENDING", "ADOPTED", "AVAILABLE"],
    default: "AVAILABLE"
  }
}, { timestamps: true })

export default mongoose.model('Pet', petSchema)
