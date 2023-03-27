import {createTransport} from "nodemailer";
import {RentalRequest} from "../models/rentalRequest";

/**
 * Gets the transporter for sending mails
 * @return {Transporter}
 */
function getTransporter() {
  return createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "pinte42ol@gmail.com",
      pass: process.env.MAIL_PASSWORD,
    },
  });
}

export const sendMail = (rentalRequest: RentalRequest) => {
  console.log(rentalRequest);
  const transporter = getTransporter();
  const {name, date, email, house, message, phone} = rentalRequest;
  const mailOptions = {
    from: email,
    to: "tim.sigl@hotmail.de",
    subject: `${name} Mietanfrage Pinte 42`,
    text: `${name} möchte die Pinte am ${date} mieten.
                Name: ${name},
                Email: ${email},
                Telefon: ${phone || "Keine Angabe"},
                Haus: ${house},
                Nachricht: ${message || "Keine Angabe"}
                `,
  };
  return transporter.sendMail(mailOptions);
};
