export interface RentalRequest {
    name: string;
    email: string;
    phone: string;
    date: string;
    cleaning: Cleaning;
    room: string;
    house: string;
    message: string;
}

export type Cleaning = "without" | "small" | "large";
