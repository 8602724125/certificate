const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const ContactService = require('../service/contactService');

router.post('/contact', 
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),
    body("email")
    .trim()
    .notEmpty()
    .withMessage("Email address is required")
    .isEmail()
    .withMessage("Enter a valid email addres"),
    body("companyName")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),
    body("mobileNumber")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),
    body("message")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"), ContactService.getContact)

module.exports = router;