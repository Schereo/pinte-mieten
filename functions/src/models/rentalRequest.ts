export interface RentalRequest {
    name: string;
    email: string;
    phone: string;
    rentalDate: string;
    requestedDate: string;
    cleaning: Cleaning;
    "g-recaptcha-response": string | undefined;
    room: string;
    house: string;
    message: string;
    state: 'OPEN' | 'ACCEPTED' | 'DECLINED';
}

export type Cleaning = "without" | "small" | "large";
