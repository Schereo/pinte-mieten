import * as functions from "firebase-functions";
import {RentalRequest} from "./models/rentalRequest";
import {sendMail} from "./services/mailer";
import * as cors from "cors";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const reserve = functions.https.onRequest((request, response) => {
  cors({origin: true})(request, response, () => {
    try {
      const rentalRequest = request.body as RentalRequest;
      const {name, email, date, house} = rentalRequest;
      if (!name || !email || !date || !house) {
        response.status(400).send("Bad Request");
        return;
      }
      sendMail(rentalRequest);
      response.status(200).send("OK");
    } catch (error: unknown) {
      response.status(500).send("Error");
    }
  });
});
