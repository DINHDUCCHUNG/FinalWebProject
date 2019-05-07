const mongoose = require('mongoose');
// image
// name
// prize
const ProductionSchema = new mongoose.Schema({
    image: String,
    title: String,
    category: String,
    description: String,
    prize: Number,
    isPublic: Boolean,
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
    },
    createAt:{
        type: Date,
        default: new Date(),
    }
});

const ProductionModel = mongoose.model('Production',ProductionSchema);

module.exports = ProductionModel;