import mongoose from "mongoose"

export const connectDB = async () => {
    const uri = process.env.MONGO_URI || "mongodb+srv://henilp1508:dLw8t5sOCKf3wH4A@cluster0.45coh.mongodb.net/E-learning"
    mongoose.set('strictQuery', true);
    const { connection } = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected with ${connection.host} `)
}