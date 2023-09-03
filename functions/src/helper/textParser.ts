import {Cleaning, RentalRequest} from "../models/rentalRequest";

/**
 * Helper function to parse the cleaning option into a human readable string
 * @param cleaning
 * @return string
 */
function parseCleaning(cleaning: Cleaning) {
  switch (cleaning) {
  case "without":
    return "ohne Putzen";
  case "small":
    return "50€ Putzen";
  case "large":
    return "90€ Putzen";
  }
}

/**
 * Helper function to parse the rental request into a human readable string
 * @param rentalRequest
 * @returns
 */
export function parseRequestText(rentalRequest: RentalRequest) {
  const {name, rentalDate, email, house, room, message, phone} = rentalRequest;
  return `<br>
              <br>
                  Name: ${name},  <br>
                  Email: ${email}, <br>
                  Datum: ${rentalDate}, <br>
                  Putzen: ${parseCleaning(rentalRequest.cleaning)}, <br>
                  Telefon: ${phone || "Keine Angabe"}, <br>
                  Haus: ${house}, <br>
                  Zimmer: ${room}, <br>
                  Nachricht: ${message || "Keine Angabe"} <br>
                  `;
}
