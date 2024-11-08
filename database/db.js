import mongoose from "mongoose";

const connectDb =async() =>{
    try {
        await mongoose.connect(process.env.Db_url,{
            dbName: "Chatbot",
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;