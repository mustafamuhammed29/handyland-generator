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

    // Free Promotional Gifts (Fixed items for display, battery, backcover, charging)
    freeGifts: [
        { 
            id: "cleaning", 
            title: "Professionelle Außenreinigung des Geräts", 
            desc: "Hygienische Reinigung des Gehäuses, der Lautsprechergitter & Ladebuchse - kostenlos inklusive", 
            icon: "🧼", 
            defaultChecked: true 
        },
        { 
            id: "cover", 
            title: "Premium 9H Panzerglas (Displayschutz)", 
            descDisplay: "Wird nach Display-Tausch direkt fachgerecht & blasenfrei montiert",
            descOther: "Falls bereits intakt vorhanden, legen wir das neue Panzerglas dem Paket bei",
            icon: "🛡️", 
            defaultChecked: true 
        },
        { 
            id: "lensGlass", 
            title: "Kamera-Schutzglas (Linsen-Schutzfolie)", 
            desc: "Schützt Kameralinsen (falls intakt vorhanden, wird das Schutzglas beigelegt)", 
            icon: "📸", 
            defaultChecked: true 
        }
    ],

    // Brands with popular quick-selection chips
    brands: [
        { 
            id: "Universal", 
            name: "🌐 Universal (Alle Marken)", 
            defaultModel: "Alle Modelle & Marken",
            quickModels: ["Alle Smartphones", "Apple & Samsung", "Xiaomi & Google", "Universal"]
        },
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
            id: "ebay_universal",
            name: "🌐 eBay Universal-Vorlage (Display/Akku/Backcover/Ladebuchse)",
            brand: "Universal",
            model: "Alle Modelle & Marken",
            repairType: "display",
            price: "69,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €",
            genericMode: true,
            ebayCompliance: true,
            freeGifts: true,
            featured: true
        },
        {
            id: "universal_display",
            name: "📱 Universal Display Tausch",
            brand: "Universal",
            model: "Alle Modelle & Marken",
            repairType: "display",
            price: "89,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €",
            genericMode: true,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "universal_battery",
            name: "🔋 Universal Akku Service",
            brand: "Universal",
            model: "Alle Modelle & Marken",
            repairType: "battery",
            price: "59,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €",
            genericMode: true,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "universal_backcover",
            name: "🛠️ Universal Backcover Glas",
            brand: "Universal",
            model: "Alle Modelle & Marken",
            repairType: "backcover",
            price: "69,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €",
            genericMode: true,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "universal_charging",
            name: "🔌 Universal USB-C Ladebuchse",
            brand: "Universal",
            model: "Alle Modelle & Marken",
            repairType: "charging",
            price: "49,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €",
            genericMode: true,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "apple_display",
            name: "📱 iPhone Display Express",
            brand: "Apple",
            model: "iPhone 14 Pro",
            repairType: "display",
            price: "129,00 €",
            upsellType: "paid",
            upsellPrice: "+ 15,00 €",
            genericMode: false,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "apple_battery",
            name: "🔋 iPhone Akku 100%",
            brand: "Apple",
            model: "iPhone 13",
            repairType: "battery",
            price: "69,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €",
            genericMode: false,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "samsung_display",
            name: "📱 Samsung AMOLED Tausch",
            brand: "Samsung",
            model: "Galaxy S23",
            repairType: "display",
            price: "159,00 €",
            upsellType: "paid",
            upsellPrice: "+ 15,00 €",
            genericMode: false,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "samsung_battery",
            name: "🔋 Samsung Akku Service",
            brand: "Samsung",
            model: "Galaxy S22",
            repairType: "battery",
            price: "59,00 €",
            upsellType: "none",
            upsellPrice: "+ 15,00 €",
            genericMode: false,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "charging_port",
            name: "🔌 USB-C Ladebuchse",
            brand: "Apple",
            model: "iPhone 12",
            repairType: "charging",
            price: "59,00 €",
            upsellType: "none",
            upsellPrice: "+ 15,00 €",
            genericMode: false,
            ebayCompliance: true,
            freeGifts: true
        },
        {
            id: "backcover_glass",
            name: "🛠️ Backcover Glas Tausch",
            brand: "Apple",
            model: "iPhone 14",
            repairType: "backcover",
            price: "79,00 €",
            upsellType: "free",
            upsellPrice: "+ 0,00 €",
            genericMode: false,
            ebayCompliance: true,
            freeGifts: true
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
            features: `<li><strong>Neuer Premium Li-Ion Ersatzakku:</strong> 100% Neuzustand, volle Ladekapazität &amp; maximale Zyklenfestigkeit</li>
<li><strong>Fachgerechte Demontage:</strong> Schonender Ausbau des alten Akkus &amp; umweltgerechtes Recycling (BattG)</li>
<li><strong>Originalgetreue Spezialverklebung:</strong> Sicherer Halt durch elastische Akku-Klebestreifen (kein Verrutschen)</li>
<li><strong>Elektronik- &amp; Sicherheitsprüfung:</strong> Messung von Ladekurve, Ruhestrom, Spannungsstabilität &amp; Temperatur</li>
<li><strong>100% Datenschutz-Garantie:</strong> Kein Werksreset nötig – alle Fotos, Chats &amp; Apps bleiben vollständig erhalten</li>
<li><strong>Umfassender 15-Punkte Endtest:</strong> Gründliche Endkontrolle aller Gerätefunktionen vor dem Versand</li>
<li><strong>Sicherer DHL Express-Rückversand:</strong> Antistatische Polsterverpackung &amp; lückenlose Sendungsverfolgung</li>`,
            generic_features: `<li><strong>Neuer Premium Li-Ion Ersatzakku:</strong> 100% Neuzustand, volle Ladekapazität &amp; maximale Zyklenfestigkeit</li>
<li><strong>Fachgerechte Demontage:</strong> Schonender Ausbau des alten Akkus &amp; umweltgerechtes Recycling (BattG)</li>
<li><strong>Originalgetreue Spezialverklebung:</strong> Sicherer Halt durch elastische Akku-Klebestreifen (kein Verrutschen)</li>
<li><strong>Elektronik- &amp; Sicherheitsprüfung:</strong> Messung von Ladekurve, Ruhestrom, Spannungsstabilität &amp; Temperatur</li>
<li><strong>100% Datenschutz-Garantie:</strong> Kein Werksreset nötig – alle Fotos, Chats &amp; Apps bleiben vollständig erhalten</li>
<li><strong>Umfassender 15-Punkte Endtest:</strong> Gründliche Endkontrolle aller Basiskomponenten deines Smartphones</li>
<li><strong>Sicherer DHL Express-Rückversand:</strong> Antistatische Polsterverpackung &amp; lückenlose Sendungsverfolgung</li>`,
            faq1: "Nein! Bei einem regulären Akkutausch bleiben all deine persönlichen Daten, Bilder, Chats und Apps vollständig erhalten. Wir führen keinen Werksreset durch.",
            transparency: "Je nach Modell und Hersteller kann nach dem Akkutausch in den Systemeinstellungen ein Hinweis zur Batterie angezeigt werden. Dies ist technisch bedingt völlig normal und beeinträchtigt weder Akkulaufzeit noch Ladeleistung.",
            generic_transparency: "Je nach Modell und Hersteller kann nach dem Akkutausch in den Systemeinstellungen ein Hinweis zur Batterie angezeigt werden. Dies ist technisch bedingt völlig normal und beeinträchtigt weder Akkulaufzeit noch Ladeleistung.",
            apple_transparency: "Bei Apple iPhones (ab Modell Xs/Xr) wird nach dem Tausch herstellerbedingt die Meldung 'Wichtige Batterienachricht' angezeigt und die prozentuale Maximalkapazität in den Einstellungen ausgeblendet. Die tatsächliche Leistung und Qualität unseres Premium-Akkus ist davon zu 100% unberührt.",
            beforeAfter: {
                beforeTitle: "Akku schwach & entlädt rasant",
                beforeDesc: "Ständiges Nachladen, plötzliche Abschaltungen bei Kälte, verlangsamte Systemleistung.",
                afterTitle: "100% volle Akku-Power",
                afterDesc: "Volle Tageslaufzeit wie am ersten Tag, maximale Spitzenleistung und stabiler Betrieb."
            },
            review1: { text: '"Sehr professionell und blitzschnell repariert. Mein Akku hält wieder wie am ersten Tag. Klare Empfehlung!"', author: "Michael T." },
            review2: { text: '"Handy war nach nur 2 Tagen repariert zurück. Extrem transparente Abwicklung und top Kundenservice!"', author: "Sarah K." }
        },
        display: {
            features: `<li><strong>Neues Premium-Display:</strong> Kristallklare Auflösung, leuchtstarke Farben &amp; verzögerungsfreie Multitouch-Reaktion</li>
<li><strong>Präzise Fachmontage:</strong> Schonender Ausbau &amp; rückstandsfreie Gehäusereinigung für perfekte Passform</li>
<li><strong>Vollständige Sensorübernahme:</strong> Saubere Übernahme aller Sensoren, Hörmuschel, Frontkamera &amp; Biometrie</li>
<li><strong>Staub- &amp; Spritzwasserschutz:</strong> Neuer passgenauer Rahmen-Dichtkleber für optimalen Schutz</li>
<li><strong>Labor-Prüfung auf Pixelfehler:</strong> Gründlicher Test auf Helligkeit, Ausleuchtung, Kontrast &amp; Multitouch</li>
<li><strong>100% Datenschutz-Garantie:</strong> Reparatur ohne Datenverlust – all deine Bilder, Apps &amp; Daten bleiben sicher</li>
<li><strong>Stoßfester DHL Express-Versand:</strong> Hochwertige Polsterverpackung &amp; versicherter Rückversand mit Tracking</li>`,
            generic_features: `<li><strong>Neues Premium-Display:</strong> Kristallklare Auflösung, leuchtstarke Farben &amp; verzögerungsfreie Multitouch-Reaktion</li>
<li><strong>Präzise Fachmontage:</strong> Schonender Ausbau &amp; rückstandsfreie Gehäusereinigung für perfekte Passform</li>
<li><strong>Vollständige Sensorübernahme:</strong> Saubere Übernahme aller Sensoren, Hörmuschel, Frontkamera &amp; Biometrie</li>
<li><strong>Staub- &amp; Spritzwasserschutz:</strong> Neuer passgenauer Rahmen-Dichtkleber für optimalen Schutz</li>
<li><strong>Labor-Prüfung auf Pixelfehler:</strong> Gründlicher Test auf Helligkeit, Ausleuchtung, Kontrast &amp; Multitouch</li>
<li><strong>100% Datenschutz-Garantie:</strong> Reparatur ohne Datenverlust – all deine Bilder, Apps &amp; Daten bleiben sicher</li>
<li><strong>Stoßfester DHL Express-Versand:</strong> Hochwertige Polsterverpackung &amp; versicherter Rückversand mit Tracking</li>`,
            apple_features: `<li><strong>Neues Premium-Display (OLED / Retina):</strong> Brillante Farben, exakter Kontrast &amp; 120Hz/60Hz Bildwiederholrate</li>
<li><strong>True-Tone &amp; Sensorübernahme:</strong> Übernahme der True-Tone Funktion (sofern auslesbar) sowie Face-ID Sensorik</li>
<li><strong>Staub- &amp; Spritzwasserschutz:</strong> Originalgetreue Neuverklebung des Rahmendichtungsrings</li>
<li><strong>Präzise Kalibrierung &amp; Endtest:</strong> 15-Punkte Test auf Touch-Genauigkeit, Helligkeitssensor &amp; Farbhomogenität</li>
<li><strong>100% Datensicherheit:</strong> Kein Datenverlust während des gesamten Reparaturvorgangs</li>
<li><strong>Sicherer DHL Express-Rückversand:</strong> Versicherungsschutz &amp; Live-Sendungsverfolgung inklusive</li>`,
            samsung_features: `<li><strong>Neues Dynamic / Super AMOLED Display:</strong> Perfekte Schwarzwerte, 120Hz Scrolling &amp; hohe Helligkeit</li>
<li><strong>Fingerabdruck- &amp; Sensorabstimmung:</strong> Sorgfältige Kalibrierung des In-Display Fingerprint-Sensors</li>
<li><strong>Fachgerechte Rahmenpassung:</strong> Richten des Gehäuserahmens bei leichten Verformungen für minimale Spaltmaße</li>
<li><strong>Vollständige Labor-Endprüfung:</strong> Touch-Rastertest, Pixelfehlerprüfung &amp; Multitouch-Validierung</li>
<li><strong>100% Datenschutz-Garantie:</strong> Deine Fotos, WhatsApp-Chats &amp; Kontakte bleiben vollständig erhalten</li>
<li><strong>DHL Express-Rückversand:</strong> Sichere Spezialverpackung &amp; Trackingnummer</li>`,
            faq1: "Nein, deine Daten (Fotos, WhatsApp-Verläufe, Apps) bleiben beim Displaywechsel zu 100% auf dem Gerät erhalten. Wir führen keinen Reset durch.",
            transparency: "Bitte beachte: Bei starken Sturzschäden mit verzogenem Gehäuserahmen richten wir den Rahmen bestmöglich aus, um minimale Spaltmaße zu gewährleisten.",
            generic_transparency: "Wir verwenden ausschließlich geprüfte Premium-Displays in Erstausrüsterqualität, die maximale Farbtreue und exzellente Touch-Reaktion für dein Gerät garantieren. Bei Sturzschäden richten wir den Rahmen bestmöglich aus.",
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
            features: `<li><strong>Neues Premium-Ladebuchsen Flex-Modul:</strong> USB-C / Lightning / Micro-USB in Erstausrüsterqualität</li>
<li><strong>Fast-Charging Unterstützung:</strong> Volle Power für PD Fast Charge, QuickCharge &amp; stabilen Ladestrom</li>
<li><strong>Tiefenreinigung des Anschlusskanals:</strong> Entfernung von Mikro-Staub an Ladebuchse &amp; Lautsprecherauslässen</li>
<li><strong>Signal- &amp; Audioprüfung:</strong> Gründlicher Funktionstest von Datenübertragung, Mikrofon, Lautsprecher &amp; Antennen</li>
<li><strong>Mechanischer Steckertest:</strong> Perfekter, wackelfreier Halt des Ladekabels mit sattem Einrasten</li>
<li><strong>100% Datenschutz-Garantie:</strong> Reparatur ohne Datenlöschung oder Reset – alle Daten bleiben sicher</li>
<li><strong>Sicherer DHL Express-Rückversand:</strong> Schnelle Rücksendung im antistatischen Sicherheitskarton</li>`,
            generic_features: `<li><strong>Neues Premium-Ladebuchsen Flex-Modul:</strong> USB-C / Lightning / Micro-USB in Erstausrüsterqualität</li>
<li><strong>Fast-Charging Unterstützung:</strong> Volle Power für PD Fast Charge, QuickCharge &amp; stabilen Ladestrom</li>
<li><strong>Tiefenreinigung des Anschlusskanals:</strong> Entfernung von Mikro-Staub an Ladebuchse &amp; Lautsprecherauslässen</li>
<li><strong>Signal- &amp; Audioprüfung:</strong> Gründlicher Funktionstest von Datenübertragung, Mikrofon, Lautsprecher &amp; Antennen</li>
<li><strong>Mechanischer Steckertest:</strong> Perfekter, wackelfreier Halt des Ladekabels mit sattem Einrasten</li>
<li><strong>100% Datenschutz-Garantie:</strong> Reparatur ohne Datenlöschung oder Reset – alle Daten bleiben sicher</li>
<li><strong>Sicherer DHL Express-Rückversand:</strong> Schnelle Rücksendung im antistatischen Sicherheitskarton</li>`,
            apple_features: `<li><strong>Neuer Lightning / USB-C Ladeanschluss:</strong> Hochwertiger Flex-Connector in Erstausrüsterqualität</li>
<li><strong>Unterstützung für Apple Fast-Charging:</strong> Schnelle Energieaufnahme und verlässliche Datenübertragung</li>
<li><strong>Audio- &amp; Mikrofonabstimmung:</strong> Überprüfung von Gesprächsmikrofon, Lautsprecherkontakten &amp; Antennenmodulen</li>
<li><strong>100% Datenschutz:</strong> Alle Fotos, Kontakte und Apps bleiben vollständig auf deinem iPhone erhalten</li>
<li><strong>DHL Express-Rückversand:</strong> Versichert im gepolsterten Karton mit Trackingnummer</li>`,
            faq1: "Keine Sorge, beim Wechsel der Ladebuchse gehen keinerlei persönliche Daten verloren.",
            transparency: "Oft ist die Ladebuchse nur stark verschmutzt. Wir prüfen das Bauteil vorab gründlich. Sollte nur eine professionelle Reinigung nötig sein, informieren wir dich transparent!",
            generic_transparency: "Oft ist die Ladebuchse nur stark verschmutzt. Wir prüfen das Bauteil vorab gründlich. Sollte nur eine professionelle Tiefenreinigung nötig sein, informieren wir dich transparent!",
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
            features: `<li><strong>Neues Premium-Backcover:</strong> Makelloses Glas / Gehäuserückseite in exakter Original-Optik &amp; Farbton</li>
<li><strong>Schonende Altglasentfernung:</strong> Präzise, rückstandslose Beseitigung aller Splitter ohne Gehäusebeschädigung</li>
<li><strong>Hochfeste Spezialverklebung:</strong> Kontrollierter Anpressdruck für nahtlose Passform und originale Spaltmaße</li>
<li><strong>Linsen- &amp; Spulenschutz:</strong> Gründliche Reinigung der rückseitigen Kameralinsen, Blitz &amp; Induktionsladespule</li>
<li><strong>Rahmen- &amp; Dichtigkeitskontrolle:</strong> Prüfung des gesamten Gehäuses auf Verzug, Dichtigkeit &amp; Stabilität</li>
<li><strong>100% Datenschutz-Garantie:</strong> Kein Werksreset – deine persönlichen Daten bleiben zu 100% unberührt</li>
<li><strong>Gepolsterter DHL Express-Versand:</strong> Sicher verpackt mit versicherter Sendungsverfolgung</li>`,
            generic_features: `<li><strong>Neues Premium-Backcover:</strong> Makelloses Glas / Gehäuserückseite in passgenauer Ausführung &amp; Originaloptik</li>
<li><strong>Schonende Altglasentfernung:</strong> Präzise, rückstandslose Beseitigung aller Splitter ohne Gehäusebeschädigung</li>
<li><strong>Hochfeste Spezialverklebung:</strong> Kontrollierter Anpressdruck für nahtlose Passform und originale Spaltmaße</li>
<li><strong>Linsen- &amp; Spulenschutz:</strong> Gründliche Reinigung der rückseitigen Kameralinsen, Blitz &amp; Induktionsladespule</li>
<li><strong>Rahmen- &amp; Dichtigkeitskontrolle:</strong> Prüfung des gesamten Gehäuses auf Verzug, Dichtigkeit &amp; Stabilität</li>
<li><strong>100% Datenschutz-Garantie:</strong> Kein Werksreset – deine persönlichen Daten bleiben zu 100% unberührt</li>
<li><strong>Gepolsterter DHL Express-Versand:</strong> Sicher verpackt mit versicherter Sendungsverfolgung</li>`,
            apple_features: `<li><strong>Neues Premium-Rückglas in Original Apple Farbvarianten:</strong> Brillante, kratzfeste Glasoberfläche</li>
<li><strong>Schonende Kälte- bzw. Laserentfernung:</strong> Rückstandsfreie Splitterbeseitigung ohne Hitzeeinfluss auf Akku &amp; Logikboard</li>
<li><strong>Präzise Passform für MagSafe:</strong> Volle Ladeleistung und starker Halt für induktives MagSafe-Zubehör</li>
<li><strong>100% Datensicherheit:</strong> Deine Daten bleiben während der Reparatur sicher auf dem Gerät</li>
<li><strong>DHL Express-Rückversand:</strong> Transportsicher verpackt mit Sendungsverfolgung</li>`,
            faq1: "Deine Daten bleiben vollständig unberührt. Die Reparatur betrifft ausschließlich das äußere Gehäuseglas.",
            transparency: "Aufgrund der werkseitigen Versiegelungsverfahren kann die herstellerseitige IP-Wasserdichtigkeit nach einem Gehäuseschaden und Tausch nicht mehr garantiert werden. Vor Spritzwasser ist das Gerät jedoch geschützt.",
            generic_transparency: "Aufgrund der werkseitigen Versiegelungsverfahren kann die herstellerseitige IP-Wasserdichtigkeit nach einem Gehäuseschaden und Tausch nicht mehr garantiert werden. Vor Spritzwasser ist das Gerät jedoch geschützt.",
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
            features: `<li><strong>Neues Original-Qualität Kameramodul:</strong> Hauptkamera / Weitwinkel in erstklassiger Bildqualität</li>
<li><strong>Autofokus- &amp; OIS-Prüfung:</strong> Kalibrierung von optischem Bildstabilisator &amp; Makrofokus nach dem Einbau</li>
<li><strong>Reinraum-Linsenreinigung:</strong> Gründliche Beseitigung von Staub und Partikeln auf den inneren Linsen</li>
<li><strong>15-Punkte Funktionstest:</strong> Test aller Foto-, Video-, Porträt- und Nachtmodi unter verschiedenen Lichtverhältnissen</li>
<li><strong>100% Datenschutz:</strong> All deine privaten Aufnahmen &amp; Daten bleiben sicher auf dem Gerät</li>
<li><strong>Sicherer DHL Express-Rückversand:</strong> Gepolsterte Schutzverpackung mit Sendungsnummer</li>`,
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
            features: `<li><strong>Neues Premium-Hörmuschel- / Lautsprechermodul:</strong> Klarer, kraftvoller Stereoklang</li>
<li><strong>Akustikkanal-Reinigung:</strong> Gründliche Beseitigung von Staub- und Schmutzablagerungen in den Gittern</li>
<li><strong>Frequenz- &amp; Lautstärketest:</strong> Prüfung bei maximalem Pegel ohne Scheppern oder Verzerrungen</li>
<li><strong>Mikrofon- &amp; Freisprechprüfung:</strong> Test der Echounterdrückung und Sprachverständlichkeit</li>
<li><strong>100% Datensicherheit:</strong> Deine privaten Daten bleiben während der Reparatur sicher erhalten</li>
<li><strong>Schneller DHL Express-Rückversand:</strong> Sicher verpackt mit Sendungsverfolgung</li>`,
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
            features: `<li><strong>Vollständige Demontage:</strong> Schonende Öffnung und mikroskopische Schadensanalyse aller Module</li>
<li><strong>Spezial-Ultraschallbad-Reinigung:</strong> Beseitigung von Korrosion, Mineralrückständen &amp; Kurzschlüssen</li>
<li><strong>Platinen-Trocknung &amp; Messtechnik:</strong> Kontrolle von Leiterbahnen, SMD-Bauteilen &amp; Strompfaden</li>
<li><strong>Datenrettungs-Fokus:</strong> Höchste Priorität auf den Erhalt deiner persönlichen Bilder &amp; Daten</li>
<li><strong>Transparenter Prüfbericht:</strong> Detaillierter Zustandsbericht &amp; Kostenvoranschlag für eventuelle Zusatzteile</li>
<li><strong>Sicherer DHL Express-Rückversand:</strong> Transportsichere Polsterung mit Sendungsverfolgung</li>`,
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
