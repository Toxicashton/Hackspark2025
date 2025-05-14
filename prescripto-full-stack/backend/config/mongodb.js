import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    console.log("Mongo URI:", process.env.MONGODB_URI); // Debug
    await mongoose.connect(process.env.MONGODB_URI)

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.