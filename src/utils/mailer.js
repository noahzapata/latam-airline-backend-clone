const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const verify = async (transporter) => {
  const connection = await transporter.verify();
  if (connection) {
    console.log('Server is ready to take our messages');
  }
};

const welcome = (user) => {
  return {
    from: `"${process.env.SMTP_USERNAME}"<${process.env.SMTP_USER}`,
    to: user.email,
    subject: 'Bienvenido a Latam',
    html: `
      <div>
        <h1>Bienvenido ${user.firstname} ${user.lastname}</h1>
      </div>
    `,
    text: `Bienvenido ${user.firstname} ${user.lastname}`,
  };
};

module.exports = { transporter, verify, welcome };
