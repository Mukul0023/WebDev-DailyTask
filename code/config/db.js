const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/tour&travel');
        console.log("MongoDB connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
// connectDB();

module.exports = connectDB;