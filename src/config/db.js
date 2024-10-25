import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config();

const mongo_uri =
  process.env.MONGO_URI ||
  "mongodb+srv://menace:GvjJ87crvbyS3ggP@portfolio.0bk1a.mongodb.net/?retryWrites=true&w=majority&appName=portfolio";
const connectDB = async()=>{
  try {
    await mongoose.connect(mongo_uri);
    console.log("connected to mongodb")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB