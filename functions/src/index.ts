import * as functions from 'firebase-functions';
import { sendMail } from './services/mailer';

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const reserve = functions.https.onRequest((request, response) => {
    try {
        const rentalRequest = request.body;
        sendMail(rentalRequest);
        response.status(200).send('OK')
    } catch (error: unknown) {
        response.status(500).send('Error')
    }
});
