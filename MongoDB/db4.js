// 这个文件用于学习删除数据库内的指定数据
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
//查找要删除的ID的文件并删除，返回删除那条, using findOneAndDelete() will only delete one document.
// User.findOneAndDelete({ name: 'Skyrim' }).then(result => console.log(result));

//删除多条文档，如果只放{}，会删除所有文档,加入删除的条件则会删除符合条件的文档
User.deleteMany({ name: 'CY-19' }).then(result => console.log(result));