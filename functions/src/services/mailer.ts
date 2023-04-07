import {createTransport} from "nodemailer";
import {RentalRequest} from "../models/rentalRequest";
import {MailTemplate, generateEmail} from "./mail-template";
import {parseRequestText} from "../helper/textParser";

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

/**
 * Sends the rental request to the pinten team
 * @param rentalRequest
 * @return Promise
 */
export function sendRentalRequest(rentalRequest: RentalRequest) {
  const transporter = getTransporter();
  const {name, date} = rentalRequest;
  const mail: MailTemplate = {
    title: "Mietanfrage Pinte 42",
    heading: "Pinte Mieten",
    receiver: "Pinten Team",
    text: `folgende Mietanfrage ist eingegangen:
      ${parseRequestText(rentalRequest)}`,
  };
  const mailOptions = {
    from: "pinte42ol@gmail.com",
    to: "tim.sigl@hotmail.de",
    subject: `Mietanfrage Pinte 42 von ${name}`,
    text: `${name} möchte die Pinte am ${date} mieten. <br> ${parseRequestText(rentalRequest)}`,
    html: generateEmail(mail),
  };
  return transporter.sendMail(mailOptions);
}

/**
 * Sends a confirmation mail to the user
 * @param rentalRequest
 * @return Promise
 */
export function sendConfirmation(rentalRequest: RentalRequest) {
  const transporter = getTransporter();
  const {name, email} = rentalRequest;
  const mail: MailTemplate = {
    title: "Mietanfrage Pinte 42",
    heading: "Pinte Mieten",
    receiver: name,
    text: `wir haben deine Mietanfrage erhalten und werden uns schnellstmöglich bei dir melden.
        Mietanfrage:
        ${parseRequestText(rentalRequest)}`,
  };
  const mailOptions = {
    from: "pinte42ol@gmail.com",
    to: email,
    subject: "Mietanfrage Pinte 42",
    text: `Hallo ${name},
                wir haben deine Mietanfrage erhalten und werden uns schnellstmöglich bei dir melden.
                Mietanfrage:
                ${parseRequestText(rentalRequest)}
                Dein Pinten Team`,
    html: generateEmail(mail),
  };
  return transporter.sendMail(mailOptions);
}
