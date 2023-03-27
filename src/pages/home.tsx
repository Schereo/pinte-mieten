import axios from 'axios';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { apiUrl } from '../lib/config';

export function Home() {
    const [recaptcha, setRecaptcha] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function onCaptchaChanged(value: any) {
        console.log('Captcha value:', value);
        setRecaptcha(true);
    }
    async function sendMail(event: any) {
        event.preventDefault();
        try {
            setErrorMessage('');
            if (!recaptcha) {
                setErrorMessage('Bitte bestätige, dass du kein Roboter bist');
                return;
            }
            const formData = new FormData(event.target);
            const object: any = {};
            formData.forEach((value, key) => (object[key] = value));
            console.log(object);
            const { name, email, date, house, room } = object;
            if (!name || !email || !date || !house || !room) {
                setErrorMessage('Bitte fülle alle Felder aus.');
                return;
            }
            const response = await axios.post(`${apiUrl}reserve`, object);
            console.log(response);
            setSuccessMessage('Deine Anfrage wurde erfolgreich versendet.');
        } catch (error: unknown) {
            console.error(error);
            setErrorMessage('Es ist ein Fehler aufgetreten.');
        }
    }
    return (
        <div>
            <h1>Pinte Vermietungen</h1>
            <p>Rahmenbedingungen für das Mieten</p>
            <ul style={{ margin: '20px' }}>
                <li>Vermietung ausschließlich an Bewohner des Wohnheims Schützenweg 42</li>
                <li>Die Schlüsselübergabe ist Samstags 12:00 Uhr bis Sonntags 12:00 Uhr (nach Absprache)</li>
                <li>
                    {' '}
                    Die Veranstaltung darf maximal bis 0:30 Uhr wegen des Lärms für die Anwohner gehen (einfach die
                    Party schon um 17 Uhr beginnen, dann passt 0:30 Uhr auch)
                </li>
                <li>Miete: 50€</li>
                <li>Kaution: 100€</li>
                <li>Putzoptionen:</li>
                <ul>
                    <li>
                        Ohne Putzen - kostenlos (die Pinte muss wieder aufgeräumt und gewischt werden, Zustand wie vor
                        der Vermietung)
                    </li>
                    <li>
                        Kleines Putzen - 30€, alle Möbel wieder so hinrücken wie vorgefunden & Gläser spülen, alles
                        andere machen wir
                    </li>
                    <li>Großes Putzen - 50€, nur die eigenen Sachen raus räumen, den Rest machen wir</li>
                </ul>
                <li>Die Kühlschränke werden von uns leer geräumt und können genutzt werden</li>
                <li>Lager & Raum hinter der Leinwand werden verschlossen und können nicht genutzt werden</li>
                <li>Bierzeltgarnitur, Sofas, Stühle, Kicker und Dartpfeile können auch genutzt werden</li>
            </ul>
            <iframe
                title="calendar"
                src="https://calendar.google.com/calendar/embed?src=39a1cc5eb39734fd980f23bc7b6e3ce8c62fd63ae89acb1c0cf6148ce694f7a8%40group.calendar.google.com&ctz=Europe%2FBerlin"
                style={{ border: '0', width: '100vw', height: '500px' }}
            ></iframe>
            <form onSubmit={sendMail} style={{ display: 'flex', flexDirection: 'column', gap: "10px" ,margin: "20px 5px" }}>
                <label>
                    Vor- und Nachname*:
                    <input type="text" name="name" />
                </label>
                <label>
                    E-Mail*:
                    <input type="text" name="email" />
                </label>
                <label>
                    WhatsApp Nummer:
                    <input type="text" name="phone" />
                </label>
                <label>
                    Datum*:
                    <input type="text" name="date" />
                </label>
                <label>
                    Haus*
                    <input type="text" name="house" />
                </label>
                <label>
                    Zimmernummer*
                    <input type="text" name="room" />
                </label>
                <label>
                    Sonstige Anmerkungen:
                    <input type="textarea" name="message" />
                </label>
                <ReCAPTCHA
                    style={{ display: 'block' }}
                    sitekey="6LfCYy8lAAAAAOWogJjPr0NYI1JQmqzAYJrfuLma"
                    onChange={onCaptchaChanged}
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
