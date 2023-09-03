export function Conditions() {
    return (
        <div className="bg-white shadow-md rounded md:px-8 px-4 pt-6 pb-8 md:m-4 m-1">
            <h2 className="text-2xl font-bold">Mietbedingungen</h2>
            <ul className="list-disc  m-3 md:m-10">
                <li>Vermietung ausschließlich an <b>Bewohner:innen</b> des Wohnheims Schützenweg 42</li>
                <li>Vermietung ausschließlich an Samstagen</li>
                <li>Die <b>Schlüsselübergabe</b> ist Samstags um 14:00 Uhr bis Sonntags um 12:00 Uhr (nach Absprache)</li>
                <li>
                    Die Veranstaltung darf maximal <b>bis 0:30 Uhr</b> wegen des Lärms für die Anwohner gehen (einfach die
                    Party schon um 17 Uhr beginnen, dann passt 0:30 Uhr auch)
                </li>
                <li>Miete: 50€</li>
                <li>Kaution: 100€</li>
                <li>Putzoptionen:</li>
                <ul className="list-decimal ml-9">
                    <li>
                        <b>Ohne Putzen</b> - kostenlos (die Pinte muss wieder aufgeräumt und gewischt werden, Zustand wie vor
                        der Vermietung)
                    </li>
                    <li>
                        <b>Kleines Putzen</b> - 50€, alle Möbel wieder so hinrücken wie vorgefunden & Gläser spülen, alles
                        andere machen wir
                    </li>
                    <li><b>Großes Putzen</b> - 90€, nur die eigenen Sachen raus räumen (z.B. Essen und Getränke), den Rest machen wir</li>
                </ul>
                <li>Die <b>Kühlschränke</b> werden von uns leer geräumt und können genutzt werden</li>
                <li>Lager & Raum hinter der Leinwand werden verschlossen und können nicht genutzt werden</li>
                <li>Bierzeltgarnitur, Sofas, Stühle, Kicker und Dartpfeile können auch genutzt werden</li>
            </ul>
        </div>
    );
}
