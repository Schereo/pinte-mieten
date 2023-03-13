import { createTransport } from 'nodemailer';
import { RentalRequest } from '../models/rentalRequest';

function getTransporter() {
    return createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'pinte42ol@gmail.com',
            pass: process.env.MAIL_PASSWORD
        }
    });
}

export const sendMail = (rentalRequest: RentalRequest) => {
    const transporter = getTransporter();
    const { name, date} = rentalRequest;
    const mailOptions = {
        from: 'pinte42ol@gmail.com',
        to: 'tim.sigl@hotmail.de',
        subject: 'Mietanfrage Pinte 42',
        text: `${name} hat eine Mietanfrage für den ${date} gestellt.}`
    };
    return transporter.sendMail(mailOptions);
};
