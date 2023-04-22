require('dotenv').config();
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('conectou');
    } catch (error) {
        console.log(error);
    }
}

module.exports = main;