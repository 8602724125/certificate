const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000

app.get('/:id', function (req, res) {
    var filePath = "/assests/certificate.pdf";
    const id = req.params.id
    if (id === 'bd1fTj') {
        fs.readFile(__dirname + filePath , function (err, data){
            res.contentType("application/pdf");
            res.send(data);
        });
    } else {
        res.status(400).json({error: "NOT_FOUND_ERR"})
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})