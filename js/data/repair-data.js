/**
 * HandyLand Generator Pro - Repair Data & Templates
 * Contains all predefined templates, quick presets, themes, brand chips, and shop info.
 */

export const REPAIR_DATA = {
    // Color Themes for the eBay Listing
    themes: {
        gold: {
            id: "gold",
            name: "👑 Dark Gold Luxury (Standard)",
            primary: "#d4af37",
            light: "#f3e5ab",
            dark: "#aa8022",
            gradient: "linear-gradient(135deg, #d4af37 0%, #aa8022 100%)",
            accentBg: "rgba(212, 175, 55, 0.08)",
            border: "rgba(212, 175, 55, 0.35)",
            glow: "0 0 25px rgba(212, 175, 55, 0.35)"
        },
        blue: {
            id: "blue",
            name: "💎 Sapphire Tech Blue",
            primary: "#388bfd",
            light: "#a5d6ff",
            dark: "#1f6feb",
            gradient: "linear-gradient(135deg, #388bfd 0%, #1f6feb 100%)",
            accentBg: "rgba(56, 139, 253, 0.08)",
            border: "rgba(56, 139, 253, 0.35)",
            glow: "0 0 25px rgba(56, 139, 253, 0.35)"
        },
        emerald: {
            id: "emerald",
            name: "🌿 Emerald Titanium Green",
            primary: "#2ea043",
            light: "#7ee787",
            dark: "#238636",
            gradient: "linear-gradient(135deg, #2ea043 0%, #238636 100%)",
            accentBg: "rgba(46, 160, 67, 0.08)",
            border: "rgba(46, 160, 67, 0.35)",
            glow: "0 0 25px rgba(46, 160, 67, 0.35)"
        }
    },

    // Brands with popular quick-selection chips
    brands: [
        { 
            id: "Apple", 
            name: "Apple", 
            defaultModel: "iPhone 14 Pro",
            quickModels: ["iPhone 15 Pro", "iPhone 14 Pro", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone SE"]
        },
        { 
            id: "Samsung", 
            name: "Samsung", 
            defaultModel: "Galaxy S23 Ultra",
            quickModels: ["Galaxy S24 Ultra", "Galaxy S23", "Galaxy S22", "Galaxy A54", "Galaxy Z Flip 5"]
        },
        { 
            id: "Xiaomi", 
            name: "Xiaomi", 
            defaultModel: "Redmi Note 12",
            quickModels: ["Xiaomi 13 Pro", "Redmi Note 12", "Poco F5", "Xiaomi 12T"]
        },
        { 
            id: "Google", 
            name: "Google (Pixel)", 
            defaultModel: "Pixel 8 Pro",
            quickModels: ["Pixel 8 Pro", "Pixel 7a", "Pixel 7 Pro", "Pixel 6"]
        },
        { 
            id: "Huawei", 
            name: "Huawei", 
            defaultModel: "P30 Pro",
            quickModels: ["P30 Pro", "Mate 40 Pro", "P40 Pro"]
        },
        { 
            id: "Sony", 
            name: "Sony Xperia", 
            defaultModel: "Xperia 1 V",
            quickModels: ["Xperia 1 V", "Xperia 5 IV", "Xperia 10 V"]
        },
        { 
            id: "OnePlus", 
            name: "OnePlus", 
            defaultModel: "OnePlus 11",
            quickModels: ["OnePlus 12", "OnePlus 11", "Nord 3"]
        }
    ],

    // Quick 1-Click Repair Presets
    quickPresets: [
        {
            id: "apple_display",
            name: "📱 iPhone Display Express",
            brand: "Apple",
            model: "iPhone 14 Pro",
            repairType: "display",
            price: "129,00 €",
            upsellType: "paid",
            upsellPrice: "+ 15,00 €"
        },
        {
            id: "apple_battery",
            name: "🔋 iPhone Akku 100%",
            brand: "Apple",
            model: "iPhone 13",
            repairType: "battery",
            price: "69,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €"
        },
        {
            id: "samsung_display",
            name: "📱 Samsung AMOLED Tausch",
            brand: "Samsung",
            model: "Galaxy S23",
            repairType: "display",
            price: "159,00 €",
            upsellType: "paid",
            upsellPrice: "+ 15,00 €"
        },
        {
            id: "samsung_battery",
            name: "🔋 Samsung Akku Service",
            brand: "Samsung",
            model: "Galaxy S22",
            repairType: "battery",
            price: "59,00 €",
            upsellType: "none",
            upsellPrice: "+ 15,00 €"
        },
        {
            id: "charging_port",
            name: "🔌 USB-C Ladebuchse",
            brand: "Apple",
            model: "iPhone 12",
            repairType: "charging",
            price: "59,00 €",
            upsellType: "none",
            upsellPrice: "+ 15,00 €"
        },
        {
            id: "backcover_glass",
            name: "🛠️ Backcover Glas Tausch",
            brand: "Apple",
            model: "iPhone 14",
            repairType: "backcover",
            price: "79,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €"
        }
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
            beforeAfter: {
                beforeTitle: "Akku schwach & entlädt rasant",
                beforeDesc: "Ständiges Nachladen, plötzliche Abschaltungen bei Kälte, verlangsamte Systemleistung.",
                afterTitle: "100% volle Akku-Power",
                afterDesc: "Volle Tageslaufzeit wie am ersten Tag, maximale Spitzenleistung und stabiler Betrieb."
            },
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
            beforeAfter: {
                beforeTitle: "Glas gesplittert & Streifen im Bild",
                beforeDesc: "Gefahr von Schnittverletzungen, Touch reagiert verzögert oder flackert, unschöne Risse.",
                afterTitle: "Kristallklares Premium-Display",
                afterDesc: "Brillante Farben, makelloses Glas, ultraschnelle Touch-Reaktion und saubere Passform."
            },
            review1: { text: '"Display sieht absolut aus wie neu! Farben sind brillant und der Touch reagiert sofort. Großartige Arbeit!"', author: "Dennis W." },
            review2: { text: '"Mein Display war komplett zersplittert. Nach 24 Stunden hatte ich das Tracking für den Rückversand. Perfekt!"', author: "Laura M." }
        },
        charging: {
            features: `<li>Neue Premium-Ladebuchse / USB-C / Lightning Flex-Connector</li>
<li>Gründliche Reinigung der internen Anschlüsse &amp; Lautsprechergitter</li>
<li>Umfassende Prüfung der Schnellladefunktion (Fast Charge / PD)</li>
<li>Überprüfung von Datenübertragung &amp; Mikrofonfunktion</li>`,
            apple_features: `<li>Neuer Lightning / USB-C Ladeanschluss Flex-Connector in Erstausrüsterqualität</li>
<li>Unterstützung für schnelles Apple PD Fast Charging</li>
<li>Prüfung von Mikrofon, Lautsprecherkontakt &amp; Antennenverbindung</li>
<li>Sichere Verpackung für den versicherten DHL Rückversand</li>`,
            faq1: "Keine Sorge, beim Wechsel der Ladebuchse gehen keinerlei persönliche Daten verloren.",
            transparency: "Oft ist die Ladebuchse nur stark verschmutzt. Wir prüfen das Bauteil zuerst gründlich. Sollte nur eine professionelle Reinigung nötig sein, informieren wir dich transparent!",
            beforeAfter: {
                beforeTitle: "Wackelkontakt & Ladeabbrüche",
                beforeDesc: "Kabel rutscht heraus, Handy lädt nur in bestimmten Winkeln oder gar nicht mehr.",
                afterTitle: "Fester Halt & Schnellladung",
                afterDesc: "Stecker rastet sicher ein, stabiler Ladestrom und einwandfreie Datenübertragung."
            },
            review1: { text: '"Das Handy lädt endlich wieder ohne nervigen Wackelkontakt. Sehr schneller Service und fairer Preis."', author: "Thomas R." },
            review2: { text: '"Schnell repariert, kompetente Rückmeldung per Nachricht. Preis-Leistung unschlagbar!"', author: "Kaan Y." }
        },
        backcover: {
            features: `<li>Neues Premium-Rückglas / Backcover in exakter Originalfarbe</li>
<li>Präzise, rückstandslose Entfernung des beschädigten Glases</li>
<li>Spezialverklebung unter kontrolliertem Druck für nahtlosen Sitz</li>
<li>Reinigung und Prüfung der rückseitigen Kameras und des Blitzes</li>`,
            apple_features: `<li>Neues Premium-Rückglas in Original Apple Farbvarianten</li>
<li>Schonende Laser- bzw. Kälteentfernung des gesplitterten Glases</li>
<li>Präzise Spezialverklebung für nahtlose Passform und originale Spaltmaße</li>
<li>Kamera-Linsen und MagSafe-Ladespule bleiben 100% geschützt</li>`,
            faq1: "Deine Daten bleiben vollständig unberührt. Die Reparatur betrifft ausschließlich das äußere Gehäuseglas.",
            transparency: "Aufgrund der werkseitigen Versiegelungsverfahren kann die herstellerseitige IP-Wasserdichtigkeit nach einem Gehäuseschaden und Tausch nicht mehr garantiert werden. Vor Spritzwasser ist das Gerät jedoch geschützt.",
            beforeAfter: {
                beforeTitle: "Rückseite zersplittert & scharfkantig",
                beforeDesc: "Scherben lösen sich, unansehnliche Risse und Verletzungsgefahr an den Händen.",
                afterTitle: "Makellose neue Rückseite",
                afterDesc: "Perfekte Spaltmaße, strahlender Original-Farbglanz und glattes Gefühl in der Hand."
            },
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
            beforeAfter: {
                beforeTitle: "Unscharfe Fotos & Rütteln",
                beforeDesc: "Kamera fokussiert nicht, schwarze Punkte/Flecken im Bild oder vibrierender Autofokus.",
                afterTitle: "Gestochen scharfe 4K-Aufnahmen",
                afterDesc: "Blitzschneller Fokus, glasklare Linsen und perfekte Farbwiedergabe in allen Modi."
            },
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
            beforeAfter: {
                beforeTitle: "Sehr leise & verzerrter Ton",
                beforeDesc: "Gesprächspartner kaum verständlich, krächzende Lautsprecher bei Musik und Klingelton.",
                afterTitle: "Glasklarer Stereo-Klang",
                afterDesc: "Volle Lautstärke, saubere Bässe und deutliche Stimmwiedergabe beim Telefonieren."
            },
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
            beforeAfter: {
                beforeTitle: "Gerät tot & Korrosion",
                beforeDesc: "Handy geht nicht mehr an, Kurzschlüsse und fortschreitende Bauteilzerstörung.",
                afterTitle: "Professionell gereinigt",
                afterDesc: "Oxidationsschichten entfernt, Platinenleiterbahnen gerettet und Daten gesichert."
            },
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
        phoneFormatted: "+49 176 25565255",
        whatsappNumber: "4917625565255",
        email: "handyland.hd1@gmail.com",
        vatId: "DE 406785869",
        ebayShopUrl: "https://www.ebay.de/sch/i.html?_ssn=handylandheidelberg",
        logoUrl: "https://i.imgur.com/WhNVees.png"
    },

    // Compatibility Matrix for Multi-Model Display
    compatibilityMatrix: {
        Apple: [
            { series: "iPhone 15 Serie", models: "iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max", status: "Kompatibel (100% Passgenau)" },
            { series: "iPhone 14 Serie", models: "iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max", status: "Kompatibel (100% Passgenau)" },
            { series: "iPhone 13 Serie", models: "iPhone 13 / 13 mini / 13 Pro / 13 Pro Max", status: "Kompatibel (100% Passgenau)" },
            { series: "iPhone 12 Serie", models: "iPhone 12 / 12 mini / 12 Pro / 12 Pro Max", status: "Kompatibel (100% Passgenau)" },
            { series: "iPhone 11 & SE", models: "iPhone 11 / 11 Pro / SE (2020/2022) / X / XS", status: "Kompatibel (100% Passgenau)" }
        ],
        Samsung: [
            { series: "Galaxy S24 Serie", models: "Galaxy S24 / S24 Plus / S24 Ultra", status: "Kompatibel (Dynamic AMOLED)" },
            { series: "Galaxy S23 Serie", models: "Galaxy S23 / S23 Plus / S23 Ultra / S23 FE", status: "Kompatibel (Dynamic AMOLED)" },
            { series: "Galaxy S22 Serie", models: "Galaxy S22 / S22 Plus / S22 Ultra", status: "Kompatibel (Dynamic AMOLED)" },
            { series: "Galaxy S21 Serie", models: "Galaxy S21 / S21 Plus / S21 Ultra / S21 FE", status: "Kompatibel (Dynamic AMOLED)" },
            { series: "Galaxy A Serie", models: "Galaxy A54 / A53 / A52 / A34 / A33 / A14", status: "Kompatibel (100% Passgenau)" }
        ],
        Xiaomi: [
            { series: "Xiaomi 13 & 14", models: "Xiaomi 14 / 14 Ultra / 13 / 13 Pro / 13T", status: "Kompatibel (AMOLED)" },
            { series: "Redmi Note Serie", models: "Redmi Note 13 / 12 / 11 Pro Plus", status: "Kompatibel (100% Passgenau)" }
        ],
        Google: [
            { series: "Pixel 8 & 9 Serie", models: "Pixel 9 / 9 Pro / 8 / 8 Pro / 8a", status: "Kompatibel (OLED Display)" },
            { series: "Pixel 7 & 6 Serie", models: "Pixel 7 / 7 Pro / 7a / 6 / 6 Pro / 6a", status: "Kompatibel (OLED Display)" }
        ]
    },

    // SEO Keyword Tags for eBay Listings
    seoKeywords: [
        "Express Reparatur",
        "Original Qualität",
        "12 Monate Garantie",
        "Rechnung inkl. 19% MwSt",
        "DHL Blitzversand",
        "Kein Datenverlust",
        "Meisterwerkstatt Heidelberg",
        "HandyLand Service",
        "Display Tausch",
        "Batteriewechsel 100%"
    ]
};
