const mongoose = require("mongoose");

const url = process.env.URL;

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. ${err}`);
  })



// const Schema = mongoose.Schema;
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  message: { type: String, required: true },
})


module.exports = mongoose.model('contact', contactSchema);