const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://markallenarchviz:ZDV6gl2TsqLL3EiT@cluster0.sovxgpu.mongodb.net/?retryWrites=true&w=majority')
        console.log('conectou');
    } catch (error) {
        console.log(error);
    }
}

module.exports = main;