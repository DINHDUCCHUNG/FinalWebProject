const mongoose = require('mongoose');
//email
//password
//Fullname
//creatAt

const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
    fullName: String,
    createAt: {
        type: Date,
        default: new Date(),
    }
});

const AdminModel = mongoose.model('Admin',adminSchema);
module.exports = AdminModel;