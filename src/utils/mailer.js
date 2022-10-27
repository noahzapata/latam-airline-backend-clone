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

const checkout = (user, booking) => {
  let date = booking.tripGoFlight.date;
  const weekData = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];
  const monthData = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'marzo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octumbre',
    'noviembre',
    'diciembre',
  ];
  const year = date.getFullYear();
  const month = monthData[date.getMonth() + 1];
  const day = weekData[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const { departure, arrival } = booking;

  return {
    from: `"${process.env.SMTP_USERNAME}"<${process.env.SMTP_USER}`,
    to: user.email,
    subject: 'Muchas gracias por tu compra',
    html: `
      
<body style=" box-sizing: border-box; background-color: rgb(238, 238, 238)">
<div style="width: 35rem; border-radius: 10px;  margin: 1rem auto; background-color: rgb(255, 255, 255)"">
  <div style=" display: flex; justify-content: center ; margin: 1rem 1rem">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="150pt" height="30"
        viewBox="0 0 4180.000000 1260.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1260.000000) scale(0.100000,-0.100000)" fill="darkblue" stroke="none">
            <path d="M2538 12368 c-10 -18 -13 -122 -13 -458 0 -383 2 -443 18 -500 56
-208 195 -360 432 -471 44 -20 301 -116 570 -212 270 -97 850 -304 1290 -462
440 -157 1022 -365 1293 -462 270 -97 492 -179 492 -182 0 -3 -264 -101 -586
-217 l-586 -212 -312 115 c-772 285 -2163 791 -3176 1155 -844 303 -905 326
-1005 369 -116 49 -187 58 -211 25 -22 -31 -20 -828 2 -929 54 -243 211 -410
494 -529 47 -19 597 -221 1224 -449 l1138 -413 136 47 c74 26 137 46 138 44 2
-2 -328 -124 -734 -272 -966 -351 -1431 -522 -1627 -597 -88 -34 -252 -94
-364 -135 -186 -66 -211 -73 -275 -72 l-71 1 57 9 c54 8 336 106 693 241 94
36 326 119 517 184 192 65 348 121 348 124 0 3 -24 13 -52 23 -386 134 -971
348 -1280 468 -231 90 -299 92 -341 9 -16 -32 -17 -75 -15 -555 l3 -520 24
-52 c46 -102 22 -91 846 -393 l750 -274 97 -4 96 -4 869 316 c477 173 1142
414 1477 536 l610 220 540 -216 c298 -118 544 -219 549 -223 4 -4 -462 -177
-1035 -384 -574 -208 -1497 -543 -2053 -745 l-1010 -368 -3 -672 c-1 -370 0
-672 3 -672 4 0 1006 362 2228 804 1222 442 2467 893 2767 1001 300 109 564
206 586 217 97 45 161 129 188 249 24 104 27 238 18 734 -10 531 -10 532 -85
586 -22 16 -45 29 -51 29 -6 0 -29 13 -52 28 -22 15 -196 86 -385 156 -189 71
-348 132 -352 136 -4 4 151 64 345 135 194 70 367 134 383 142 63 32 114 84
145 146 59 122 63 153 67 694 3 336 1 516 -7 565 -11 75 -44 148 -70 156 -12
4 -13 2 -2 -9 6 -7 12 -29 12 -48 0 -55 -81 -127 -222 -195 -102 -50 -507
-201 -515 -192 -2 2 18 11 44 21 27 10 95 40 151 67 57 27 150 67 207 89 201
78 328 177 311 244 -9 35 -46 69 -98 88 -24 9 -221 79 -438 156 -217 77 -951
338 -1630 581 -679 243 -1302 466 -1385 495 -82 29 -566 202 -1074 384 -771
276 -933 331 -977 331 -45 0 -55 -4 -66 -22z m4932 -2447 c-8 -5 -26 -11 -40
-15 -21 -5 -20 -3 5 9 32 15 60 20 35 6z m-3300 -1191 c-8 -5 -19 -10 -25 -10
-5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m-80 -30 c-8 -5 -19 -10 -25
-10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m-100 -34 c0 -6 -93 -37
-97 -32 -2 2 15 11 39 19 47 17 58 19 58 13z" />
            <path d="M11080 8150 l0 -2180 1835 0 1835 0 250 500 250 500 -1465 0 -1465 0
0 1680 0 1680 -620 0 -620 0 0 -2180z" />
            <path d="M17434 9518 c-223 -447 -421 -840 -439 -873 -18 -33 -328 -648 -689
-1367 l-657 -1308 661 0 660 0 197 395 198 395 1217 0 1218 0 197 -395 198
-395 657 0 c362 0 658 2 658 5 0 3 -42 88 -94 188 -51 100 -195 382 -318 627
-1718 3397 -1686 3335 -1750 3406 -59 64 -145 109 -238 124 -39 6 -307 10
-667 10 l-603 0 -406 -812z m1575 -993 l390 -860 -801 -3 c-441 -1 -803 -1
-804 1 -2 2 180 393 404 870 223 476 410 863 413 859 4 -4 183 -394 398 -867z" />
            <path d="M21330 9896 l0 -435 53 -5 c59 -7 1987 -126 2030 -126 l27 0 0 -1680
0 -1680 610 0 610 0 0 1680 0 1680 28 0 c42 0 1970 119 2030 126 l52 5 0 435
0 434 -2720 0 -2720 0 0 -434z" />
            <path d="M27633 8157 c-601 -1196 -1093 -2177 -1093 -2180 0 -4 296 -6 658 -5
l657 3 198 393 197 392 1218 -2 1217 -3 209 -392 209 -393 659 0 c362 0 658 2
658 5 0 3 -42 88 -94 188 -51 100 -195 382 -318 627 -1718 3397 -1686 3335
-1750 3406 -59 64 -145 109 -238 124 -39 6 -311 10 -680 10 l-615 0 -1092
-2173z m2276 329 c205 -450 370 -820 368 -822 -2 -2 -364 -3 -804 -2 l-799 3
343 730 c188 402 372 793 409 870 l66 140 22 -50 c13 -27 190 -418 395 -869z" />
            <path d="M34085 10288 c-14 -40 -1125 -4318 -1125 -4332 0 -15 49 -16 590 -16
l589 0 10 38 c5 20 199 773 431 1672 231 899 424 1644 427 1655 4 13 145 -395
394 -1144 240 -720 398 -1179 415 -1204 52 -79 132 -136 239 -170 69 -22 75
-22 729 -22 l659 0 461 1278 c310 860 463 1272 468 1260 4 -10 197 -754 428
-1653 232 -899 426 -1652 431 -1672 l10 -38 579 0 c319 0 580 2 580 3 0 2
-189 748 -419 1658 -231 910 -458 1805 -504 1990 -47 185 -99 365 -115 400
-79 173 -215 267 -432 299 -51 7 -286 10 -729 8 l-654 -3 -431 -1267 c-238
-697 -434 -1270 -437 -1273 -3 -3 -160 482 -348 1078 -275 867 -352 1100 -390
1171 -78 151 -193 247 -337 281 -82 20 -1512 22 -1519 3z" />
            <path d="M3935 4265 c-748 -267 -1379 -492 -1402 -501 l-43 -16 0 -654 c0
-563 2 -654 14 -654 19 0 2662 942 2707 965 111 57 175 132 212 250 21 68 22
83 22 535 0 438 -1 467 -19 500 -26 48 -44 59 -91 59 -27 0 -485 -158 -1400
-484z" />
            <path d="M39225 3080 c-394 -42 -706 -198 -856 -428 -101 -154 -132 -354 -82
-531 44 -160 165 -298 338 -388 177 -92 397 -153 670 -188 345 -43 652 -152
776 -275 71 -71 93 -129 88 -238 -11 -226 -194 -371 -549 -434 -123 -21 -484
-16 -659 11 -263 40 -532 123 -645 199 l-45 31 -50 -152 c-28 -84 -51 -155
-51 -158 0 -10 170 -85 279 -123 262 -91 467 -126 777 -133 246 -6 368 3 533
39 411 88 671 303 741 613 18 79 16 241 -4 310 -94 325 -450 514 -1137 604
-342 45 -556 123 -662 240 -63 70 -79 115 -78 225 0 166 132 304 362 379 140
46 256 61 469 61 291 -1 513 -36 763 -121 64 -21 111 -33 116 -27 10 11 115
324 110 328 -11 7 -228 69 -319 90 -195 46 -370 67 -595 71 -115 2 -246 0
-290 -5z" />
            <path d="M18420 1690 l0 -1370 175 0 175 0 0 486 c0 459 1 486 18 479 114 -44
305 -95 457 -122 110 -18 523 -25 646 -10 l65 8 269 -423 c148 -233 274 -429
280 -436 8 -9 60 -12 218 -10 l206 3 -299 482 c-165 265 -300 485 -300 488 0
2 30 20 68 39 250 126 425 355 484 631 24 115 26 320 4 424 -80 381 -390 633
-848 691 -50 6 -383 10 -850 10 l-768 0 0 -1370z m1652 1007 c237 -58 394
-178 457 -350 28 -75 38 -215 22 -302 -38 -208 -211 -380 -466 -464 -247 -81
-651 -96 -955 -35 -100 20 -232 60 -302 91 l-58 26 0 529 0 529 618 -4 c529
-3 627 -6 684 -20z" />
            <path d="M11902 2408 c-171 -348 -478 -967 -680 -1376 l-368 -742 178 0 178 0
185 370 185 370 820 0 820 0 185 -370 185 -370 180 0 c99 0 180 4 180 8 0 5
-293 600 -651 1323 -428 865 -661 1326 -682 1348 -52 54 -85 63 -252 68 l-150
4 -313 -633z m829 -386 l326 -667 -329 -3 c-180 -1 -476 -1 -657 0 l-328 3
326 667 c179 367 328 667 331 667 3 0 152 -300 331 -667z" />
            <path d="M15890 1665 l0 -1375 170 0 170 0 0 1375 0 1375 -170 0 -170 0 0
-1375z" />
            <path d="M22860 1665 l0 -1375 990 0 990 0 0 160 0 160 -820 0 -820 0 0 1215
0 1215 -170 0 -170 0 0 -1375z" />
            <path d="M26740 1665 l0 -1375 175 0 175 0 0 1375 0 1375 -175 0 -175 0 0
-1375z" />
            <path d="M29310 1666 l0 -1376 170 0 170 0 2 1134 3 1134 960 -1035 c528 -569
989 -1066 1024 -1106 35 -40 73 -77 85 -84 14 -8 73 -12 174 -13 l152 0 0
1360 0 1360 -170 0 -170 0 -2 -1121 -3 -1121 -1013 1093 c-558 602 -1027 1105
-1044 1119 -30 24 -38 25 -185 28 l-153 4 0 -1376z" />
            <path d="M34220 1665 l0 -1375 1070 0 1070 0 0 160 0 160 -900 0 -900 0 0 475
0 475 795 0 796 0 -3 158 -3 157 -792 3 -793 2 0 420 0 420 885 0 885 0 0 160
0 160 -1055 0 -1055 0 0 -1375z" />
            <path d="M3620 1970 c-20 -6 -1020 -381 -1082 -405 -17 -7 -18 -48 -18 -667 0
-625 1 -660 18 -653 9 3 238 88 507 187 270 99 512 191 538 205 107 54 175
141 207 270 18 67 20 111 20 350 0 150 -4 273 -9 273 -4 0 -10 75 -13 168 -4
140 -8 175 -26 214 -28 65 -69 81 -142 58z" />
        </g>
    </svg>
</div>
<div style="display: flex; justify-content: center">
    
</div>
<div style="text-align: center">
    <span style="font-style: italic; color: rgb(17, 17, 111); font-weight: bold;">Revisa tu tarjeta de
        embarque</span>
</div>
<div style="margin: 1rem 2rem">
    <span>Hola ${user.firstName.toUpperCase()},</span>
</div>
<div style="margin: 1rem 2rem">
    <p style="font-size: 13px">
        Está todo listo para tu vuelo a ${arrival} (${
      booking._id
    }), del ${day}, ${date.getDay()}
        de ${month} de ${year} a las ${hours}:${minutes}.
    </p>
</div>
<div style=" margin: 2rem 2rem;margin-bottom: 2rem;border-radius: 10px; background-color: rgb(235, 239, 246);">
    <div
        style=" border-top-right-radius: 10px; border-top-left-radius: 10px; padding: 1rem 0rem; text-align: center; background-color: rgb(225, 228, 242);">
        <span style="font-style: italic; font-size: 14px;"><strong style=" color: rgb(17, 17, 111);">${departure}
            </strong>a<strong style=" color: rgb(17, 17, 111);"> ${arrival} </strong> • ${day.slice(
      0,
      3
    )}, ${date.getDay()} ${month.slice(0, 3)}. ${hours}:${minutes}</span>
    </div>
    <div style="padding-bottom: 0.5rem;">
        <div
            style="border: 2px solid rgb(229, 233, 237); display: flex; flex-direction: column;  margin: 1rem 1rem;padding-bottom: 1rem;  border-radius: 5px; background-color: rgb(255, 255, 255);">
            <div style=" text-align: center; margin: 1rem 1rem">
                <span style="margin:1rem 0;font-size: 14px; font-style: italic; color: darkblue; ">
                    Tarjeta de embarque disponible
                </span>
            </div>
            <div style=" margin: 1rem 2rem; display: flex; justify-content: space-between">
                <div style="font-size:13px; color: rgb(24, 21, 114);">
                    ${user.firstName} ${user.lastName}
                </div>
                <div>
                    <a style=" font-size:13px; color: rgb(57, 114, 213);" href="">
                        Ver tarjeta
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>
<div style="padding-bottom:1rem">
    <div
        style=" background-color: rgb(235, 239, 246); border-radius: 10px; margin: 1rem 2rem; display:flex ; flex-direction: column;">
        <div style="display:flex; align-items: center;">
            <div style="margin: 0 1rem;">
                <svg fill="purple" width="40px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M172,112a4.0002,4.0002,0,0,1-4,4H88a4,4,0,0,1,0-8h80A4.0002,4.0002,0,0,1,172,112Zm-4,28H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Zm84-36v24a28.03146,28.03146,0,0,1-28,28h-7.8623c-5.86329,14.57617-18.332,27.39062-36.9087,37.71094-20.53125,11.40576-42.5415,16.5708-48.79834,17.88232a11.77467,11.77467,0,0,1-4.86181-.00049c-6.25635-1.311-28.2666-6.47607-48.79785-17.88183C58.19434,183.39062,45.72559,170.57617,39.8623,156H32A28.03146,28.03146,0,0,1,4,128V104A28.03146,28.03146,0,0,1,32,76h4.11572a12.037,12.037,0,0,1,7.78369-9.67383l80-29.09131a12.02162,12.02162,0,0,1,8.20166,0l79.99952,29.09131A12.037,12.037,0,0,1,219.88428,76H224A28.03146,28.03146,0,0,1,252,104ZM37.35059,148A53.63331,53.63331,0,0,1,36,136V84H32a20.02229,20.02229,0,0,0-20,20v24a20.02229,20.02229,0,0,0,20,20ZM212,136V77.60352a4.01247,4.01247,0,0,0-2.63281-3.75928l-80-29.09082a4.00151,4.00151,0,0,0-2.73389,0L46.63281,73.84424A4.01247,4.01247,0,0,0,44,77.60352V136c0,20.14111,12.333,37.20508,36.65625,50.71777,19.54883,10.85987,40.5752,15.79248,46.5542,17.04541a3.82145,3.82145,0,0,0,1.57861.00049c5.97949-1.25342,27.00586-6.186,46.55469-17.0459C199.667,173.20508,212,156.14111,212,136Zm32-32a20.02229,20.02229,0,0,0-20-20h-4v52a53.63331,53.63331,0,0,1-1.35059,12H224a20.02229,20.02229,0,0,0,20-20Z" />
                </svg>
            </div>
            <div style="margin:1rem 1rem;">
                <div>
                    <span style="font-size:15px; color: rgb(17, 17, 111); font-weight: bold;">Revisa las
                        restricciones
                        por COVID-19
                    </span>
                </div>
                <div>
                    <p style="font-size:12px"> Asegurate de cumplir con las condiciones de ingreso o salida por
                        covid-19
                        en cada parte de tu
                        viaje
                    </p>
                </div>
                <button style="
              width: 8rem;
              height: 1.5rem;
              border-radius: 6px;
              border: none;
              font-size: 13px;
              background: #e8114b;
              color: white;
            ">
                    Ver restricciones
                </button>
            </div>
        </div>
    </div>
</div>

</div>
</body>`,
    text: `Muchas gracias por tu compra ${user.firstName} ${user.lastName}`,
  };
};

module.exports = { transporter, verify, welcome, checkout };
