const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.warn('Warning: MONGO_URI is not defined in .env');
        }

        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://amankoli1206_db_user:Amankoli@12062006@cluster0escrow.cvwvhac.mongodb.net/?appName=Cluster0Escrow');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
