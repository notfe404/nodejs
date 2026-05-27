const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        console.log(mongoURI);
        const conn = await mongoose.connect(mongoURI);
    } catch (error) {
        // console.error( error.message);
        throw error;
        // process.exit(1);
    }
};

module.exports = connectDB;