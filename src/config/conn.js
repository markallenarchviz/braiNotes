const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect('mongodb+srv://markallenarchviz:ZDV6gl2TsqLL3EiT@cluster0.sovxgpu.mongodb.net/?retryWrites=true&w=majority')
    } catch (error) {
        
    }
}

module.exports = main;