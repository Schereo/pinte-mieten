import * as functions from "firebase-functions";
import {RentalRequest} from "./models/rentalRequest";
import {sendConfirmation, sendRentalRequest} from "./services/mailer";
import * as cors from "cors";
import { addReservation } from "./services/rental";

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
      console.log(rentalRequest);
      const {name, email, rentalDate, house} = rentalRequest;
      if (!name || !email || !rentalDate || !house) {
        response.status(400).send();
        return;
      }
      const emailResponse = await Promise.allSettled([
        addReservation(rentalRequest),
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
