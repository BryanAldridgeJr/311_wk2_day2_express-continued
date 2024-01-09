const contacts = require('../data/contacts');

const contactsController = {
    list: (req , res) => {
        res.json(contacts);
    },
    show: (req, res) => {
        const contacts = contacts.find(contact => contact._id == req.params.id);
        res.status(200).json(contact);
    },
    create: (req, res) => {
        const newContact = {
            ...req.body,
            _id: contacts.length + 1
        };
    
        contacts.push(newContact);
        res.json(newContact);
    },
}

module.exports = contactsController; 