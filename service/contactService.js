const { validationResult } = require("express-validator");
const mailService = require("../service/mailService");
const Contact = require("../models/contactModel");

function alphanumericString(str) {
    return /[`\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
}

const contactService = {
    getContact : async (req, res) => {
        let createContact = req.body;
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            res.send({success: false, error: errors});
        } else if (alphanumericString(createContact.name)) {
            res.send({success: false,  message: "Only characters are allowed in Name field" });
        } else {
            try {
                const newAdmin = new Contact({
                    name: createContact.name,
                    email: createContact.email,
                    companyName: createContact.companyName,
                    mobileNumber: createContact.mobileNumber,
                    message: createContact.message,
        
                });
                console.log("newAdmin Data", newAdmin);
                let savedContact = newAdmin.save();
                if (savedContact) {
                    res.send({success: true, message: "Contact information send successfully !!"})
                }
            } catch (e) {
                res.send({success: false, error: e});
            }
        }
        
    }
}

module.exports = contactService;