const contactService = require('../services/services');

//function to get list of contacts
exports.listContacts = function (req, res) {
    const resolve = (contacts) => {
        res.status(200);
        res.json(contacts);
    };
    contactService.search({})
        .then(resolve)
        .catch(renderErrorResponse(res));
};

//function ton create contacts
exports.createContacts = function (req, res) {
    const newcontact = Object.assign({}, req.body);
    const resolve = (contact) => {
        res.status(200);
        res.json(contact);
    };
    contactService.save(newcontact)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

//function to read contact
exports.readContact = function (req, res) {
    const resolve = (contact) => {
        res.status(200);
        res.json(contact);
    };
    contactService.get(req.params.contactId)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

//function to edit and update contacts
exports.updateContact = function (req, res) {
    const contact = Object.assign({}, req.body);
    const resolve = (contact) => {
        res.status(200);
        res.json(contact);
    };
    contact._id = req.params.contactId;
    contactService.update(contact)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};