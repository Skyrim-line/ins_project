//这个文件用于学习如何查询find,select相关数据

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

// create a user document
const user = new User({
    name: 'Skyrim',
    age: 25,
    email: '111@qq.com',
    password: '111',
    hobbies: [],
    isPublished: true,
});

// insert a user document
user.save();

// 查询所有文档
// User.find().then((result) => console.log(result));  

// 查询特定文档,没有符合要求的返回[]
// User.find({_id:"66eec4544d2b2875550dfde1"}).then(result => console.log(result));

// findOne()返回第一个符合要求的文档，没有符合要求的返回null
// User.findOne({name: 'Skyrim'}).then(result => console.log(result));

// 查询特定文档的某个属性
// User.find({age:{$gt: 20,$lt:30 }}).then(result => console.log(result));

// find $in包含某个属性来查找文档
// User.find({ hobbies: { $in: ['swimming'] } }).then(result => console.log(result));

// 选择需要查询的手段，查询name和age
// User.find().select({name:1,age:1}).then(result => console.log(result));

// 降序排列
// User.find().sort("-age").then(result => console.log(result));

// skip limit 在分页的时候会用到
// User.find().skip(1).limit(1).then(result => console.log(result));
// skip(1)跳过第一个文档，limit(1)返回一个文档