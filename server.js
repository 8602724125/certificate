const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
    var filePath = "/assests/certificate.pdf";
    fs.readFile(__dirname + filePath , function (err, data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})