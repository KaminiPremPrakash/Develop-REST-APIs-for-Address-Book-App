
module.exports = function (app) {
    var contactApp = require('../controllers/controller');

    // Contact Application Routes
    app.route('/contacts')
        .get(contactApp.listContacts)
        .post(contactApp.createContacts);


    app.route('/contacts/:contactId')
        .get(contactApp.readContact)
        .put(contactApp.updateContact)
};

/*const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    Contact.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.post('/', (req, res, next) => {
    /* const contact = {
         fname: req.body.fname,
         lname: req.body.lname,
         email:req.body.email,
         contactNo:req.body.contactNo
     };*   const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        contactNo: req.body.contactNo
    });
    contact
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'handling POST requests to /contacts',
                createdContact: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })

        });
});

router.get('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    Contact.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            }
            else {
                res.status(404).json({
                    message: 'No valid entry found'
                })
            }


        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });

});

router.patch('/:contactId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product',
    });
});

router.delete('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    Contact.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});
module.exports = router;
*/

