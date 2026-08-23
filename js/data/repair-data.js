/**
 * HandyLand Generator Pro - Repair Data & Templates
 * Contains all predefined templates for brands, repair types, default texts, and SEO configurations.
 */

export const REPAIR_DATA = {
    brands: [
        { id: "Apple", name: "Apple", defaultModel: "iPhone 13 Pro" },
        { id: "Samsung", name: "Samsung", defaultModel: "Galaxy S23" },
        { id: "Xiaomi", name: "Xiaomi", defaultModel: "Redmi Note 12" },
        { id: "Google", name: "Google (Pixel)", defaultModel: "Pixel 7 Pro" },
        { id: "Huawei", name: "Huawei", defaultModel: "P30 Pro" },
        { id: "Sony", name: "Sony Xperia", defaultModel: "Xperia 1 IV" },
        { id: "OnePlus", name: "OnePlus", defaultModel: "OnePlus 11" }
    ],

    repairTypes: [
        { id: "battery", name: "Akku / Batterie 🔋", icon: "🔋", defaultPrice: "69,00 €", seoKeyword: "Akku Batterie" },
        { id: "display", name: "Display / Bildschirm 📱", icon: "📱", defaultPrice: "119,00 €", seoKeyword: "Display Bildschirm OLED" },
        { id: "charging", name: "Ladebuchse / USB-Port 🔌", icon: "🔌", defaultPrice: "59,00 €", seoKeyword: "Ladebuchse USB Port" },
        { id: "backcover", name: "Backcover / Rückglas 🛠️", icon: "🛠️", defaultPrice: "79,00 €", seoKeyword: "Backcover Rückseite Glas" },
        { id: "camera", name: "Kamera / Linse 📸", icon: "📸", defaultPrice: "89,00 €", seoKeyword: "Kamera Modul Linse" },
        { id: "speaker", name: "Hörmuschel / Lautsprecher 🔊", icon: "🔊", defaultPrice: "49,00 €", seoKeyword: "Lautsprecher Hörmuschel Audio" },
        { id: "water", name: "Wasserschaden-Diagnose 💧", icon: "💧", defaultPrice: "39,00 €", seoKeyword: "Wasserschaden Reinigung Diagnose" }
    ],

    templates: {
        battery: {
            features: `<li>Neuer Premium-Ersatzakku (100% Kapazität & volle Zyklenleistung)</li>
<li>Fachgerechter Ausbau des alten Akkus & umweltgerechtes Recycling</li>
<li>Professionelle Verklebung mit Original-Spezialklebestreifen</li>
<li>Prüfung von Ladeelektronik, Stromaufnahme & Grundfunktionen</li>
<li>Sichere, antistatische Verpackung für den schnellen Rückversand</li>`,
            faq1: "Nein! Bei einem regulären Akkutausch bleiben all deine persönlichen Daten, Bilder, Chats und Apps vollständig erhalten. Wir führen keinen Werksreset durch.",
            transparency: "Je nach Modell und Hersteller kann nach dem Akkutausch in den Systemeinstellungen ein Hinweis zur Batterie angezeigt werden. Dies ist technisch bedingt völlig normal und beeinträchtigt weder Akkulaufzeit noch Ladeleistung.",
            apple_transparency: "Bei Apple iPhones (ab Modell Xs/Xr) wird nach dem Tausch herstellerbedingt die Meldung 'Wichtige Batterienachricht' angezeigt und die prozentuale Maximalkapazität in den Einstellungen ausgeblendet. Die tatsächliche Leistung und Qualität unseres Premium-Akkus ist davon zu 100% unberührt.",
            review1: { text: '"Sehr professionell und blitzschnell repariert. Mein iPhone-Akku hält wieder wie am ersten Tag. Klare Empfehlung!"', author: "Michael T." },
            review2: { text: '"Handy war nach nur 2 Tagen repariert zurück. Extrem transparente Abwicklung und top Kundenservice!"', author: "Sarah K." }
        },
        display: {
            features: `<li>Neues Premium-Display (Kräftige Farbwiedergabe & präzise Touch-Reaktion)</li>
<li>Fachgerechter Ausbau & rückstandsfreie Rahmenreinigung</li>
<li>Saubere Übernahme aller Sensoren, Hörmuschel & Frontkamera</li>
<li>Prüfung auf Pixelfehler, Helligkeit und Multitouch-Funktion</li>
<li>Sichere, stoßfeste Verpackung für den Rückversand</li>`,
            apple_features: `<li>Neues Premium-Display (OLED / Retina LCD je nach Modell)</li>
<li>Übernahme der True-Tone Funktion (sofern technisch auslesbar)</li>
<li>Face-ID & Frontsensorik bleiben zu 100% voll funktionsfähig</li>
<li>Präziser Einbau mit neuem Staub- & Spritzwasserschutz-Kleberand</li>
<li>Sichere Verpackung für den versicherten Rückversand</li>`,
            samsung_features: `<li>Neues Premium-Display (Dynamic AMOLED / Super AMOLED Qualität)</li>
<li>In-Display Fingerabdrucksensor wird sorgfältig kalibriert & getestet</li>
<li>Brillante Farben, 120Hz/60Hz Unterstützung und hohe Leuchtkraft</li>
<li>Fachgerechter Einbau durch erfahrene Techniker</li>
<li>Sichere Verpackung für den versicherten Rückversand</li>`,
            faq1: "Nein, deine Daten (Fotos, WhatsApp-Verläufe, Apps) bleiben beim Displaywechsel zu 100% auf dem Gerät erhalten. Wir führen keinen Reset durch.",
            transparency: "Bitte beachte: Bei starken Sturzschäden mit verzogenem Gehäuserahmen richten wir den Rahmen bestmöglich aus, um minimale Spaltmaße zu gewährleisten.",
            apple_transparency: "Bei Apple iPhones (ab Modell 11) kann nach dem Tausch eine 'Wichtige Displaynachricht' (Hinweis auf unbekanntes Bauteil) in den iOS-Einstellungen erscheinen. Dies ist eine herstellerspezifische Meldung und beeinträchtigt die erstklassige Funktion in keiner Weise.",
            samsung_transparency: "Wir verwenden ausschließlich geprüfte Premium-Displays, die höchste Farbtreue bieten und perfekt mit dem Fingerabdrucksensor deines Samsung Galaxy harmonieren.",
            review1: { text: '"Display sieht absolut aus wie neu! Farben sind brillant und der Touch reagiert sofort. Großartige Arbeit!"', author: "Dennis W." },
            review2: { text: '"Mein Display war komplett zersplittert. Nach 24 Stunden hatte ich das Tracking für den Rückversand. Perfekt!"', author: "Laura M." }
        },
        charging: {
            features: `<li>Neue Premium-Ladebuchse / USB-C / Lightning Flex-Connector</li>
<li>Gründliche Reinigung der internen Anschlüsse & Lautsprechergitter</li>
<li>Umfassende Prüfung der Schnellladefunktion (Fast Charge / PD)</li>
<li>Überprüfung von Datenübertragung & Mikrofonfunktion</li>`,
            faq1: "Keine Sorge, beim Wechsel der Ladebuchse gehen keinerlei persönliche Daten verloren.",
            transparency: "Oft ist die Ladebuchse nur stark verschmutzt. Wir prüfen das Bauteil zuerst gründlich. Sollte nur eine professionelle Reinigung nötig sein, informieren wir dich transparent!",
            review1: { text: '"Das Handy lädt endlich wieder ohne nervigen Wackelkontakt. Sehr schneller Service und fairer Preis."', author: "Thomas R." },
            review2: { text: '"Schnell repariert, kompetente Rückmeldung per Nachricht. Preis-Leistung unschlagbar!"', author: "Kaan Y." }
        },
        backcover: {
            features: `<li>Neues Premium-Rückglas / Backcover in exakter Originalfarbe</li>
<li>Präzise, rückstandslose Entfernung des beschädigten Glases</li>
<li>Spezialverklebung unter kontrolliertem Druck für nahtlosen Sitz</li>
<li>Reinigung und Prüfung der rückseitigen Kameras und des Blitzes</li>`,
            faq1: "Deine Daten bleiben vollständig unberührt. Die Reparatur betrifft ausschließlich das äußere Gehäuseglas.",
            transparency: "Aufgrund der werkseitigen Versiegelungsverfahren kann die herstellerseitige IP-Wasserdichtigkeit nach einem Gehäuseschaden und Tausch nicht mehr garantiert werden. Vor Spritzwasser ist das Gerät jedoch geschützt.",
            review1: { text: '"Das Glas auf der Rückseite war völlig zersplittert. Sieht jetzt wieder aus wie frisch aus der Packung!"', author: "Elena S." },
            review2: { text: '"Hervorragende Arbeit. Man sieht absolut keinen Unterschied. Vielen Dank an das HandyLand-Team!"', author: "Markus H." }
        },
        camera: {
            features: `<li>Neues Original-Qualität Kameramodul (Hauptkamera)</li>
<li>Autofokus-, Bildstabilisator- & Zoom-Test nach dem Einbau</li>
<li>Professionelle Reinigung der inneren Kameraglas-Linsen</li>
<li>Funktionsprüfung aller Foto- und Videomodi</li>`,
            faq1: "Deine Fotos, Videos und persönlichen Daten bleiben beim Kameratausch zu 100% erhalten.",
            transparency: "Hinweis: Sollte das äußere Kameraglas auf der Rückseite ebenfalls Risse aufweisen, muss dieses separat getauscht werden, um das neue Modul vor Staub und Feuchtigkeit zu schützen.",
            apple_transparency: "Bei neueren iPhone-Modellen (ab Modell 12) kann nach dem Kameratausch ein Systemhinweis in den iOS-Einstellungen bzgl. des getauschten Kamerabauteils erscheinen. Die Kamerafunktion arbeitet einwandfrei.",
            review1: { text: '"Kamera fokussiert wieder blitzschnell und ohne Flecken im Bild. Endlich wieder scharfe Fotos!"', author: "Julia B." },
            review2: { text: '"Schnelle Reparatur und sehr freundliche Kommunikation. 5 Sterne verdient!"', author: "Ali K." }
        },
        speaker: {
            features: `<li>Neues Premium-Hörmuschel- oder Lautsprechermodul</li>
<li>Entfernung von Staub- und Schmutzablagerungen im Akustikkanal</li>
<li>Klang-, Lautstärke- und Frequenztest bei maximalem Pegel</li>
<li>Prüfung der Freisprech- und Mikrofonfunktion</li>`,
            faq1: "Deine Daten bleiben während der Audioreparatur vollkommen unverändert und sicher auf dem Gerät.",
            transparency: "Häufig sind nur die feinen Schutzgitter der Hörmuschel verstopft. Wir testen das Modul vorab und tauschen nur, was wirklich nötig ist.",
            review1: { text: '"Gesprächspartner waren kaum noch zu hören. Jetzt ist der Klang wieder glasklar und laut!"', author: "Christian V." },
            review2: { text: '"Schnell, unkompliziert und zuverlässig. Mein Lautsprecher funktioniert wieder wie neu."', author: "Nadine B." }
        },
        water: {
            features: `<li>Vollständige Demontage und mikroskopische Schadensanalyse</li>
<li>Professionelle Ultraschallbad-Reinigung der Hauptplatine</li>
<li>Befreiung von Korrosion, Kurzschlüssen und Rückständen</li>
<li>Detaillierter Kostenvoranschlag für eventuell benötigte Bauteile</li>`,
            faq1: "Bei Wasserschäden hat die Rettung deiner persönlichen Daten oberste Priorität. Wir setzen alles daran, deine Daten unberührt zu sichern.",
            transparency: "Bei Wasserschäden handelt es sich um eine fundierte Reinigungs- und Diagnoseleistung. Eine Erfolgsgarantie auf dauerhaften Weiterbetrieb kann bei Flüssigkeitsschäden physikalisch nicht gegeben werden.",
            review1: { text: '"Handy war im Pool gelandet. HandyLand konnte all meine unbezahlbaren Urlaubsfotos retten!"', author: "Daniela F." },
            review2: { text: '"Sehr ehrliche Beratung und transparente Fehlerdiagnose. Top Fachbetrieb!"', author: "Stefan W." }
        }
    },

    shopInfo: {
        name: "HandyLand Heidelberg",
        owner: "Alsafi Nawfal",
        street: "Hertzstr. 1",
        zipCity: "69126 Heidelberg",
        country: "Deutschland",
        phone: "+49 176 25565255",
        email: "handyland.hd1@gmail.com",
        vatId: "DE 406785869",
        ebayShopUrl: "https://www.ebay.de/sch/i.html?_ssn=handylandheidelberg",
        logoUrl: "https://i.imgur.com/WhNVees.png"
    }
};
