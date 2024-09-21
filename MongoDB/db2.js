// 如果数据库不存在，mongodb会自动创建数据库但是不会自动创建collection

const mongoose = require('mongoose');
// 创建course的数据库
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

};

connectDB();
// create collection
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean,
});

// create collection with rules
const Course = mongoose.model('Course', courseSchema);  //courses

//create document
// 创建一个collection其实是创建构造函数的实例对象
const course = new Course({
    name: 'Node.js ',
    author: 'Jack',
    isPublished: true,
});

//insert document
course.save();  // save()是一个promise