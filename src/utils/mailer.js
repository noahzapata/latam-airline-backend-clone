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
    <body style="background-color: rgb(241, 241, 241);">
  <div style="  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50%;
  margin: auto;
  border-radius: 10px;" >
    <div style="width: 40rem;">
      <div style="  max-width: 100%;
        display: flex;
        justify-content: center;
        margin: 1rem 1rem;">
        <img
        style="  border-radius: 10px;
        width: 15%;"
          src="https://ci5.googleusercontent.com/proxy/k98vd0Wy2kqg87_PyCY-6sTZLlqSsUjjFT2vtYkGjvCa2zGq5044dWpWGMMU5kMt2Kjl-PHJajILPQuNAnwUu6KPh694gAcJNPbnaNskJkZb=s0-d-e1-ft#https://s.latamairlines.com/images/emails/logo_latam_white.png"
          alt="latam"
        />
      </div>
      <div class="image">
        <img
        style="  border-radius: 10px;
        width: 100%;
        max-width: 100%;"
        src="https://res.cloudinary.com/dvthwktqe/image/upload/v1666617960/latam-airlines-clone/unnamed_ghmfia.jpg"
          alt="latam"
        />
      </div>
      <div style="display: flex;
      margin: auto;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      text-align: center;
      width: 20rem;">
        <div class="container-info-header">
          <h1 style="  font-size: 2rem;
          color: rgb(22, 22, 126);" >Hola, ${user.firstName}</h1>
        </div>
        <div class="container-info-header-info">
          <span style=" font-size: 1.8rem;
          color: rgb(22, 22, 126);" >Ya estás a bordo</span>
        </div>

        <div class="container-info-p">
          <p style="font-size: 1rem;
          color: rgb(106, 106, 106);">Queremos que tus sueños lleguen a destino</p>
        </div>
        <div class="container-info-p2">
          <p style=" font-size: 1rem;
          color: rgb(106, 106, 106);">Vuelve a latam para seguir descubriendo nuevos viajes</p>
        </div>
        <div class="btn">
          <button style="  margin-top: 2rem;
          width: 15rem;
          height: 3rem;
          border-radius: 6px;
          border: none;
          font-size: 1rem;
          background: #e8114b;
          color: white;">Volver a latam</button>
        </div>
      </div>
      <hr style="  margin-top: 2rem;
      height: 0.01px;
      width: 90%;
      color: rgb(244, 244, 244);" />
      <div style="  display: flex;
      flex-direction: column;
      width: 100%;">
        <div style="  font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        color: rgb(106, 106, 106);">
          <p>¿Te ayudó esta información?</p>
          <div style=" margin: 1.5rem auto;">
            <button style=" border: 1px solid rgb(228, 228, 228);  background-color: white;
            border: 1px solid grey;
            width: 4rem;
            height: 2.5rem;">
              <img
              style="  width: 20px;"
                src="https://ci3.googleusercontent.com/proxy/vQjp44Cs8cUXzA2FgWUMeC7C2A6yD6EfFjDRVoIuOkAVSvToJ2qVWrCaJBymIP-lT07DnU5dZUK28Hj6p0fXpNRTxT-CFwGyJWVtudLBzQ=s0-d-e1-ft#https://s.latamairlines.com/images/emails/check_positive.png"
                alt="yes"
              />
              Si
            </button>
            <button>
              <img
              style="  width: 20px;"
                src="https://ci3.googleusercontent.com/proxy/LTqgTYX66eLtvywB9gtnZJKHvy7srjRHKKZ51-j8-1Zwg9wqFajw7JmACRGBKlJ9rZk-eZT0UoPThzZepw66PIBojXWk0srpveuhgWHLPg=s0-d-e1-ft#https://s.latamairlines.com/images/emails/check_negative.png"
                alt="no"
              />
              No
            </button>
          </div>
        </div>
        <p style="  margin: 2rem auto;
        font-size: 0.8rem;
        margin: 0 auto;
        text-align: center;
        color: rgb(106, 106, 106);
        padding-bottom: 1rem;">
          <strong>Por seguridad</strong>,siempre nos comunicaremos por
          nuestros canales oficiales
        </p>
        <div style="  margin: 0 auto;
        display: flex;">
          <div class="social-media-icons">
            <img
            style="  width: 55px;"
              src="https://ci5.googleusercontent.com/proxy/pzVgxSQYGuqrGZCgtUqnlkqQXvraPn-wKXz-STgmqjR1Yps923ftyPQMd49EW_S9muLl5vJRiYaQk9W4Akc8qwNGCCZmvNBLgQ=s0-d-e1-ft#https://s.latamairlines.com/images/emails/facebook.png"
              alt="facebook"
            />
          </div>
          <div class="social-media-icons">
            <img
            style="  width: 55px;"
              src="https://ci3.googleusercontent.com/proxy/fj5cfVQIkBDM6P3z7W8OyzjWga9VqPKb45ywsKBEL7gG9qFjAhXk5YHtCe-l6Wlh-sXBc_nUXC4Jd1uaiCeHtu9rng9CCnRl=s0-d-e1-ft#https://s.latamairlines.com/images/emails/twitter.png"
              alt="twitter"
            />
          </div>
          <div class="social-media-icons">
            <img
             style="  width: 55px;"
              src="https://ci3.googleusercontent.com/proxy/0Dc_giMOvKvyqvYL1iiFt0231fzDH32DxNZ8riuLwi5HsEWHB_AXbIbWd84oGfE7-Qwt-5Y1C0luUPhJa7lZbp7eKTOgJVBMilE=s0-d-e1-ft#https://s.latamairlines.com/images/emails/Instagram.png"
              alt="instagram"
            />
          </div>
          <div class="social-media-icons">
            <img
             style="  width: 55px;"
              src="https://ci6.googleusercontent.com/proxy/LeVc96pycoVvgtUn9fhDLB5Y7cDwf9h4OLsK9nPbkmZM0I3zkcUiariA0uBeH-ZpQyfUWZOw-uZN_19kGBR4dM47al2EyE95=s0-d-e1-ft#https://s.latamairlines.com/images/emails/Youtube.png"
              alt="youtube"
            />
          </div>
        </div>
        <div style="margin-top: 1rem;
        text-align: center;
        font-size: 0.8rem;
        color: rgb(106, 106, 106);">
          <p>Puedes revisar los canales según tu país</p>
        </div>
      </div>
    </div>
  </div>
</body>
  `,
    text: `Bienvenido ${user.firstName} ${user.lastName}`,
  };
};

// eslint-disable-next-line no-unused-vars
const checkout = (user, booking) => {
  return {
    from: `"${process.env.SMTP_USERNAME}"<${process.env.SMTP_USER}`,
    to: user.email,
    subject: 'Muchas gracias por tu compra',
    html: `
      <body style="background-color: rgb(241, 241, 241);">
        <div>
          <h1>Muchas gracias por tu compra ${user.firstName} ${user.lastName}</h1>
        </div>
      </body>`,
    text: `Muchas gracias por tu compra ${user.firstName} ${user.lastName}`,
  };
};

module.exports = { transporter, verify, welcome, checkout };
