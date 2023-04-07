import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface RentalFormProps {
    sendMail: (data: any) => Promise<void>
}

export function RentalForm({sendMail}: RentalFormProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [recaptcha, setRecaptcha] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event: any) {
        event.preventDefault();
        try {
            setErrorMessage('');
            setSuccessMessage('');
            if (!recaptcha) {
                setErrorMessage('Bitte bestätige, dass du kein Roboter bist');
                return;
            }
            setLoading(true);
            const formData = new FormData(event.target);
            const formValues: any = {};
            formData.forEach((value, key) => (formValues[key] = value));
            console.log(formValues);
            const { name, email, date, house, room, cleaning, dateCheck } = formValues;
            if (!name || !email || !date || !house || !room || !cleaning) {
                setErrorMessage('Bitte fülle alle Felder aus.');
                return;
            }
            if (!dateCheck) {
                setErrorMessage('Bitte bestätige, dass du dein Wunschdatum überprüft hast.');
                return;
            }

            await sendMail(formValues);
            formRef?.current?.reset();
            setSuccessMessage('Deine Anfrage wurde erfolgreich versendet.');
        } catch (error: unknown) {
            console.error(error);
            setErrorMessage('Es ist ein Fehler aufgetreten.');
        } finally {
            setLoading(false);
        }
    }


    return (
        <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded md:px-8 px-4 pt-6 pb-8 md:m-4 m-1"
            >
                <div>
                    <label htmlFor="name">Vor- und Nachname*:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <label>
                    E-Mail*:
                    <input
                        type="text"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>
                <label>
                    WhatsApp Nummer:
                    <input
                        type="text"
                        name="phone"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>
                <label>
                    Datum*:
                    <input
                        type="date"
                        name="date"
                        className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-600"
                    />
                </label>
                <label>
                    Haus*
                    <select name='house' defaultValue="DEFAULT" className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-600">
                        <option value="DEFAULT" disabled hidden>
                            Wähle dein Haus
                        </option>
                        <option value="1">Haus 1</option>
                        <option value="2"> Haus 2</option>
                        <option value="3"> Haus 3</option>
                    </select>
                </label>
                <label>
                    Zimmernummer*
                    <input
                        type="number"
                        name="room"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>
                <label>
                    Putzoption*
                    <select name="cleaning" defaultValue="DEFAULT" className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-600">
                        <option value="DEFAULT" disabled hidden>
                            Wähle die Putzoption
                        </option>
                        <option value="without">Ohne Putzen - kostenlos</option>
                        <option value="30">Kleines Putzen - 30€</option>
                        <option value="50">Großen Putzen - 50€</option>
                    </select>
                </label>
                <label>
                    Sonstige Anmerkungen:
                    <input
                        type="textarea"
                        name="message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>
                <div className="flex items-center mt-5">
                    <input
                        name='dateCheck'
                        type="checkbox"
                        id="date-check"
                        className="w-5 h-5 text-blue-500 border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <label htmlFor="date-check" className="ml-2 text-gray-600">
                        Ich habe überprüft, dass mein Wunschdatum noch frei ist.
                    </label>
                </div>
                <ReCAPTCHA
                    className="mt-5"
                    sitekey="6LfCYy8lAAAAAOWogJjPr0NYI1JQmqzAYJrfuLma"
                    onChange={() => setRecaptcha(true)}
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <button
                    className="bg-pinte hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded mt-5"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Versende Anfrage...' : 'Abschicken'}
                </button>
            </form>
    )
}