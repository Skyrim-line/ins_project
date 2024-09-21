// 这个文件用于更新数据库，添加新的数据或者更改已有的数据
const mongoose = require('mongoose');
const db = "mongodb+srv://Skyrim:Skyandhang1314@cluster0.l3r7w.mongodb.net/course";

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

} 

connectDB(); // 连接数据库

// create a user collection rules then create a user collection
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String],
    isPublished: Boolean,
});

// create a user collection
const User = mongoose.model('User', userSchema);

// updateOne, only update one document if there are multiple documents that meet the criteria only the first one will be updated
User.updateOne({ name: 'Skyrim' }, { name: 'Zarina' }).then(result => console.log(result));
// Runing code above will change the name of Skyrim to Zarina

// updateMany, update all documents that meet the criteria
User.updateMany({},{hobbies:["Dota2"]}).then(result => console.log(result));