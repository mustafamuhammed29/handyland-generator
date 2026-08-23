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
        themeId = "gold",
        logoMode = "badge", // 'badge' | 'image' | 'text'
        logoUrl = "https://i.imgur.com/WhNVees.png",
        brand = "Apple",
        model = "iPhone 14 Pro",
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
        formLink = "https://mustafamuhammed29.github.io/handyland-generator/reparaturschein.pdf",
        videoToggle = "yes", // 'yes' | 'no'
        videoType = "direct", // 'direct' | 'link'
        videoUrl = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        videoPoster = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
        videoTitle = "Einblick in unsere Meisterwerkstatt",
        videoDesc = "Erlebe Schritt für Schritt, mit welcher Präzision und Sorgfalt wir dein Smartphone reparieren.",
        beforeAfterToggle = "yes", // 'yes' | 'no'
        beforeTitle = "",
        beforeDesc = "",
        afterTitle = "",
        afterDesc = "",
        featuresHtml = "",
        faq1Text = "",
        transparencyText = "",
        review1 = { text: "", author: "" },
        review2 = { text: "", author: "" },
        customNotes = ""
    } = config;

    const shop = REPAIR_DATA.shopInfo;
    const theme = REPAIR_DATA.themes[themeId] || REPAIR_DATA.themes.gold;

    // Logo Emblem / Image HTML
    let logoHtml = '';
    const finalLogoUrl = logoUrl || shop.logoUrl;
    if (logoMode === 'badge') {
        logoHtml = `
        <div class="hl-logo-wrapper">
            <div class="hl-logo-emblem">
                <img src="${escapeHtml(finalLogoUrl)}" alt="HandyLand Heidelberg" class="hl-logo-img">
                <div class="hl-logo-text-col">
                    <div class="hl-brand-heading">HANDY<span>LAND</span></div>
                    <div class="hl-brand-subheading">HEIDELBERG • MEISTERWERKSTATT</div>
                </div>
            </div>
        </div>`;
    } else if (logoMode === 'image') {
        logoHtml = `
        <div class="hl-logo-wrapper">
            <img src="${escapeHtml(finalLogoUrl)}" alt="HandyLand Heidelberg" class="hl-logo-img-standalone">
        </div>`;
    } else {
        logoHtml = `
        <div class="hl-logo-wrapper">
            <div class="hl-brand-heading-large">⚡ HANDY<span>LAND</span></div>
            <div class="hl-brand-subheading-large">FACHWERKSTATT HEIDELBERG</div>
        </div>`;
    }

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

    // Video Showcase Section HTML
    let videoHtml = '';
    if (videoToggle === 'yes' && videoUrl && videoUrl.trim().length > 0) {
        if (videoType === 'direct') {
            videoHtml = `
        <div class="hl-card hl-video-card" style="margin-bottom: 25px;">
            <div class="hl-card-header">
                <span class="hl-card-icon">🎬</span>
                <div class="hl-card-title">${escapeHtml(videoTitle)}</div>
            </div>
            <p class="hl-video-desc">${escapeHtml(videoDesc)}</p>
            <div class="hl-video-wrapper">
                <video class="hl-video-element" controls preload="metadata" poster="${escapeHtml(videoPoster)}">
                    <source src="${escapeHtml(videoUrl)}" type="video/mp4">
                    Dein Browser unterstützt kein HTML5 Video.
                </video>
            </div>
        </div>`;
        } else {
            videoHtml = `
        <div class="hl-card hl-video-card" style="margin-bottom: 25px;">
            <div class="hl-card-header">
                <span class="hl-card-icon">🎬</span>
                <div class="hl-card-title">${escapeHtml(videoTitle)}</div>
            </div>
            <p class="hl-video-desc">${escapeHtml(videoDesc)}</p>
            <div class="hl-video-showcase-box">
                <a href="${escapeHtml(videoUrl)}" target="_blank" class="hl-video-link-preview">
                    <img src="${escapeHtml(videoPoster || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80')}" alt="Reparatur Video" class="hl-video-poster-img">
                    <div class="hl-video-overlay">
                        <div class="hl-play-btn-circle">▶</div>
                        <span class="hl-play-btn-text">Werkstatt-Video ansehen ➔</span>
                    </div>
                </a>
            </div>
        </div>`;
        }
    }

    // Before / After Visual Showcase
    let beforeAfterHtml = '';
    if (beforeAfterToggle === 'yes') {
        const bTitle = beforeTitle || "Defekt & Eingeschränkt";
        const bDesc = beforeDesc || "Schaden beeinträchtigt die tägliche Nutzung und mindert den Wert.";
        const aTitle = afterTitle || "Wie neu aus der Box";
        const aDesc = afterDesc || "100% Funktionalität, makellose Optik und geprüfte Sicherheit.";

        beforeAfterHtml = `
        <div class="hl-card hl-ba-section" style="margin-bottom: 25px;">
            <div class="hl-card-header">
                <span class="hl-card-icon">✨</span>
                <div class="hl-card-title">Vorher vs. Nachher: Dein Ergebnis</div>
            </div>
            <div class="hl-ba-grid">
                <div class="hl-ba-col hl-ba-before">
                    <div class="hl-ba-badge hl-badge-red">VORHER</div>
                    <div class="hl-ba-icon">💔 📱</div>
                    <h4>${escapeHtml(bTitle)}</h4>
                    <p>${escapeHtml(bDesc)}</p>
                </div>

                <div class="hl-ba-arrow-box">
                    <div class="hl-ba-arrow">➔</div>
                    <span class="hl-ba-arrow-text">HandyLand Express</span>
                </div>

                <div class="hl-ba-col hl-ba-after">
                    <div class="hl-ba-badge hl-badge-green">NACHHER</div>
                    <div class="hl-ba-icon">✨ 📱</div>
                    <h4>${escapeHtml(aTitle)}</h4>
                    <p>${escapeHtml(aDesc)}</p>
                </div>
            </div>
        </div>`;
    }

    // Dynamic WhatsApp Pre-filled URL
    const waText = encodeURIComponent(`Hallo HandyLand Heidelberg! Ich interessiere mich für die eBay-Reparatur: ${brand} ${model} (${repairName}). Könnt ihr mir bitte weiterhelfen?`);
    const waLink = `https://wa.me/${shop.whatsappNumber}?text=${waText}`;

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
        --hl-primary: ${theme.primary};
        --hl-light: ${theme.light};
        --hl-dark: ${theme.dark};
        --hl-gradient: ${theme.gradient};
        --hl-accent-bg: ${theme.accentBg};
        --hl-border: ${theme.border};
        --hl-glow: ${theme.glow};

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        max-width: 960px;
        margin: 0 auto;
        background-color: #0f0f13;
        color: #f0f0f0;
        border: 1px solid #2a2a35;
        border-radius: 16px;
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

    /* Keyframe Animations (Pure CSS - Zero JS) */
    @keyframes hlShimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    @keyframes hlPulseGlow {
        0%, 100% { box-shadow: 0 0 15px rgba(37, 211, 102, 0.2); }
        50% { box-shadow: 0 0 25px rgba(37, 211, 102, 0.5); }
    }

    /* Live Workshop Status Bar */
    .hl-status-bar {
        background: #15151c;
        border-bottom: 1px solid #282834;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12.5px;
        flex-wrap: wrap;
        gap: 8px;
    }
    .hl-status-live {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #25D366;
        font-weight: 700;
    }
    .hl-pulse-dot {
        width: 8px;
        height: 8px;
        background-color: #25D366;
        border-radius: 50%;
        box-shadow: 0 0 8px #25D366;
    }
    .hl-status-loc {
        color: #a0a0b0;
        font-weight: 600;
    }
    
    /* Header Section */
    .hl-header {
        background: linear-gradient(180deg, #181822 0%, #0d0d12 100%);
        padding: 38px 20px;
        text-align: center;
        border-bottom: 2px solid var(--hl-primary);
        position: relative;
    }
    .hl-logo-wrapper {
        margin-bottom: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .hl-logo-emblem {
        display: inline-flex;
        align-items: center;
        gap: 16px;
        background: rgba(0, 0, 0, 0.65);
        border: 1px solid var(--hl-border);
        padding: 10px 24px;
        border-radius: 40px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }
    .hl-logo-img {
        height: 64px;
        width: auto;
        max-width: 140px;
        object-fit: contain;
        filter: drop-shadow(0 2px 8px rgba(212, 175, 55, 0.4));
    }
    .hl-logo-img-standalone {
        max-height: 95px;
        max-width: 280px;
        object-fit: contain;
        display: inline-block;
        filter: drop-shadow(0 4px 15px rgba(212, 175, 55, 0.45));
    }
    .hl-logo-text-col {
        text-align: left;
    }
    .hl-brand-heading {
        font-size: 24px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #ffffff;
        line-height: 1.1;
    }
    .hl-brand-heading span {
        color: var(--hl-primary);
    }
    .hl-brand-subheading {
        font-size: 9.5px;
        font-weight: 800;
        letter-spacing: 1.5px;
        color: var(--hl-light);
        margin-top: 3px;
    }
    .hl-brand-heading-large {
        font-size: 32px;
        font-weight: 900;
        letter-spacing: 3px;
        color: #ffffff;
    }
    .hl-brand-heading-large span {
        color: var(--hl-primary);
    }
    .hl-brand-subheading-large {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 2px;
        color: var(--hl-light);
        margin-top: 4px;
    }
    .hl-header-tagline {
        display: inline-block;
        background: var(--hl-accent-bg);
        color: var(--hl-primary);
        border: 1px solid var(--hl-primary);
        padding: 5px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 12px;
    }
    .hl-header h1 {
        font-size: 30px;
        font-weight: 900;
        color: #ffffff;
        margin-bottom: 8px;
        line-height: 1.3;
        letter-spacing: -0.5px;
    }
    .hl-header h1 span {
        color: var(--hl-primary);
    }
    .hl-header-subtitle {
        font-size: 16.5px;
        color: #a8a8b8;
    }
    
    /* Trust Bar */
    .hl-trust-bar {
        display: flex;
        justify-content: space-around;
        background: #14141c;
        border-bottom: 1px solid #262632;
        padding: 16px 12px;
        flex-wrap: wrap;
        gap: 10px;
    }
    .hl-trust-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 10px;
        font-size: 13px;
        font-weight: 700;
        color: var(--hl-light);
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
        background: #16161e;
        border: 1px solid #2a2a38;
        border-radius: 12px;
        padding: 24px;
        height: 100%;
    }
    .hl-card-header {
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid #2c2c3c;
        padding-bottom: 14px;
        margin-bottom: 18px;
    }
    .hl-card-icon {
        font-size: 22px;
    }
    .hl-card-title {
        font-size: 18.5px;
        font-weight: 800;
        color: var(--hl-primary);
    }

    /* Price Box */
    .hl-price-box {
        background: var(--hl-gradient);
        color: #000000;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        margin-bottom: 16px;
        box-shadow: var(--hl-glow);
    }
    .hl-price-num {
        font-size: 36px;
        font-weight: 900;
        display: block;
        line-height: 1.1;
    }
    .hl-price-sub {
        font-size: 13px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        opacity: 0.9;
    }

    /* Feature List */
    .hl-checklist {
        list-style: none;
        margin: 15px 0;
    }
    .hl-checklist li {
        position: relative;
        padding-left: 28px;
        margin-bottom: 11px;
        font-size: 14.5px;
        color: #e4e4ee;
        line-height: 1.45;
    }
    .hl-checklist li::before {
        content: "✔";
        position: absolute;
        left: 0;
        top: 0;
        color: var(--hl-primary);
        font-weight: 900;
        font-size: 15px;
    }

    /* Upsell / Promo Box */
    .hl-upsell-box {
        border-radius: 10px;
        padding: 16px;
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    .hl-upsell-paid {
        background: var(--hl-accent-bg);
        border: 1px dashed var(--hl-primary);
    }
    .hl-upsell-free {
        background: rgba(37, 211, 102, 0.1);
        border: 1px solid #25D366;
    }
    .hl-upsell-badge {
        font-size: 11px;
        font-weight: 800;
        color: var(--hl-primary);
        margin-bottom: 4px;
    }
    .hl-badge-green {
        color: #25D366;
    }
    .hl-badge-red {
        color: #ef4444;
    }
    .hl-upsell-content h4 {
        color: #ffffff;
        font-size: 14.5px;
        margin-bottom: 4px;
    }
    .hl-upsell-content p {
        font-size: 12.5px;
        color: #b0b0b8;
        line-height: 1.4;
    }
    .hl-upsell-price-tag {
        font-size: 16px;
        font-weight: 900;
        background: #000000;
        color: var(--hl-primary);
        padding: 8px 16px;
        border-radius: 20px;
        border: 1px solid var(--hl-primary);
        white-space: nowrap;
    }
    .hl-tag-free {
        background: #25D366;
        color: #000000;
        border: none;
    }

    /* Transparency Box */
    .hl-transparency {
        background: var(--hl-accent-bg);
        border-left: 3px solid var(--hl-primary);
        padding: 14px 16px;
        border-radius: 0 8px 8px 0;
        margin-top: 16px;
    }
    .hl-transparency h5 {
        color: var(--hl-primary);
        font-size: 13.5px;
        margin-bottom: 4px;
        font-weight: 800;
    }
    .hl-transparency p {
        font-size: 13px;
        color: #d0d0d8;
        line-height: 1.45;
    }

    /* Custom Note */
    .hl-custom-note {
        background: rgba(88, 166, 255, 0.1);
        border: 1px solid rgba(88, 166, 255, 0.3);
        border-radius: 10px;
        padding: 14px 18px;
        margin-bottom: 22px;
        display: flex;
        gap: 12px;
        align-items: center;
    }
    .hl-note-icon {
        font-size: 22px;
    }
    .hl-note-text {
        font-size: 13.5px;
        color: #d0e2ff;
    }

    /* Before / After Visual Showcase */
    .hl-ba-grid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    .hl-ba-col {
        flex: 1;
        background: #111116;
        border: 1px solid #282834;
        border-radius: 10px;
        padding: 20px 16px;
        text-align: center;
    }
    .hl-ba-before {
        border-color: rgba(239, 68, 68, 0.3);
        background: rgba(239, 68, 68, 0.03);
    }
    .hl-ba-after {
        border-color: rgba(37, 211, 102, 0.4);
        background: rgba(37, 211, 102, 0.04);
        box-shadow: 0 0 20px rgba(37, 211, 102, 0.1);
    }
    .hl-ba-badge {
        display: inline-block;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 1px;
        padding: 3px 10px;
        border-radius: 12px;
        margin-bottom: 12px;
    }
    .hl-ba-before .hl-ba-badge {
        background: rgba(239, 68, 68, 0.15);
        color: #ff6b6b;
        border: 1px solid rgba(239, 68, 68, 0.4);
    }
    .hl-ba-after .hl-ba-badge {
        background: rgba(37, 211, 102, 0.15);
        color: #25D366;
        border: 1px solid rgba(37, 211, 102, 0.4);
    }
    .hl-ba-icon {
        font-size: 32px;
        margin-bottom: 10px;
    }
    .hl-ba-col h4 {
        font-size: 15px;
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 6px;
    }
    .hl-ba-col p {
        font-size: 12.5px;
        color: #a0a0b0;
        line-height: 1.4;
    }
    .hl-ba-arrow-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
    }
    .hl-ba-arrow {
        width: 44px;
        height: 44px;
        background: var(--hl-gradient);
        color: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 900;
        box-shadow: var(--hl-glow);
    }
    .hl-ba-arrow-text {
        font-size: 10.5px;
        font-weight: 800;
        color: var(--hl-primary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    /* WhatsApp Interactive Live Support Card */
    .hl-whatsapp-card {
        background: linear-gradient(135deg, rgba(37, 211, 102, 0.12) 0%, rgba(18, 140, 126, 0.08) 100%);
        border: 1px solid rgba(37, 211, 102, 0.4);
        border-radius: 12px;
        padding: 22px 24px;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        animation: hlPulseGlow 3s infinite ease-in-out;
    }
    .hl-wa-info {
        display: flex;
        gap: 16px;
        align-items: center;
    }
    .hl-wa-avatar {
        width: 52px;
        height: 52px;
        background: #25D366;
        color: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        flex-shrink: 0;
    }
    .hl-wa-text h4 {
        color: #25D366;
        font-size: 16.5px;
        font-weight: 800;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .hl-wa-text p {
        font-size: 13.5px;
        color: #e0e0e0;
        line-height: 1.45;
    }
    .hl-wa-btn {
        background: #25D366;
        color: #000000;
        text-decoration: none;
        font-weight: 800;
        font-size: 14px;
        padding: 12px 22px;
        border-radius: 30px;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    }

    /* Timeline Process */
    .hl-timeline {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
    .hl-timeline-item {
        display: flex;
        gap: 16px;
    }
    .hl-timeline-badge {
        width: 34px;
        height: 34px;
        background: #111;
        border: 2px solid var(--hl-primary);
        color: var(--hl-primary);
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
        font-size: 15.5px;
        font-weight: 800;
        color: var(--hl-light);
        margin-bottom: 4px;
    }
    .hl-timeline-desc {
        font-size: 13.5px;
        color: #b0b0b8;
        line-height: 1.45;
    }
    .hl-form-box {
        background: var(--hl-accent-bg);
        border: 1px solid var(--hl-border);
        border-radius: 10px;
        padding: 15px;
        margin-top: 12px;
    }
    .hl-form-header {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        margin-bottom: 12px;
    }
    .hl-form-icon {
        font-size: 24px;
    }
    .hl-form-header h5 {
        color: var(--hl-primary);
        font-size: 14px;
        margin-bottom: 3px;
        font-weight: 800;
    }
    .hl-form-header p {
        font-size: 13px;
        color: #d0d0d8;
    }
    .hl-form-btn {
        display: inline-block;
        background: #25D366;
        color: #000000;
        font-weight: 800;
        font-size: 13px;
        padding: 9px 18px;
        border-radius: 6px;
        text-decoration: none;
        text-align: center;
    }

    /* Video Showcase Styles */
    .hl-video-card {
        background: #16161e;
        border: 1px solid #2a2a38;
        border-radius: 12px;
        padding: 24px;
    }
    .hl-video-desc {
        font-size: 13.5px;
        color: #b0b0b8;
        margin-bottom: 14px;
        line-height: 1.45;
    }
    .hl-video-wrapper {
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        background: #000000;
        border: 1px solid #333333;
    }
    .hl-video-element {
        width: 100%;
        max-height: 420px;
        display: block;
        border-radius: 8px;
        background: #000000;
    }
    .hl-video-showcase-box {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        background: #000000;
        border: 1px solid #333333;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }
    .hl-video-link-preview {
        display: block;
        position: relative;
        text-decoration: none;
        overflow: hidden;
    }
    .hl-video-poster-img {
        width: 100%;
        height: auto;
        max-height: 380px;
        object-fit: cover;
        display: block;
        opacity: 0.85;
        filter: brightness(0.85);
    }
    .hl-video-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.45);
        gap: 12px;
    }
    .hl-play-btn-circle {
        width: 64px;
        height: 64px;
        background: var(--hl-gradient);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000000;
        font-size: 24px;
        font-weight: 900;
        box-shadow: var(--hl-glow);
    }
    .hl-play-btn-text {
        background: rgba(0, 0, 0, 0.85);
        color: #ffffff;
        padding: 7px 18px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 800;
        border: 1px solid var(--hl-primary);
        letter-spacing: 0.5px;
    }

    /* Comparison Table / Box */
    .hl-comparison-grid {
        display: flex;
        gap: 16px;
        margin-bottom: 25px;
    }
    .hl-comp-col {
        flex: 1;
        border-radius: 10px;
        padding: 20px;
    }
    .hl-comp-us {
        background: var(--hl-accent-bg);
        border: 1px solid var(--hl-border);
    }
    .hl-comp-other {
        background: #131318;
        border: 1px solid #24242e;
        opacity: 0.8;
    }
    .hl-comp-head {
        font-size: 15.5px;
        font-weight: 900;
        text-align: center;
        padding-bottom: 12px;
        margin-bottom: 14px;
        border-bottom: 1px solid #2e2e3e;
    }
    .hl-comp-us .hl-comp-head {
        color: var(--hl-primary);
    }
    .hl-comp-other .hl-comp-head {
        color: #888898;
    }
    .hl-comp-list {
        list-style: none;
    }
    .hl-comp-list li {
        font-size: 13.5px;
        margin-bottom: 9px;
        display: flex;
        gap: 10px;
        line-height: 1.4;
    }
    .hl-check { color: #25D366; font-weight: bold; }
    .hl-cross { color: #ff4d4d; font-weight: bold; }

    /* Trust Banners */
    .hl-trust-banners {
        display: flex;
        gap: 16px;
        margin-bottom: 25px;
    }
    .hl-t-banner {
        flex: 1;
        padding: 16px;
        border-radius: 10px;
        display: flex;
        gap: 14px;
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
        font-size: 26px;
    }
    .hl-tb-text h5 {
        font-size: 14.5px;
        margin-bottom: 3px;
        font-weight: 800;
    }
    .hl-tb-blue h5 { color: #58a6ff; }
    .hl-tb-green h5 { color: #3fb950; }
    .hl-tb-text p {
        font-size: 12.5px;
        color: #b0b0b8;
        line-height: 1.4;
    }

    /* FAQ (Pure HTML details / summary - NO JS) */
    .hl-faq-item {
        background: #14141c;
        border: 1px solid #262634;
        border-radius: 8px;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .hl-faq-summary {
        padding: 14px 18px;
        font-size: 14.5px;
        font-weight: 800;
        color: var(--hl-light);
        cursor: pointer;
        outline: none;
    }
    .hl-faq-content {
        padding: 0 18px 16px 18px;
        font-size: 13.5px;
        color: #cccccc;
        line-height: 1.5;
    }

    /* Reviews */
    .hl-review-card {
        background: #14141c;
        border: 1px solid #262634;
        border-radius: 10px;
        padding: 16px;
        margin-bottom: 12px;
    }
    .hl-stars {
        color: #ffb703;
        font-size: 15px;
        margin-bottom: 6px;
    }
    .hl-review-text {
        font-size: 13.5px;
        font-style: italic;
        color: #cccccc;
        margin-bottom: 8px;
        line-height: 1.45;
    }
    .hl-review-author {
        font-size: 12.5px;
        font-weight: 800;
        color: var(--hl-primary);
    }

    /* Footer / Impressum */
    .hl-footer {
        background: #08080b;
        border-top: 2px solid var(--hl-primary);
        padding: 28px 24px;
    }
    .hl-footer-grid {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 22px;
    }
    .hl-footer-col h4 {
        color: var(--hl-primary);
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        margin-bottom: 10px;
        font-weight: 800;
    }
    .hl-footer-col p {
        font-size: 13px;
        color: #9999a9;
        line-height: 1.5;
    }
    .hl-copyright {
        text-align: center;
        margin-top: 22px;
        padding-top: 16px;
        border-top: 1px solid #1a1a24;
        font-size: 12px;
        color: #666676;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .hl-grid-2, .hl-comparison-grid, .hl-trust-banners, .hl-footer-grid, .hl-ba-grid, .hl-whatsapp-card {
            flex-direction: column;
            gap: 15px;
        }
        .hl-ba-arrow {
            transform: rotate(90deg);
        }
        .hl-header h1 {
            font-size: 24px;
        }
        .hl-content {
            padding: 20px 15px;
        }
    }
</style>

    <!-- Live Workshop Status Bar -->
    <div class="hl-status-bar">
        <div class="hl-status-live">
            <span class="hl-pulse-dot"></span>
            <span>Fachwerkstatt Heidelberg: Jetzt geöffnet &amp; Express-Eingang aktiv</span>
        </div>
        <div class="hl-status-loc">
            📍 Hertzstr. 1, 69126 Heidelberg
        </div>
    </div>

    <!-- Header -->
    <div class="hl-header">
        ${logoHtml}
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

        <!-- Before / After Visual Comparison -->
        ${beforeAfterHtml}

        <!-- WhatsApp Quick Live Chat Card -->
        <div class="hl-whatsapp-card">
            <div class="hl-wa-info">
                <div class="hl-wa-avatar">💬</div>
                <div class="hl-wa-text">
                    <h4>Fragen zum ${escapeHtml(brand)} ${escapeHtml(model)}?</h4>
                    <p>Schreib uns direkt auf WhatsApp! Unser Techniker berät dich kostenlos und unverbindlich vor dem Kauf.</p>
                </div>
            </div>
            <a href="${waLink}" target="_blank" class="hl-wa-btn">
                💬 WhatsApp Chat starten ➔
            </a>
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

        ${videoHtml}

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
                <h4>📞 Kontakt &amp; WhatsApp</h4>
                <p><strong>WhatsApp:</strong> ${escapeHtml(shop.phone)}</p>
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
