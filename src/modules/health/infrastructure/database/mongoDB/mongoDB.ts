import mongoose from "mongoose";

export async function connecToMongoDB(uri: string) {
    try {
        console.log('FLAG MONGO URI ', uri)
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}