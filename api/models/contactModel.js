
//importing mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//defining the type of input that the user needs to enter
var contactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Kindly enter the first name'
    },
    lastName: {
        type: String,
        required: 'Kindly enter the last name'
    },
    email: {
        type: String,
        required: 'Kindly enter the email'
    },
    contactNum: {
        type: Number,
        required: 'Kindly enter the Contact Number'
    },

});

module.exports = mongoose.model('Contacts', contactSchema);