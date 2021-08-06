const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        
        const con = await mongoose.connect('mongodb://localhost:27017/students_api', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex:true
        })

        console.log(`MongoDB connected`);
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB