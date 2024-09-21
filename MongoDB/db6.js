// 这个文件用于学习不同schema 每个attribute的type和rules
// 建立不同的collection
const mongoose = require('mongoose');
const { type } = require('os');
const { title } = require('process');
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

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [10, "minimum length is 10"],
        maxlength: 255,
        // adjust each attribute's rules
    },
    age: {
        type: Number,
        required: true,
        min: [18, "minimum age is 18"],
        max: 120,
    },
    category: {
        type: String,
        // list of predefined values
        enum: {
            values: ['web', 'mobile', 'network'],
            message: 'Invalid category',
        }
    },
});

const Post = mongoose.model('Post', postSchema); // define a collection

// Post.create({title:"Hello",age: 16}).then(result => console.log(result)); // create a document
Post.create({title:"Helloworld111",age: 20, category: 'web'}).then(result => console.log(result)); // create a document