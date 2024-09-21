// npm init
// npm i mongoose

const mongoose = require('mongoose');
const db = "mongodb+srv://Skyrim:Skyandhang1314@cluster0.l3r7w.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log('MongoDB is connected');
    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    }

};

connectDB();