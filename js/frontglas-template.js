/**
 * HandyLand Generator Pro - Frontglas mit OCA (Ersatzteil-Verkauf) eBay HTML Template Engine
 * 
 * ⚠️ CRITICAL COMPLIANCE RULES:
 * - 100% Pure HTML and Embedded CSS only.
 * - ZERO JavaScript (no <script>, no onclick/onload handlers).
 * - Scoped styles under `.hl-fg-container` to guarantee ZERO collisions on eBay.
 * - Dedicated product selling template (Spare part, NOT repair service).
 * - Includes shop logo/branding both at the TOP (Header) and BOTTOM (Footer).
 * - Supports custom product photo/upload or high-detail SVG glass illustration.
 */

import { REPAIR_DATA, FRONTGLAS_DATA } from './data/repair-data.js?v=9.3';

export function generateFrontglasEbayHtml(config) {
    const {
        themeId = "gold",
        brand = "Universal",
        shippingCost = "Kostenloser DHL Versand (inkl. Tracking)",
        color = "Schwarz / Siehe Modellauswahl",
        imageUrl = "",
        specsHtml = "",
        warningText = "",
        lieferumfangHtml = "",
        hinweiseHtml = "",
        customTitle = ""
    } = config;

    const shop = REPAIR_DATA.shopInfo;
    const theme = REPAIR_DATA.themes[themeId] || REPAIR_DATA.themes.gold;

    const isUniversal = !brand || brand === 'Universal' || brand === 'Other';
    const brandLabel = (brand === 'Apple') ? 'Apple iPhone' : (brand === 'Samsung') ? 'Samsung Galaxy' : brand;
    const defaultTitle = isUniversal
        ? `Frontglas mit OCA Folie für Smartphone Display Glas Scheibe 9H`
        : `Frontglas mit OCA Folie für ${brandLabel} Display Glas Scheibe 9H`;

    const finalTitle = customTitle && customTitle.trim().length > 0 
        ? customTitle.trim() 
        : defaultTitle;

    const compatibilityPill = isUniversal
        ? 'Alle Smartphone-Modelle'
        : `Alle ${brandLabel} Modelle`;

    const compatibilityTable = isUniversal
        ? 'Alle gängigen Smartphone-Modelle (Auswahl im eBay-Menü oben)'
        : `${brandLabel} Modelle (Auswahl im eBay-Menü oben)`;

    const finalSpecs = specsHtml && specsHtml.trim().length > 0 
        ? specsHtml 
        : FRONTGLAS_DATA.defaultSpecsHtml;

    const finalWarning = warningText && warningText.trim().length > 0 
        ? warningText 
        : FRONTGLAS_DATA.defaultWarning;

    const finalLieferumfang = lieferumfangHtml && lieferumfangHtml.trim().length > 0 
        ? lieferumfangHtml 
        : FRONTGLAS_DATA.defaultLieferumfangHtml;

    const finalHinweise = hinweiseHtml && hinweiseHtml.trim().length > 0 
        ? hinweiseHtml 
        : FRONTGLAS_DATA.defaultHinweiseHtml;

    // Convert multi-line warning text into safe HTML
    const formattedWarning = escapeHtml(finalWarning).replace(/\n/g, '<br>');

    // Product Image / Showcase (Either uploaded/linked image or high-detail SVG glass showcase)
    let imageElementHtml = '';
    if (imageUrl && imageUrl.trim().length > 0) {
        imageElementHtml = `
            <div class="hl-fg-img-wrapper">
                <img src="${escapeHtml(imageUrl.trim())}" alt="${escapeHtml(finalTitle)}" class="hl-fg-product-img">
                <div class="hl-fg-img-badge-oca">✨ OCA VORLAMINIERT</div>
            </div>`;
    } else {
        // High-end vector SVG showcase representing Frontglas with OCA layer
        imageElementHtml = `
            <div class="hl-fg-img-wrapper hl-fg-svg-wrap">
                <svg viewBox="0 0 360 440" class="hl-fg-glass-svg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#2a2d3d" stop-opacity="0.95"/>
                            <stop offset="50%" stop-color="#181a24" stop-opacity="0.98"/>
                            <stop offset="100%" stop-color="#0e1017" stop-opacity="1"/>
                        </linearGradient>
                        <linearGradient id="ocaGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="${theme.primary}" stop-opacity="0.2"/>
                            <stop offset="50%" stop-color="${theme.light}" stop-opacity="0.6"/>
                            <stop offset="100%" stop-color="${theme.primary}" stop-opacity="0.2"/>
                        </linearGradient>
                        <linearGradient id="reflection" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
                            <stop offset="40%" stop-color="#ffffff" stop-opacity="0.05"/>
                            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    <!-- Phone Front Glass Outline -->
                    <rect x="40" y="25" width="280" height="390" rx="36" fill="url(#glassGrad)" stroke="${theme.primary}" stroke-width="2.5"/>
                    <!-- Diagonal Light Reflection -->
                    <path d="M 45 60 L 220 25 L 315 25 L 45 380 Z" fill="url(#reflection)"/>
                    <!-- Speaker cutout -->
                    <rect x="135" y="42" width="90" height="9" rx="4.5" fill="#090a0f" stroke="#3e4359" stroke-width="1"/>
                    <!-- Camera lens cutout / Dynamic Island -->
                    <circle cx="180" cy="65" r="7.5" fill="#090a0f" stroke="#3e4359" stroke-width="1"/>
                    <!-- OCA adhesive film indicator layer -->
                    <rect x="62" y="90" width="236" height="295" rx="12" fill="none" stroke="url(#ocaGlow)" stroke-width="1.8" stroke-dasharray="6,4"/>
                    <!-- Central OCA Badge -->
                    <g transform="translate(180, 235)">
                        <rect x="-105" y="-36" width="210" height="72" rx="14" fill="#13151f" stroke="${theme.primary}" stroke-width="1.5"/>
                        <text x="0" y="-10" text-anchor="middle" fill="${theme.light}" font-size="14" font-weight="bold" font-family="sans-serif">OPTICAL CLEAR ADHESIVE</text>
                        <text x="0" y="14" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="900" font-family="sans-serif">OCA VORLAMINIERT</text>
                        <text x="0" y="27" text-anchor="middle" fill="#9ca3af" font-size="10" font-family="sans-serif">9H ERSATZGLAS INKL. KLEBEFOLIE</text>
                    </g>
                    <!-- Corner Spec Tags -->
                    <text x="180" y="402" text-anchor="middle" fill="#9ca3af" font-size="11" font-weight="600" font-family="sans-serif">100% PASSGENAU • GEPRÜFTE QUALITÄT</text>
                </svg>
                <div class="hl-fg-img-badge-oca">✨ OCA VORLAMINIERT</div>
            </div>`;
    }

    const ebayMsgUrl = `https://www.ebay.de/cnt/InterfereGate?sspagename=null&finduser=handylandheidelberg`;

    return `
<!-- ================= START HANDYLAND FRONTGLAS MIT OCA TEMPLATE ================= -->
<div class="hl-fg-container">
    <style>
        /* Scoped Frontglas Template Stylesheet - Zero JS Compliance */
        .hl-fg-container {
            max-width: 1040px;
            margin: 0 auto;
            padding: 20px 14px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #e2e8f0;
            background-color: #0b0d14;
            line-height: 1.6;
            box-sizing: border-box;
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
        }

        .hl-fg-container * {
            box-sizing: border-box;
        }

        /* ================= 1. HEADER WITH LOGO ================= */
        .hl-fg-header {
            background: linear-gradient(180deg, #131726 0%, #0d101a 100%);
            border: 1px solid ${theme.border};
            border-radius: 16px;
            padding: 24px 22px;
            margin-bottom: 22px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
            position: relative;
            overflow: hidden;
        }

        .hl-fg-header-inner {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
        }

        .hl-fg-logo-box {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .hl-fg-logo-img {
            height: 64px;
            width: auto;
            max-width: 180px;
            object-fit: contain;
            filter: drop-shadow(0 2px 10px rgba(0,0,0,0.5));
        }

        .hl-fg-logo-text {
            display: flex;
            flex-direction: column;
        }

        .hl-fg-logo-brand {
            font-size: 26px;
            font-weight: 900;
            letter-spacing: 0.5px;
            color: #ffffff;
            line-height: 1.1;
        }

        .hl-fg-logo-brand span {
            color: ${theme.primary};
        }

        .hl-fg-logo-sub {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            color: #94a3b8;
            margin-top: 4px;
            text-transform: uppercase;
        }

        .hl-fg-header-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .hl-fg-head-badge {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.12);
            padding: 6px 14px;
            border-radius: 30px;
            font-size: 12px;
            font-weight: 600;
            color: #cbd5e1;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .hl-fg-head-badge.hl-fg-badge-gold {
            background: ${theme.accentBg};
            border-color: ${theme.border};
            color: ${theme.light};
        }

        /* ================= 2. PRODUCT HERO SECTION ================= */
        .hl-fg-hero-card {
            background: #111422;
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 16px;
            padding: 26px;
            margin-bottom: 22px;
            display: flex;
            flex-wrap: wrap;
            gap: 28px;
            align-items: center;
        }

        .hl-fg-hero-visual {
            flex: 1 1 340px;
            max-width: 440px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hl-fg-img-wrapper {
            width: 100%;
            background: radial-gradient(circle at center, #1a1e30 0%, #0d0f18 100%);
            border: 1px solid ${theme.border};
            border-radius: 14px;
            padding: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.6);
        }

        .hl-fg-product-img {
            max-width: 100%;
            max-height: 380px;
            object-fit: contain;
            border-radius: 8px;
            filter: drop-shadow(0 6px 20px rgba(0,0,0,0.7));
        }

        .hl-fg-glass-svg {
            width: 100%;
            max-width: 320px;
            height: auto;
            filter: drop-shadow(0 8px 25px rgba(0,0,0,0.8));
        }

        .hl-fg-img-badge-oca {
            position: absolute;
            top: 14px;
            right: 14px;
            background: ${theme.gradient};
            color: #0b0d14;
            font-size: 11px;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 20px;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .hl-fg-hero-info {
            flex: 1 1 380px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .hl-fg-category-tag {
            display: inline-block;
            font-size: 11.5px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: ${theme.primary};
        }

        .hl-fg-product-title {
            font-size: 24px;
            font-weight: 800;
            color: #ffffff;
            margin: 0;
            line-height: 1.25;
        }

        .hl-fg-product-sub {
            font-size: 14px;
            color: #94a3b8;
            margin: 0;
        }

        .hl-fg-pills-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 4px;
        }

        .hl-fg-pill {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #e2e8f0;
            font-size: 12px;
            font-weight: 600;
            padding: 5px 12px;
            border-radius: 6px;
        }

        .hl-fg-pill span {
            color: ${theme.primary};
            font-weight: 700;
        }

        .hl-fg-price-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 16px 20px;
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
        }

        .hl-fg-selection-box {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .hl-fg-selection-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 15px;
            font-weight: 800;
            color: ${theme.light};
            letter-spacing: 0.3px;
        }

        .hl-fg-price-tax {
            font-size: 11.5px;
            color: #94a3b8;
            margin-top: 2px;
        }

        .hl-fg-shipping-status {
            display: flex;
            flex-direction: column;
            gap: 3px;
            font-size: 12.5px;
            color: #cbd5e1;
            font-weight: 500;
        }

        .hl-fg-shipping-status strong {
            color: #10b981;
        }

        /* ================= 3. CRUCIAL BUYER WARNING BOX ================= */
        .hl-fg-warning-box {
            background: rgba(239, 68, 68, 0.08);
            border: 2px solid #ef4444;
            border-radius: 14px;
            padding: 20px 22px;
            margin-bottom: 22px;
            box-shadow: 0 4px 20px rgba(239, 68, 68, 0.12);
        }

        .hl-fg-warning-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .hl-fg-warning-icon {
            font-size: 26px;
            line-height: 1;
        }

        .hl-fg-warning-title {
            font-size: 17px;
            font-weight: 800;
            color: #fca5a5;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }

        .hl-fg-warning-content {
            font-size: 13.5px;
            color: #fecaca;
            line-height: 1.6;
        }

        .hl-fg-warning-content strong {
            color: #ffffff;
            text-decoration: underline;
        }

        /* ================= 4. TECHNICAL FEATURES GRID ================= */
        .hl-fg-section-title {
            font-size: 19px;
            font-weight: 800;
            color: #ffffff;
            margin: 0 0 16px 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .hl-fg-section-title span {
            color: ${theme.primary};
        }

        .hl-fg-features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 14px;
            margin-bottom: 22px;
        }

        .hl-fg-feat-card {
            background: #111422;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 18px 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            transition: transform 0.2s ease;
        }

        .hl-fg-feat-icon {
            font-size: 24px;
            line-height: 1;
            margin-bottom: 4px;
        }

        .hl-fg-feat-heading {
            font-size: 15px;
            font-weight: 700;
            color: ${theme.light};
            margin: 0;
        }

        .hl-fg-feat-text {
            font-size: 13px;
            color: #94a3b8;
            margin: 0;
            line-height: 1.5;
        }

        /* ================= 5. LISTS & DETAILS CARDS ================= */
        .hl-fg-details-card {
            background: #111422;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 14px;
            padding: 22px;
            margin-bottom: 22px;
        }

        .hl-fg-list {
            margin: 0;
            padding-left: 20px;
            color: #cbd5e1;
            font-size: 13.5px;
            line-height: 1.8;
        }

        .hl-fg-list li {
            margin-bottom: 8px;
        }

        .hl-fg-list li strong {
            color: #ffffff;
        }

        /* Specification Table */
        .hl-fg-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            margin-top: 10px;
        }

        .hl-fg-table tr {
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .hl-fg-table tr:last-child {
            border-bottom: none;
        }

        .hl-fg-table td {
            padding: 10px 14px;
        }

        .hl-fg-table td.hl-fg-td-key {
            color: #94a3b8;
            font-weight: 600;
            width: 38%;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 6px 0 0 6px;
        }

        .hl-fg-table td.hl-fg-td-val {
            color: #f1f5f9;
            font-weight: 600;
        }

        /* ================= 6. TRUST & SHIPPING BAR ================= */
        .hl-fg-trust-bar {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 12px;
            margin-bottom: 22px;
        }

        .hl-fg-trust-item {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 10px;
            padding: 14px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .hl-fg-trust-icon {
            font-size: 22px;
            line-height: 1;
        }

        .hl-fg-trust-txt-title {
            font-size: 13px;
            font-weight: 700;
            color: #ffffff;
        }

        .hl-fg-trust-txt-sub {
            font-size: 11.5px;
            color: #94a3b8;
        }

        /* ================= 7. FOOTER WITH LOGO ================= */
        .hl-fg-footer {
            background: linear-gradient(180deg, #0d101a 0%, #080a11 100%);
            border: 1px solid ${theme.border};
            border-radius: 16px;
            padding: 26px 22px;
            text-align: center;
            position: relative;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
        }

        .hl-fg-footer-logo-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            margin-bottom: 14px;
        }

        .hl-fg-footer-logo-img {
            height: 48px;
            width: auto;
            object-fit: contain;
        }

        .hl-fg-footer-title {
            font-size: 22px;
            font-weight: 900;
            color: #ffffff;
            margin: 0;
        }

        .hl-fg-footer-title span {
            color: ${theme.primary};
        }

        .hl-fg-footer-desc {
            font-size: 13px;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto 16px auto;
            line-height: 1.6;
        }

        .hl-fg-footer-contact-btn {
            display: inline-block;
            background: ${theme.gradient};
            color: #0b0d14;
            font-size: 13px;
            font-weight: 800;
            text-decoration: none;
            padding: 10px 22px;
            border-radius: 30px;
            letter-spacing: 0.3px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            margin-bottom: 16px;
        }

        .hl-fg-footer-meta {
            font-size: 11.5px;
            color: #64748b;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            padding-top: 14px;
            margin-top: 14px;
        }

        /* Mobile Adjustments */
        @media (max-width: 640px) {
            .hl-fg-container {
                padding: 12px 8px;
            }
            .hl-fg-hero-card {
                padding: 16px;
                gap: 18px;
            }
            .hl-fg-product-title {
                font-size: 20px;
            }
            .hl-fg-header {
                padding: 16px 14px;
            }
            .hl-fg-header-inner {
                justify-content: center;
                text-align: center;
            }
            .hl-fg-logo-box {
                flex-direction: column;
                text-align: center;
            }
            .hl-fg-header-badges {
                justify-content: center;
            }
        }
    </style>

    <!-- ================= 1. HEADER WITH SHOP LOGO ================= -->
    <header class="hl-fg-header">
        <div class="hl-fg-header-inner">
            <div class="hl-fg-logo-box">
                <img src="${escapeHtml(shop.logoUrl)}" alt="HandyLand Heidelberg" class="hl-fg-logo-img">
                <div class="hl-fg-logo-text">
                    <div class="hl-fg-logo-brand">HANDY<span>LAND</span></div>
                    <div class="hl-fg-logo-sub">ERSATZTEIL-FACHHANDEL HEIDELBERG</div>
                </div>
            </div>
            <div class="hl-fg-header-badges">
                <div class="hl-fg-head-badge hl-fg-badge-gold">
                    <span>👑</span> Deutscher Fachhändler
                </div>
                <div class="hl-fg-head-badge">
                    <span>⚡</span> 1-2 Tage DHL Express
                </div>
                <div class="hl-fg-head-badge">
                    <span>🧾</span> Inkl. 19% MwSt.
                </div>
            </div>
        </div>
    </header>

    <!-- ================= 2. PRODUCT HERO SECTION ================= -->
    <section class="hl-fg-hero-card">
        <div class="hl-fg-hero-visual">
            ${imageElementHtml}
        </div>
        <div class="hl-fg-hero-info">
            <span class="hl-fg-category-tag">SMARTPHONE DISPLAY ERSATZTEIL • FRONTGLAS</span>
            <h1 class="hl-fg-product-title">${escapeHtml(finalTitle)}</h1>
            <p class="hl-fg-product-sub">Passgenaues Premium-Ersatzglas mit voraufgebrachter optischer OCA-Klebefolie (Optical Clear Adhesive).</p>

            <div class="hl-fg-pills-row">
                <div class="hl-fg-pill">Kompatibilität: <span>${escapeHtml(compatibilityPill)}</span></div>
                <div class="hl-fg-pill">Härtegrad: <span>9H Hartglas</span></div>
                <div class="hl-fg-pill">Kleber: <span>OCA integriert</span></div>
                <div class="hl-fg-pill">Ausführung: <span>${escapeHtml(color)}</span></div>
            </div>

            <div class="hl-fg-price-card">
                <div class="hl-fg-selection-box">
                    <div class="hl-fg-selection-badge">✨ Modellauswahl &amp; Varianten oben</div>
                    <div class="hl-fg-price-tax">Wählen Sie Ihr passendes Smartphone-Modell oben im Menü • Inkl. 19% MwSt.</div>
                </div>
                <div class="hl-fg-shipping-status">
                    <div>📦 <strong>${escapeHtml(shippingCost)}</strong></div>
                    <div>⚡ Sofort versandfertig aus Heidelberg (1-2 Werktage)</div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================= 3. CRUCIAL BUYER WARNING BOX ================= -->
    <section class="hl-fg-warning-box">
        <div class="hl-fg-warning-header">
            <span class="hl-fg-warning-icon">⚠️</span>
            <div class="hl-fg-warning-title">Wichtiger Hinweis: Bitte vor dem Kauf beachten!</div>
        </div>
        <div class="hl-fg-warning-content">
            ${formattedWarning}
        </div>
    </section>

    <!-- ================= 4. TECHNICAL FEATURES ================= -->
    <div class="hl-fg-section-title">
        <span>💎</span> Produkt-Highlights &amp; Technische Vorteile
    </div>

    <div class="hl-fg-features-grid">
        <div class="hl-fg-feat-card">
            <div class="hl-fg-feat-icon">🔬</div>
            <h4 class="hl-fg-feat-heading">Vorlaminierte OCA-Folie</h4>
            <p class="hl-fg-feat-text">Die optisch klare OCA-Klebeschicht ist bereits ab Werk gleichmäßig und blasenfrei aufgetragen. Kein Hantieren mit flüssigem LOCA-Kleber.</p>
        </div>

        <div class="hl-fg-feat-card">
            <div class="hl-fg-feat-icon">🛡️</div>
            <h4 class="hl-fg-feat-heading">9H Spezial-Hartglas</h4>
            <p class="hl-fg-feat-text">Extrem kratzfest, bruchresistent und stoßabsorbierend. Bietet maximalen Schutz gegen Schlüssel, Münzen und alltägliche Beanspruchung.</p>
        </div>

        <div class="hl-fg-feat-card">
            <div class="hl-fg-feat-icon">✨</div>
            <h4 class="hl-fg-feat-heading">Oleophobe Veredelung</h4>
            <p class="hl-fg-feat-text">Spezielle Nano-Beschichtung schützt vor störenden Fingerabdrücken, Öl und Schmutz. Garantiert originalgetreue Haptik beim Wischen.</p>
        </div>

        <div class="hl-fg-feat-card">
            <div class="hl-fg-feat-icon">👌</div>
            <h4 class="hl-fg-feat-heading">100% Passgenauigkeit</h4>
            <p class="hl-fg-feat-text">Exakt gefräste Konturen, Kanten und Aussparungen für Hörmuschel, Frontkamera und Sensorik für eine nahtlose Passform im Gehäuserahmen.</p>
        </div>
    </div>

    <!-- ================= 5. TECHNICAL SPECIFICATIONS ================= -->
    <section class="hl-fg-details-card">
        <div class="hl-fg-section-title">
            <span>⚙️</span> Technische Spezifikationen &amp; Lieferumfang
        </div>

        <table class="hl-fg-table">
            <tbody>
                <tr>
                    <td class="hl-fg-td-key">Produktart:</td>
                    <td class="hl-fg-td-val">Display-Frontglas (Ersatzscheibe / Refurbishing-Glas)</td>
                </tr>
                <tr>
                    <td class="hl-fg-td-key">Klebeschicht:</td>
                    <td class="hl-fg-td-val">Integrierte OCA-Klebefolie (Optical Clear Adhesive)</td>
                </tr>
                <tr>
                    <td class="hl-fg-td-key">Kompatibilität:</td>
                    <td class="hl-fg-td-val"><strong>${escapeHtml(compatibilityTable)}</strong></td>
                </tr>
                <tr>
                    <td class="hl-fg-td-key">Härtegrad:</td>
                    <td class="hl-fg-td-val">9H gehärtetes Schutzglas</td>
                </tr>
                <tr>
                    <td class="hl-fg-td-key">Farbe / Ausführung:</td>
                    <td class="hl-fg-td-val">${escapeHtml(color)}</td>
                </tr>
                <tr>
                    <td class="hl-fg-td-key">Lichtdurchlässigkeit:</td>
                    <td class="hl-fg-td-val">&gt; 99,5% (keine Farb- oder Helligkeitsverfälschung)</td>
                </tr>
                <tr>
                    <td class="hl-fg-td-key">Artikelzustand:</td>
                    <td class="hl-fg-td-val">Neuware &amp; beidseitig schutzfoliert</td>
                </tr>
            </tbody>
        </table>

        <div style="margin-top: 22px;">
            <div class="hl-fg-section-title" style="font-size: 16px;">
                <span>📦</span> Im Lieferumfang enthalten:
            </div>
            <ul class="hl-fg-list">
                ${finalLieferumfang}
            </ul>
        </div>

        <div style="margin-top: 20px;">
            <div class="hl-fg-section-title" style="font-size: 16px;">
                <span>🔧</span> Hinweise zu Montage &amp; Rückgabe:
            </div>
            <ul class="hl-fg-list">
                ${finalHinweise}
            </ul>
        </div>
    </section>

    <!-- ================= 6. TRUST BAR ================= -->
    <div class="hl-fg-trust-bar">
        <div class="hl-fg-trust-item">
            <span class="hl-fg-trust-icon">🚚</span>
            <div>
                <div class="hl-fg-trust-txt-title">Blitzschneller Versand</div>
                <div class="hl-fg-trust-txt-sub">DHL Paket mit Sendungsnummer</div>
            </div>
        </div>
        <div class="hl-fg-trust-item">
            <span class="hl-fg-trust-icon">📦</span>
            <div>
                <div class="hl-fg-trust-txt-title">Bruchsichere Verpackung</div>
                <div class="hl-fg-trust-txt-sub">Stabiler Hartkarton &amp; Polster</div>
            </div>
        </div>
        <div class="hl-fg-trust-item">
            <span class="hl-fg-trust-icon">🛡️</span>
            <div>
                <div class="hl-fg-trust-txt-title">100% Geprüfte Neuware</div>
                <div class="hl-fg-trust-txt-sub">Makellose OEM-Qualität</div>
            </div>
        </div>
        <div class="hl-fg-trust-item">
            <span class="hl-fg-trust-icon">🧾</span>
            <div>
                <div class="hl-fg-trust-txt-title">Deutsche Rechnung</div>
                <div class="hl-fg-trust-txt-sub">Inklusive 19% MwSt.</div>
            </div>
        </div>
    </div>

    <!-- ================= 7. FOOTER WITH SHOP LOGO ================= -->
    <footer class="hl-fg-footer">
        <div class="hl-fg-footer-logo-row">
            <img src="${escapeHtml(shop.logoUrl)}" alt="HandyLand Heidelberg" class="hl-fg-footer-logo-img">
            <div class="hl-fg-footer-title">HANDY<span>LAND</span> HEIDELBERG</div>
        </div>
        <p class="hl-fg-footer-desc">
            Ihr deutscher Fachhändler für Smartphone-Reparaturen, professionelle Ersatzteile und Zubehör. Haben Sie Fragen zur Passgenauigkeit oder benötigen Sie Unterstützung bei der Modellauswahl?
        </p>
        <div>
            <a href="${escapeHtml(ebayMsgUrl)}" target="_blank" class="hl-fg-footer-contact-btn">
                💬 Nachricht an HandyLand Heidelberg senden ➔
            </a>
        </div>
        <div class="hl-fg-footer-meta">
            <strong>${escapeHtml(shop.name)}</strong> • Inh. ${escapeHtml(shop.owner)} • ${escapeHtml(shop.street)}, ${escapeHtml(shop.zipCity)} • USt-IdNr.: ${escapeHtml(shop.vatId)}<br>
            Alle Markennamen und Warenzeichen sind Eigentum der jeweiligen Inhaber und dienen ausschließlich der Beschreibung der Kompatibilität.
        </div>
    </footer>
</div>
<!-- ================= END HANDYLAND FRONTGLAS MIT OCA TEMPLATE ================= -->
`;
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
