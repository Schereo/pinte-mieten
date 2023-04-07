import * as functions from "firebase-functions";
import {RentalRequest} from "./models/rentalRequest";
import {sendConfirmation, sendRentalRequest} from "./services/mailer";
import * as cors from "cors";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const reserve = functions.https.onRequest((request, response) => {
  cors()(request, response, async () => {
    try {
      const rentalRequest = request.body as RentalRequest;
      const {name, email, date, house} = rentalRequest;
      if (!name || !email || !date || !house) {
        response.status(400).send();
        return;
      }
      const emailResponse = await Promise.allSettled([
        sendRentalRequest(rentalRequest),
        sendConfirmation(rentalRequest),
      ]);
      if (emailResponse.some((result) => result.status === "rejected")) {
        response.status(500).send();
        console.error(emailResponse);
        return;
      }

      response.status(200).send();
    } catch (error: unknown) {
      console.error(error);
      response.status(500).send();
    }
  });
});
