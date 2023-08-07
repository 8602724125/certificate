const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', function (req, res) {
    res.send("Hello World!!");
})

app.get('/:id', function (req, res) {
    var filePath = "/assests/certificate.pdf";
    const id = req.params.id
    if (id === 'bd1fTj') {
        fs.readFile(__dirname + filePath , function (err, data) {
            if (err) {
                res.send({success: false, error: err})
            }
            res.contentType("application/pdf");
            res.send(data);
        });
    } else {
        res.status(400).json({error: "NOT_FOUND_ERR"})
    }
});

app.get('/portfolio/resume', function (req, res) {
    var filePath = "/assests/Bhupendra-Maithele.pdf";
    fs.readFile(__dirname + filePath , function (err, data) {
        if (err) {
            res.send({success: false, error: err})
        }
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.use(cors({
    origin: ['https://bhupendra-m.github.io/'],
    methods: ['GET', 'POST' ],
    credentials: true
}))

app.use('/', require('./routes/contact'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})