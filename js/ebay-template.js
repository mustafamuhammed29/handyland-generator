/**
 * HandyLand Generator Pro - eBay HTML Template Generator
 * 
 * ⚠️ CRITICAL COMPLIANCE RULES:
 * - 100% Pure HTML and Embedded CSS only.
 * - ZERO JavaScript (no <script>, no onclick/onload handlers).
 * - ZERO external stylesheets (no <link rel="stylesheet">).
 * - Uses native HTML elements like <details>/<summary> for accordion FAQs without scripts.
 * - Prefix all CSS selectors with `.hl-` to prevent styling conflicts inside eBay's page container.
 */

import { REPAIR_DATA } from './data/repair-data.js';

export function generateEbayHtml(config) {
    const {
        brand = "Apple",
        model = "iPhone 13 Pro",
        repairTypeId = "battery",
        repairName = "Akku / Batterie 🔋",
        price = "69,00 €",
        shippingCost = "6,99 € (versichert mit DHL & Tracking)",
        warrantyMonths = "12",
        processingTime = "12-24h",
        upsellType = "none", // 'none' | 'paid' | 'free'
        upsellPrice = "+ 15,00 €",
        upsellTitle = "Premium Panzerglas Schutz",
        upsellDesc = "Füge ein hochfestes 9H Panzerglas inkl. blasenfreier Montage hinzu.",
        formToggle = "yes", // 'yes' | 'no'
        formLink = "https://mustafamuhammed29.github.io/handyland-generator/reparaturschein.html",
        featuresHtml = "",
        faq1Text = "",
        transparencyText = "",
        review1 = { text: "", author: "" },
        review2 = { text: "", author: "" },
        customNotes = ""
    } = config;

    const shop = REPAIR_DATA.shopInfo;

    // Promotion / Upsell Box HTML
    let promoHtml = '';
    if (upsellType === 'paid') {
        promoHtml = `
        <div class="hl-upsell-box hl-upsell-paid">
            <div class="hl-upsell-content">
                <div class="hl-upsell-badge">🌟 EMPFOHLENES UPGRADE</div>
                <h4>${escapeHtml(upsellTitle)}</h4>
                <p>${escapeHtml(upsellDesc)}</p>
            </div>
            <div class="hl-upsell-price-tag">${escapeHtml(upsellPrice)}</div>
        </div>`;
    } else if (upsellType === 'free') {
        promoHtml = `
        <div class="hl-upsell-box hl-upsell-free">
            <div class="hl-upsell-content">
                <div class="hl-upsell-badge hl-badge-green">🎁 UNSER GESCHENK AN DICH</div>
                <h4>${escapeHtml(upsellTitle)} (Kostenlos)</h4>
                <p>${escapeHtml(upsellDesc || "Du erhältst ein Premium Panzerglas inkl. professioneller Montage komplett gratis zu dieser Reparatur dazu.")}</p>
            </div>
            <div class="hl-upsell-price-tag hl-tag-free">GRATIS</div>
        </div>`;
    }

    // Timeline Step 2 (Formular oder Zettel)
    let timelineStep2Html = '';
    if (formToggle === 'yes') {
        timelineStep2Html = `
        <div class="hl-timeline-item">
            <div class="hl-timeline-badge">2</div>
            <div class="hl-timeline-body">
                <div class="hl-timeline-title">Formular & Sicher Verpacken</div>
                <p class="hl-timeline-desc">Verpacke dein <strong>${escapeHtml(brand)} ${escapeHtml(model)}</strong> sicher und gepolstert (bitte ohne Originalverpackung oder Ladekabel).</p>
                <div class="hl-form-box">
                    <div class="hl-form-header">
                        <span class="hl-form-icon">📄</span>
                        <div>
                            <h5>Wichtig: Der HandyLand Reparaturschein</h5>
                            <p>Für eine blitzschnelle Zuordnung fülle bitte unser Begleitformular aus und lege es ausgedruckt ins Paket:</p>
                        </div>
                    </div>
                    <a href="${escapeHtml(formLink)}" target="_blank" class="hl-form-btn">
                        🖨️ Reparaturschein öffnen & drucken
                    </a>
                </div>
            </div>
        </div>`;
    } else {
        timelineStep2Html = `
        <div class="hl-timeline-item">
            <div class="hl-timeline-badge">2</div>
            <div class="hl-timeline-body">
                <div class="hl-timeline-title">Sicher Verpacken & Einsenden</div>
                <p class="hl-timeline-desc">Verpacke dein <strong>${escapeHtml(brand)} ${escapeHtml(model)}</strong> sicher in Luftpolsterfolie. Lege bitte einen Zettel mit deinem <strong>eBay-Nutzernamen</strong>, deiner <strong>Telefonnummer</strong> und dem <strong>Entsperrcode</strong> (Muster/PIN) für die Endprüfung bei.</p>
            </div>
        </div>`;
    }

    // Optional Custom Notes Box
    let customNotesHtml = '';
    if (customNotes && customNotes.trim().length > 0) {
        customNotesHtml = `
        <div class="hl-custom-note">
            <div class="hl-note-icon">📌</div>
            <div class="hl-note-text">
                <strong>Zusatzhinweis:</strong> ${escapeHtml(customNotes)}
            </div>
        </div>`;
    }

    // Final eBay Safe Standalone HTML
    return `<!-- ================================================================= -->
<!-- HandyLand eBay Listing Template Pro (Zero-JS / Pure HTML+CSS)    -->
<!-- ================================================================= -->
<div class="hl-wrapper" id="hl-top">
<style>
    /* CSS Scoped & Embedded inside container - Pure CSS3 / No external dependencies */
    .hl-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        max-width: 960px;
        margin: 0 auto;
        background-color: #121212;
        color: #f0f0f0;
        border: 1px solid #2a2a2a;
        border-radius: 14px;
        overflow: hidden;
        line-height: 1.6;
        box-sizing: border-box;
        font-size: 15px;
    }
    .hl-wrapper * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    /* Header Section */
    .hl-header {
        background: linear-gradient(180deg, #1c1c1c 0%, #0d0d0d 100%);
        padding: 35px 20px;
        text-align: center;
        border-bottom: 2px solid #d4af37;
        position: relative;
    }
    .hl-logo-wrapper {
        margin-bottom: 15px;
    }
    .hl-logo-img {
        max-height: 55px;
        max-width: 220px;
        display: inline-block;
    }
    .hl-header-tagline {
        display: inline-block;
        background: rgba(212, 175, 55, 0.12);
        color: #d4af37;
        border: 1px solid #d4af37;
        padding: 4px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 12px;
    }
    .hl-header h1 {
        font-size: 28px;
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 8px;
        line-height: 1.3;
    }
    .hl-header h1 span {
        color: #d4af37;
    }
    .hl-header-subtitle {
        font-size: 16px;
        color: #a5a5a5;
    }
    
    /* Trust Bar */
    .hl-trust-bar {
        display: flex;
        justify-content: space-around;
        background: #181818;
        border-bottom: 1px solid #2a2a2a;
        padding: 15px 10px;
        flex-wrap: wrap;
        gap: 10px;
    }
    .hl-trust-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 5px 12px;
        font-size: 13px;
        font-weight: 700;
        color: #f3e5ab;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .hl-trust-icon {
        font-size: 18px;
    }

    /* Content Area */
    .hl-content {
        padding: 30px 25px;
    }

    /* Grid layout */
    .hl-grid-2 {
        display: flex;
        gap: 20px;
        margin-bottom: 25px;
    }
    .hl-col {
        flex: 1;
        min-width: 0;
    }

    /* Cards */
    .hl-card {
        background: #1a1a1a;
        border: 1px solid #2e2e2e;
        border-radius: 10px;
        padding: 22px;
        height: 100%;
    }
    .hl-card-header {
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid #333333;
        padding-bottom: 12px;
        margin-bottom: 18px;
    }
    .hl-card-icon {
        font-size: 22px;
    }
    .hl-card-title {
        font-size: 18px;
        font-weight: 700;
        color: #d4af37;
    }

    /* Price Box */
    .hl-price-box {
        background: linear-gradient(135deg, #d4af37 0%, #aa8022 100%);
        color: #000000;
        border-radius: 8px;
        padding: 18px;
        text-align: center;
        margin-bottom: 15px;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.25);
    }
    .hl-price-num {
        font-size: 34px;
        font-weight: 900;
        display: block;
        line-height: 1.1;
    }
    .hl-price-sub {
        font-size: 12.5px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        opacity: 0.85;
    }

    /* Feature List */
    .hl-checklist {
        list-style: none;
        margin: 15px 0;
    }
    .hl-checklist li {
        position: relative;
        padding-left: 26px;
        margin-bottom: 10px;
        font-size: 14.5px;
        color: #e0e0e0;
    }
    .hl-checklist li::before {
        content: "✔";
        position: absolute;
        left: 0;
        top: 0;
        color: #d4af37;
        font-weight: bold;
        font-size: 15px;
    }

    /* Upsell / Promo Box */
    .hl-upsell-box {
        border-radius: 8px;
        padding: 15px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    .hl-upsell-paid {
        background: rgba(212, 175, 55, 0.08);
        border: 1px dashed #d4af37;
    }
    .hl-upsell-free {
        background: rgba(37, 211, 102, 0.1);
        border: 1px solid #25D366;
    }
    .hl-upsell-badge {
        font-size: 11px;
        font-weight: 800;
        color: #d4af37;
        margin-bottom: 4px;
    }
    .hl-badge-green {
        color: #25D366;
    }
    .hl-upsell-content h4 {
        color: #ffffff;
        font-size: 14px;
        margin-bottom: 4px;
    }
    .hl-upsell-content p {
        font-size: 12.5px;
        color: #b0b0b0;
        line-height: 1.4;
    }
    .hl-upsell-price-tag {
        font-size: 16px;
        font-weight: 900;
        background: #000000;
        color: #d4af37;
        padding: 8px 14px;
        border-radius: 20px;
        border: 1px solid #d4af37;
        white-space: nowrap;
    }
    .hl-tag-free {
        background: #25D366;
        color: #000000;
        border: none;
    }

    /* Transparency Box */
    .hl-transparency {
        background: rgba(212, 175, 55, 0.05);
        border-left: 3px solid #d4af37;
        padding: 12px 15px;
        border-radius: 0 6px 6px 0;
        margin-top: 15px;
    }
    .hl-transparency h5 {
        color: #d4af37;
        font-size: 13px;
        margin-bottom: 4px;
        font-weight: 700;
    }
    .hl-transparency p {
        font-size: 13px;
        color: #cccccc;
        line-height: 1.45;
    }

    /* Custom Note */
    .hl-custom-note {
        background: rgba(88, 166, 255, 0.1);
        border: 1px solid rgba(88, 166, 255, 0.3);
        border-radius: 8px;
        padding: 12px 15px;
        margin-bottom: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .hl-note-icon {
        font-size: 20px;
    }
    .hl-note-text {
        font-size: 13.5px;
        color: #d0e2ff;
    }

    /* Timeline Process */
    .hl-timeline {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .hl-timeline-item {
        display: flex;
        gap: 15px;
    }
    .hl-timeline-badge {
        width: 32px;
        height: 32px;
        background: #111;
        border: 2px solid #d4af37;
        color: #d4af37;
        font-weight: 900;
        font-size: 14px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    .hl-timeline-body {
        flex: 1;
    }
    .hl-timeline-title {
        font-size: 15px;
        font-weight: 700;
        color: #f3e5ab;
        margin-bottom: 4px;
    }
    .hl-timeline-desc {
        font-size: 13.5px;
        color: #b0b0b0;
        line-height: 1.45;
    }
    .hl-form-box {
        background: rgba(212, 175, 55, 0.08);
        border: 1px solid rgba(212, 175, 55, 0.3);
        border-radius: 8px;
        padding: 14px;
        margin-top: 10px;
    }
    .hl-form-header {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-bottom: 10px;
    }
    .hl-form-icon {
        font-size: 22px;
    }
    .hl-form-header h5 {
        color: #d4af37;
        font-size: 13.5px;
        margin-bottom: 3px;
    }
    .hl-form-header p {
        font-size: 12.5px;
        color: #cccccc;
    }
    .hl-form-btn {
        display: inline-block;
        background: #25D366;
        color: #000000;
        font-weight: 800;
        font-size: 13px;
        padding: 8px 16px;
        border-radius: 6px;
        text-decoration: none;
        text-align: center;
    }

    /* Comparison Table / Box */
    .hl-comparison-grid {
        display: flex;
        gap: 15px;
        margin-bottom: 25px;
    }
    .hl-comp-col {
        flex: 1;
        border-radius: 8px;
        padding: 18px;
    }
    .hl-comp-us {
        background: rgba(212, 175, 55, 0.06);
        border: 1px solid rgba(212, 175, 55, 0.4);
    }
    .hl-comp-other {
        background: #171717;
        border: 1px solid #2a2a2a;
        opacity: 0.8;
    }
    .hl-comp-head {
        font-size: 15px;
        font-weight: 800;
        text-align: center;
        padding-bottom: 10px;
        margin-bottom: 12px;
        border-bottom: 1px solid #333333;
    }
    .hl-comp-us .hl-comp-head {
        color: #d4af37;
    }
    .hl-comp-other .hl-comp-head {
        color: #888888;
    }
    .hl-comp-list {
        list-style: none;
    }
    .hl-comp-list li {
        font-size: 13px;
        margin-bottom: 8px;
        display: flex;
        gap: 8px;
    }
    .hl-check { color: #25D366; font-weight: bold; }
    .hl-cross { color: #ff4d4d; font-weight: bold; }

    /* Trust Banners */
    .hl-trust-banners {
        display: flex;
        gap: 15px;
        margin-bottom: 25px;
    }
    .hl-t-banner {
        flex: 1;
        padding: 14px;
        border-radius: 8px;
        display: flex;
        gap: 12px;
        align-items: flex-start;
    }
    .hl-tb-blue {
        background: rgba(56, 139, 253, 0.08);
        border: 1px solid rgba(56, 139, 253, 0.3);
    }
    .hl-tb-green {
        background: rgba(37, 211, 102, 0.08);
        border: 1px solid rgba(37, 211, 102, 0.3);
    }
    .hl-tb-icon {
        font-size: 24px;
    }
    .hl-tb-text h5 {
        font-size: 14px;
        margin-bottom: 3px;
    }
    .hl-tb-blue h5 { color: #58a6ff; }
    .hl-tb-green h5 { color: #3fb950; }
    .hl-tb-text p {
        font-size: 12.5px;
        color: #b0b0b0;
        line-height: 1.4;
    }

    /* FAQ (Pure HTML details / summary - NO JS) */
    .hl-faq-item {
        background: #181818;
        border: 1px solid #2a2a2a;
        border-radius: 6px;
        margin-bottom: 8px;
        overflow: hidden;
    }
    .hl-faq-summary {
        padding: 12px 16px;
        font-size: 14px;
        font-weight: 700;
        color: #f3e5ab;
        cursor: pointer;
        outline: none;
    }
    .hl-faq-content {
        padding: 0 16px 14px 16px;
        font-size: 13.5px;
        color: #cccccc;
        line-height: 1.45;
    }

    /* Reviews */
    .hl-review-card {
        background: #161616;
        border: 1px solid #2a2a2a;
        border-radius: 8px;
        padding: 14px;
        margin-bottom: 10px;
    }
    .hl-stars {
        color: #ffb703;
        font-size: 14px;
        margin-bottom: 6px;
    }
    .hl-review-text {
        font-size: 13px;
        font-style: italic;
        color: #cccccc;
        margin-bottom: 8px;
    }
    .hl-review-author {
        font-size: 12px;
        font-weight: 700;
        color: #d4af37;
    }

    /* Footer / Impressum */
    .hl-footer {
        background: #0a0a0a;
        border-top: 2px solid #d4af37;
        padding: 25px 20px;
    }
    .hl-footer-grid {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
    }
    .hl-footer-col h4 {
        color: #d4af37;
        font-size: 13.5px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        margin-bottom: 10px;
    }
    .hl-footer-col p {
        font-size: 13px;
        color: #999999;
        line-height: 1.5;
    }
    .hl-copyright {
        text-align: center;
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid #1f1f1f;
        font-size: 11.5px;
        color: #666666;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .hl-grid-2, .hl-comparison-grid, .hl-trust-banners, .hl-footer-grid {
            flex-direction: column;
            gap: 15px;
        }
        .hl-header h1 {
            font-size: 22px;
        }
        .hl-content {
            padding: 20px 15px;
        }
    }
</style>

    <!-- Header -->
    <div class="hl-header">
        <div class="hl-logo-wrapper">
            <img src="${escapeHtml(shop.logoUrl)}" alt="HandyLand Heidelberg Logo" class="hl-logo-img">
        </div>
        <div class="hl-header-tagline">Fachwerkstatt &amp; Express Einsendeservice</div>
        <h1>Premium <span>${escapeHtml(repairName)}</span></h1>
        <p class="hl-header-subtitle">Fachgerechte Reparatur für ${escapeHtml(brand)} ${escapeHtml(model)}</p>
    </div>

    <!-- Trust Badges -->
    <div class="hl-trust-bar">
        <div class="hl-trust-item"><span class="hl-trust-icon">⚡</span> ${escapeHtml(processingTime)} Express</div>
        <div class="hl-trust-item"><span class="hl-trust-icon">🛡️</span> ${escapeHtml(warrantyMonths)} Monate Garantie</div>
        <div class="hl-trust-item"><span class="hl-trust-icon">🔒</span> Daten bleiben erhalten</div>
        <div class="hl-trust-item"><span class="hl-trust-icon">📦</span> Sicherer DHL Rückversand</div>
    </div>

    <div class="hl-content">
        ${customNotesHtml}

        <!-- Top Section: Price & Features -->
        <div class="hl-grid-2">
            <!-- Price Column -->
            <div class="hl-col">
                <div class="hl-card">
                    <div class="hl-card-header">
                        <span class="hl-card-icon">💶</span>
                        <div class="hl-card-title">Reparaturpreis</div>
                    </div>
                    <div class="hl-price-box">
                        <span class="hl-price-num">${escapeHtml(price)}</span>
                        <span class="hl-price-sub">inkl. 19% MwSt.</span>
                    </div>
                    <ul class="hl-checklist">
                        <li><strong>Rückversand:</strong> ${escapeHtml(shippingCost)}</li>
                        <li><strong>Vor-Ort Abholung:</strong> Kostenlos in Heidelberg möglich</li>
                        <li><strong>Transparenz:</strong> Keine versteckten Zusatzkosten!</li>
                    </ul>
                    ${promoHtml}
                </div>
            </div>

            <!-- Features Column -->
            <div class="hl-col">
                <div class="hl-card">
                    <div class="hl-card-header">
                        <span class="hl-card-icon">✨</span>
                        <div class="hl-card-title">Im Service enthalten</div>
                    </div>
                    <ul class="hl-checklist">
                        ${featuresHtml}
                    </ul>
                    <div class="hl-transparency">
                        <h5>ℹ️ Transparenzhinweis</h5>
                        <p>${escapeHtml(transparencyText)}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Trust Banners -->
        <div class="hl-trust-banners">
            <div class="hl-t-banner hl-tb-blue">
                <div class="hl-tb-icon">🔒</div>
                <div class="hl-tb-text">
                    <h5>100% Datenschutz</h5>
                    <p>Deine Fotos, WhatsApp-Chats und Daten bleiben sicher erhalten. Wir führen keinen Werksreset durch.</p>
                </div>
            </div>
            <div class="hl-t-banner hl-tb-green">
                <div class="hl-tb-icon">🌱</div>
                <div class="hl-tb-text">
                    <h5>Nachhaltig &amp; Smart</h5>
                    <p>Reparieren schont die Umwelt und spart wertvolle Ressourcen gegenüber einem teuren Neukauf.</p>
                </div>
            </div>
        </div>

        <!-- Step-by-Step Timeline Process -->
        <div class="hl-card" style="margin-bottom: 25px;">
            <div class="hl-card-header">
                <span class="hl-card-icon">🚀</span>
                <div class="hl-card-title">So einfach funktioniert die Reparatur</div>
            </div>
            <div class="hl-timeline">
                <div class="hl-timeline-item">
                    <div class="hl-timeline-badge">1</div>
                    <div class="hl-timeline-body">
                        <div class="hl-timeline-title">Service auf eBay kaufen</div>
                        <p class="hl-timeline-desc">Schließe den Kauf hier auf eBay ab. Unsere Werkstattadresse wird dir direkt in der Kaufabwicklung sowie per Nachricht mitgeteilt.</p>
                    </div>
                </div>

                ${timelineStep2Html}

                <div class="hl-timeline-item">
                    <div class="hl-timeline-badge">3</div>
                    <div class="hl-timeline-body">
                        <div class="hl-timeline-title">Express-Reparatur in Heidelberg</div>
                        <p class="hl-timeline-desc">Sobald dein Paket eintrifft, reparieren unsere zertifizierten Techniker das Smartphone professionell innerhalb von ${escapeHtml(processingTime)}.</p>
                    </div>
                </div>

                <div class="hl-timeline-item">
                    <div class="hl-timeline-badge">4</div>
                    <div class="hl-timeline-body">
                        <div class="hl-timeline-title">Versicherter Rückversand</div>
                        <p class="hl-timeline-desc">Wir verpacken dein repariertes Gerät transportsicher und senden es mit DHL-Sendungsverfolgungsnummer an dich zurück.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Comparison Table -->
        <div class="hl-comparison-grid">
            <div class="hl-comp-col hl-comp-us">
                <div class="hl-comp-head">👑 HandyLand Heidelberg</div>
                <ul class="hl-comp-list">
                    <li><span class="hl-check">✔</span> Geprüfte Premium-Ersatzteile in Originalqualität</li>
                    <li><span class="hl-check">✔</span> ${escapeHtml(warrantyMonths)} Monate Garantie auf Funktion &amp; Bauteil</li>
                    <li><span class="hl-check">✔</span> ${escapeHtml(processingTime)} Express-Bearbeitung in eigener Werkstatt</li>
                    <li><span class="hl-check">✔</span> Persönlicher Kundenservice via WhatsApp &amp; Mail</li>
                </ul>
            </div>
            <div class="hl-comp-col hl-comp-other">
                <div class="hl-comp-head">❌ Andere Billiganbieter</div>
                <ul class="hl-comp-list">
                    <li><span class="hl-cross">✖</span> Billige Nachbauten mit Farb- und Touchproblemen</li>
                    <li><span class="hl-cross">✖</span> Komplizierte oder verweigerte Garantieabwicklung</li>
                    <li><span class="hl-cross">✖</span> Wochenlange Wartezeiten und Weiterleitung an Dritte</li>
                    <li><span class="hl-cross">✖</span> Gefahr von Datenverlust durch unvorsichtigen Reset</li>
                </ul>
            </div>
        </div>

        <!-- FAQ & Customer Feedback Grid -->
        <div class="hl-grid-2">
            <!-- FAQ Accordion (Pure HTML) -->
            <div class="hl-col">
                <div class="hl-card">
                    <div class="hl-card-header">
                        <span class="hl-card-icon">❓</span>
                        <div class="hl-card-title">Häufige Fragen (FAQ)</div>
                    </div>
                    
                    <details class="hl-faq-item" open>
                        <summary class="hl-faq-summary">Bleiben meine persönlichen Daten erhalten?</summary>
                        <div class="hl-faq-content">${escapeHtml(faq1Text)}</div>
                    </details>

                    <details class="hl-faq-item">
                        <summary class="hl-faq-summary">Wie funktioniert die Garantie?</summary>
                        <div class="hl-faq-content">Du erhältst ${escapeHtml(warrantyMonths)} Monate Gewährleistung auf das verbaute Ersatzteil und unsere Arbeitsleistung. Ausgenommen sind lediglich selbstverschuldete Folgeschäden (wie erneute Stürze oder Wasserkontakt).</div>
                    </details>

                    <details class="hl-faq-item">
                        <summary class="hl-faq-summary">Was passiert, wenn weitere Defekte vorliegen?</summary>
                        <div class="hl-faq-content">Sollten unsere Techniker beim Eingangstest weitere Mängel feststellen, kontaktieren wir dich unverzüglich vor Beginn der Arbeiten. Es entstehen niemals unautorisierte Mehrkosten!</div>
                    </details>
                </div>
            </div>

            <!-- Customer Reviews -->
            <div class="hl-col">
                <div class="hl-card">
                    <div class="hl-card-header">
                        <span class="hl-card-icon">⭐</span>
                        <div class="hl-card-title">Kundenbewertungen</div>
                    </div>
                    
                    <div class="hl-review-card">
                        <div class="hl-stars">★★★★★</div>
                        <p class="hl-review-text">${escapeHtml(review1.text)}</p>
                        <div class="hl-review-author">— ${escapeHtml(review1.author)} (Verifizierter eBay-Käufer)</div>
                    </div>

                    <div class="hl-review-card">
                        <div class="hl-stars">★★★★★</div>
                        <p class="hl-review-text">${escapeHtml(review2.text)}</p>
                        <div class="hl-review-author">— ${escapeHtml(review2.author)} (Verifizierter eBay-Käufer)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer / Impressum -->
    <div class="hl-footer">
        <div class="hl-footer-grid">
            <div class="hl-footer-col">
                <h4>📍 Fachwerkstatt</h4>
                <p><strong>${escapeHtml(shop.name)}</strong></p>
                <p>Inh. ${escapeHtml(shop.owner)}</p>
                <p>${escapeHtml(shop.street)}</p>
                <p>${escapeHtml(shop.zipCity)}</p>
            </div>
            <div class="hl-footer-col">
                <h4>📞 Kontakt &amp; Support</h4>
                <p><strong>WhatsApp / Tel:</strong> ${escapeHtml(shop.phone)}</p>
                <p><strong>E-Mail:</strong> ${escapeHtml(shop.email)}</p>
                <p><strong>USt-IdNr.:</strong> ${escapeHtml(shop.vatId)}</p>
            </div>
            <div class="hl-footer-col">
                <h4>🛒 eBay Shop</h4>
                <p>Besuche unseren eBay-Shop für weitere Smartphone-Reparaturen, Zubehör und geprüfte Refurbished-Geräte.</p>
            </div>
        </div>
        <div class="hl-copyright">
            © ${new Date().getFullYear()} ${escapeHtml(shop.name)}. Alle Rechte vorbehalten.
        </div>
    </div>
</div>
<!-- ================================================================= -->
<!-- End of HandyLand eBay Template                                    -->
<!-- ================================================================= -->`;
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
