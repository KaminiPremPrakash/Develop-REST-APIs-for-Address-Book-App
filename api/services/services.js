
//using all the mongoose methods fin. findById, save
var mongoose = require('mongoose'),
    Contact = mongoose.model('Contacts');

exports.search = function (params) {
    const promise = Contact.find(params).exec()
    return promise;
};


exports.save = function (contact) {
    const newcontact = new Contact(contact);
    const promise = newcontact.save();
    return promise;
};


exports.get = function (contactId) {
    const promise = Contact.findById(contactId).exec();
    return promise
};


exports.update = function (contact) {
    const promise = Contact.findOneAndUpdate({ _id: contact._id }, contact).exec();
    return promise;
};
