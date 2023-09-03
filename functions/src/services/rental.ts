import { RentalRequest } from "../models/rentalRequest";
import { db } from "./firebase";

export async function addReservation(request: RentalRequest) {
    request.state = "OPEN";
    request.requestedDate = new Date().toISOString();
    delete request["g-recaptcha-response"];
    const reservation = await db.collection("reservations").add(request);
    return reservation.id;
}