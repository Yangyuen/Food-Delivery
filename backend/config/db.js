import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://yangyuen:Passw0rd@cluster0.vx04mhu.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}