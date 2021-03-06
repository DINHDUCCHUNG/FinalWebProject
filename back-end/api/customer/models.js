const mongoose = require('mongoose');
// email
// fullName
// address
// phone
// order: production, bill
const CustomerSchema = new mongoose.Schema({
    email: String,
    fullName: String,
    address: String,
    phone: String,
    order:{
        production: String,
        bill: Number,
    },
    createAt:{
        type: Date,
        default: new Date(),
    }
});

const CustomerModel = mongoose.model("Customer",CustomerSchema);

module.exports = CustomerModel;
