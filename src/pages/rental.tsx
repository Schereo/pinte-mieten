import axios from 'axios';
import { Conditions } from '../components/conditions';
import { apiUrl } from '../lib/config';
import { RentalForm } from '../components/rental-form';

export function Rental() {
    
    async function sendMail(data: any) {
        await axios.post(`${apiUrl}reserve`, data);
    }

    return (
        <div className="flex flex-col">
            <div className="bg-white shadow-md rounded md:px-8 px-4 pt-6 pb-8 md:m-4 m-1">
                <h2 className="text-2xl font-bold">How to Mieten</h2>
                <ol className="text-lg list-decimal  m-5 md:m-10">
                    <li>Lies die Mietbedingungen 🔖</li>
                    <li>Überprüfe im Kalender, ob dein Wunschdatum noch frei ist 🔎</li>
                    <li>Fülle das Formular aus und sende es ab ✍️</li>
                </ol>
            </div>
            <Conditions />
            <div className="bg-white shadow-md rounded md:px-8 px-4 pt-6 pb-8 md:m-4 m-1">
                <h2 className="text-2xl font-bold mb-5">Überprüfe dein Wunschdatum</h2>
                <iframe
                    className="w-full h-96"
                    title="calendar"
                    src="https://calendar.google.com/calendar/embed?src=39a1cc5eb39734fd980f23bc7b6e3ce8c62fd63ae89acb1c0cf6148ce694f7a8%40group.calendar.google.com&ctz=Europe%2FBerlin"
                ></iframe>
            </div>
            <RentalForm sendMail={sendMail} />
        </div>
    );
}
