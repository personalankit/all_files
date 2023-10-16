import 'dotenv/config'
import mongoose from "mongoose";

export const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error);
    }
}