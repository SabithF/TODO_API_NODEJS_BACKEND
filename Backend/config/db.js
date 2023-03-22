const mongoose = require('mongoose');

const URI = "mongodb+srv://admin:admin123@cluster0.8u6fr2n.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    try {
        const con = await mongoose.connect(URI,{} )
        console.log('Mongo DB Connected', con.connection.host)
        
    } catch (error) {
        
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB;