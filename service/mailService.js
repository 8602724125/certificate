const nodemailer = require('nodemailer')

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bmaihlele@gmail.com',
    pass: 'kwjiouepbzkghozp'
  },
  tls: {
    rejectUnauthorized: false
  }
})

const sendMailUser = async function (user) {

  const mailOptions = {
    from: 'bmaihlele@gmail.com',
    to: user.email,
    subject: 'Greetings from Bhupendra',
    html: `<div class="container">
      <p>Hello ${user.name},</p>
        <div class="m-5">
          <p>Thank you for visiting my portfolio. If you have any inquiries, opportunities, or just want to connect, I'd love to hear from you! Feel free to reach out through any of the following methods:</p>
        </div>
        <div class="m-5">
          <p>
            Thank You,<br>
            Bhupendra Maithele
          </p>
        </div>
      </div>`
  }
  return await transporter.sendMail(mailOptions);
}

module.exports.sendMailUser = sendMailUser;

