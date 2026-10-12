/**
 * HandyLand Generator Pro - Main Application Controller
 * Handles UI interactions, live preview rendering, clipboard copying, 
 * preset loading, custom template saving, SEO tags, Kleinanzeigen export,
 * customer slip auto-filling, theme switching, and file downloads.
 */

import { REPAIR_DATA, FRONTGLAS_DATA } from './data/repair-data.js?v=9.3';
import { generateEbayHtml } from './ebay-template.js?v=9.3';
import { generateFrontglasEbayHtml } from './frontglas-template.js?v=9.3';

// Application State
const state = {
    appMode: 'repair', // 'repair' | 'frontglas'
    currentTab: 'preview',
    currentDevice: 'desktop',
    currentTheme: 'gold',
    currentHtml: '',
    currentKleinanzeigenText: '',
    savedTemplates: [],
    matrixRows: [],
    frontglasImage: ''
};

// DOM Elements Cache
let elements = {};

function init() {
    cacheElements();
    populateSelectOptions();
    renderQuickPresets();
    loadSavedTemplates();
    renderModelChips();
    initMatrixRows();
    initFrontglasSection();
    bindEvents();
    loadSavedSettings();
    updateDynamicTexts();
    generateAndRender();
}

function cacheElements() {
    elements = {
        // App Mode Switcher Elements
        modeBtnRepair: document.getElementById('modeBtnRepair'),
        modeBtnFrontglas: document.getElementById('modeBtnFrontglas'),
        repairModeContainer: document.getElementById('repairModeContainer'),
        frontglasModeContainer: document.getElementById('frontglasModeContainer'),

        // Theme Swatches
        themeButtons: document.querySelectorAll('.btn-theme-swatch'),
        presetsContainer: document.getElementById('presetsContainer'),
        savedTemplatesList: document.getElementById('savedTemplatesList'),
        btnSaveTemplate: document.getElementById('btnSaveTemplate'),
        modelChipsContainer: document.getElementById('modelChipsContainer'),
        keywordsChipsContainer: document.getElementById('keywordsChipsContainer'),
        btnCopyKeywords: document.getElementById('btnCopyKeywords'),

        // Mode Toggles & Badges
        genericModeToggle: document.getElementById('genericModeToggle'),
        ebayComplianceToggle: document.getElementById('ebayComplianceToggle'),
        genericModelBadge: document.getElementById('genericModelBadge'),
        genericPriceBadge: document.getElementById('genericPriceBadge'),

        // Free Promo Gifts Controls
        freeGiftsControlBox: document.getElementById('freeGiftsControlBox'),
        masterGiftsToggle: document.getElementById('masterGiftsToggle'),
        giftCleaning: document.getElementById('giftCleaning'),
        giftCover: document.getElementById('giftCover'),
        giftLensGlass: document.getElementById('giftLensGlass'),

        // Inputs (Repair Mode)
        brandSelect: document.getElementById('brandInput'),
        modelInput: document.getElementById('modelInput'),
        repairTypeSelect: document.getElementById('repairTypeInput'),
        priceInput: document.getElementById('priceInput'),
        shippingCostInput: document.getElementById('shippingCostInput'),
        warrantyInput: document.getElementById('warrantyInput'),
        processingTimeInput: document.getElementById('processingTimeInput'),
        
        logoModeSelect: document.getElementById('logoModeSelect'),
        logoUrlInput: document.getElementById('inputLogoUrl'),
        
        // Before / After & Matrix
        beforeAfterToggleSelect: document.getElementById('beforeAfterToggle'),
        baSettingsGroup: document.getElementById('baSettingsGroup'),
        beforeTitleInput: document.getElementById('inputBeforeTitle'),
        beforeDescInput: document.getElementById('inputBeforeDesc'),
        afterTitleInput: document.getElementById('inputAfterTitle'),
        afterDescInput: document.getElementById('inputAfterDesc'),
        matrixToggleSelect: document.getElementById('matrixToggle'),
        matrixEditorBox: document.getElementById('matrixEditorBox'),
        matrixRowsContainer: document.getElementById('matrixRowsContainer'),
        btnAddMatrixRow: document.getElementById('btnAddMatrixRow'),

        dynFeatures: document.getElementById('dynFeatures'),
        dynFaq1: document.getElementById('dynFaq1'),
        dynTransparency: document.getElementById('dynTransparency'),
        appleOemToggleSelect: document.getElementById('appleOemToggle'),
        customNotes: document.getElementById('customNotes'),
        
        // Video Showcase
        videoToggleSelect: document.getElementById('videoToggle'),
        videoSettingsGroup: document.getElementById('videoSettingsGroup'),
        videoTypeSelect: document.getElementById('videoType'),
        videoUrlInput: document.getElementById('inputVideoUrl'),
        videoPosterInput: document.getElementById('inputVideoPoster'),
        videoTitleInput: document.getElementById('inputVideoTitle'),
        videoDescInput: document.getElementById('inputVideoDesc'),

        review1Text: document.getElementById('review1Text'),
        review1Author: document.getElementById('review1Author'),
        review2Text: document.getElementById('review2Text'),
        review2Author: document.getElementById('review2Author'),
        
        formToggleSelect: document.getElementById('formToggle'),
        formLinkInput: document.getElementById('inputFormLink'),
        
        // Customer Pre-fill Inputs
        custName: document.getElementById('custName'),
        custEbay: document.getElementById('custEbay'),
        custAddress: document.getElementById('custAddress'),
        custZipCity: document.getElementById('custZipCity'),
        custPhone: document.getElementById('custPhone'),
        custPin: document.getElementById('custPin'),
        custNotes: document.getElementById('custNotes'),
        btnOpenFilledForm: document.getElementById('btnOpenFilledForm'),

        // SEO Box (Repair)
        seoTitleInput: document.getElementById('seoTitleInput'),
        seoCounter: document.getElementById('titleCharCount'),
        btnCopySeo: document.getElementById('btnCopySeo'),

        // Frontglas mit OCA Controls
        fgSeoTitleInput: document.getElementById('fgSeoTitleInput'),
        fgTitleCharCount: document.getElementById('fgTitleCharCount'),
        fgBtnCopySeo: document.getElementById('fgBtnCopySeo'),
        fgBrandInput: document.getElementById('fgBrandInput'),
        fgColorInput: document.getElementById('fgColorInput'),
        fgShippingCostInput: document.getElementById('fgShippingCostInput'),
        fgImageFileInput: document.getElementById('fgImageFileInput'),
        fgBtnUploadFile: document.getElementById('fgBtnUploadFile'),
        fgImageUrlInput: document.getElementById('fgImageUrlInput'),
        fgImagePreviewRow: document.getElementById('fgImagePreviewRow'),
        fgImageThumb: document.getElementById('fgImageThumb'),
        fgImageThumbTitle: document.getElementById('fgImageThumbTitle'),
        fgBtnRemoveImage: document.getElementById('fgBtnRemoveImage'),
        fgWarningInput: document.getElementById('fgWarningInput'),
        fgSpecsInput: document.getElementById('fgSpecsInput'),
        fgLieferumfangInput: document.getElementById('fgLieferumfangInput'),
        fgHinweiseInput: document.getElementById('fgHinweiseInput'),
        
        // Main Actions & Tabs
        btnGenerate: document.getElementById('btnGenerate'),
        tabPreviewBtn: document.getElementById('tabPreviewBtn'),
        tabCodeBtn: document.getElementById('tabCodeBtn'),
        tabKleinanzeigenBtn: document.getElementById('tabKleinanzeigenBtn'),
        panePreview: document.getElementById('pane-preview'),
        paneCode: document.getElementById('pane-code'),
        paneKleinanzeigen: document.getElementById('pane-kleinanzeigen'),
        previewViewport: document.getElementById('previewViewport'),
        previewIframe: document.getElementById('previewIframe'),
        codeOutput: document.getElementById('code-output'),
        kleinanzeigenOutput: document.getElementById('kleinanzeigen-output'),
        btnCopyCodeTop: document.getElementById('btnCopyCodeTop'),
        btnCopyCodeBottom: document.getElementById('btnCopyCodeBottom'),
        btnCopyKleinanzeigen: document.getElementById('btnCopyKleinanzeigen'),
        btnDownloadHtmlTop: document.getElementById('btnDownloadHtmlTop'),
        btnDownloadHtmlBottom: document.getElementById('btnDownloadHtmlBottom'),
        
        // Device switcher
        deviceButtons: document.querySelectorAll('.btn-device'),
        
        // Toast
        toast: document.getElementById('toastNotification')
    };
}

function populateSelectOptions() {
    elements.brandSelect.innerHTML = REPAIR_DATA.brands.map(b => 
        `<option value="${b.id}">${b.name}</option>`
    ).join('');

    elements.repairTypeSelect.innerHTML = REPAIR_DATA.repairTypes.map(r => 
        `<option value="${r.id}">${r.name}</option>`
    ).join('');
}

function renderQuickPresets() {
    if (!elements.presetsContainer) return;
    elements.presetsContainer.innerHTML = REPAIR_DATA.quickPresets.map(p => `
        <button type="button" class="btn-preset ${p.featured ? 'featured' : ''}" data-preset-id="${p.id}">
            ${p.name}
        </button>
    `).join('');

    elements.presetsContainer.querySelectorAll('.btn-preset').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const presetId = e.currentTarget.getAttribute('data-preset-id');
            loadPreset(presetId);
        });
    });
}

function loadPreset(presetId) {
    const preset = REPAIR_DATA.quickPresets.find(p => p.id === presetId);
    if (!preset) return;

    elements.brandSelect.value = preset.brand;
    elements.modelInput.value = preset.model;
    elements.repairTypeSelect.value = preset.repairType;
    elements.priceInput.value = preset.price;

    // Handle generic mode, eBay compliance, and free gifts presets
    if (elements.genericModeToggle) {
        elements.genericModeToggle.checked = preset.genericMode !== undefined ? preset.genericMode : true;
    }
    if (elements.ebayComplianceToggle) {
        elements.ebayComplianceToggle.checked = preset.ebayCompliance !== undefined ? preset.ebayCompliance : true;
    }
    if (preset.freeGifts) {
        if (elements.masterGiftsToggle) elements.masterGiftsToggle.checked = true;
        if (elements.giftCleaning) elements.giftCleaning.checked = true;
        if (elements.giftCover) elements.giftCover.checked = true;
        if (elements.giftLensGlass) elements.giftLensGlass.checked = true;
    }

    renderModelChips();
    updateDynamicTexts();
    generateAndRender();
    showToast(`⚡ Schnellvorlage "${preset.name}" geladen!`);
}

function renderModelChips() {
    if (!elements.modelChipsContainer) return;
    const currentBrand = elements.brandSelect.value;
    const brandData = REPAIR_DATA.brands.find(b => b.id === currentBrand);
    
    if (brandData && brandData.quickModels) {
        elements.modelChipsContainer.innerHTML = brandData.quickModels.map(m => `
            <span class="chip" data-model="${m}">${m}</span>
        `).join('');

        elements.modelChipsContainer.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                const model = e.currentTarget.getAttribute('data-model');
                elements.modelInput.value = model;
                updateSeoTitle();
                generateAndRender();
            });
        });
    } else {
        elements.modelChipsContainer.innerHTML = '';
    }
}

// ================= FRONTGLAS MIT OCA COMPONENT =================
function initFrontglasSection() {
    if (!elements.fgBrandInput) return;

    // Populate Brand select
    elements.fgBrandInput.innerHTML = FRONTGLAS_DATA.brands.map(b => 
        `<option value="${b.id}">${b.name}</option>`
    ).join('');

    // Pre-fill textareas with default texts
    if (elements.fgWarningInput && !elements.fgWarningInput.value) {
        elements.fgWarningInput.value = FRONTGLAS_DATA.defaultWarning;
    }
    if (elements.fgSpecsInput && !elements.fgSpecsInput.value) {
        elements.fgSpecsInput.value = FRONTGLAS_DATA.defaultSpecsHtml;
    }
    if (elements.fgLieferumfangInput && !elements.fgLieferumfangInput.value) {
        elements.fgLieferumfangInput.value = FRONTGLAS_DATA.defaultLieferumfangHtml;
    }
    if (elements.fgHinweiseInput && !elements.fgHinweiseInput.value) {
        elements.fgHinweiseInput.value = FRONTGLAS_DATA.defaultHinweiseHtml;
    }

    updateFrontglasSeoTitle();
}

function updateFrontglasSeoTitle() {
    if (!elements.fgSeoTitleInput) return;
    const brand = elements.fgBrandInput ? elements.fgBrandInput.value : 'Universal';
    
    // Auto-compose universal high-converting eBay title (up to 80 chars)
    let title = 'Frontglas mit OCA Folie für Smartphone Display Glas Scheibe 9H';
    if (brand && brand !== 'Universal' && brand !== 'Other') {
        const brandLabel = (brand === 'Apple') ? 'Apple iPhone' : (brand === 'Samsung') ? 'Samsung Galaxy' : brand;
        title = `Frontglas mit OCA Folie für ${brandLabel} Display Glas Scheibe 9H`;
    }
    elements.fgSeoTitleInput.value = title;
    
    const count = title.length;
    if (elements.fgTitleCharCount) {
        elements.fgTitleCharCount.innerText = `${count}/80`;
        if (count > 80) {
            elements.fgTitleCharCount.style.color = '#ef4444';
            elements.fgTitleCharCount.style.borderColor = '#ef4444';
        } else if (count >= 70) {
            elements.fgTitleCharCount.style.color = '#f59e0b';
            elements.fgTitleCharCount.style.borderColor = '#f59e0b';
        } else {
            elements.fgTitleCharCount.style.color = '#25D366';
            elements.fgTitleCharCount.style.borderColor = 'rgba(37, 211, 102, 0.4)';
        }
    }
}

function switchAppMode(mode) {
    state.appMode = mode;

    if (mode === 'repair') {
        if (elements.modeBtnRepair) elements.modeBtnRepair.classList.add('active');
        if (elements.modeBtnFrontglas) elements.modeBtnFrontglas.classList.remove('active');
        if (elements.repairModeContainer) elements.repairModeContainer.style.display = 'block';
        if (elements.frontglasModeContainer) elements.frontglasModeContainer.style.display = 'none';

        if (elements.tabKleinanzeigenBtn) {
            elements.tabKleinanzeigenBtn.style.display = 'inline-flex';
        }
        showToast('🛠️ Reparatur-Service Generator aktiv');
    } else {
        if (elements.modeBtnFrontglas) elements.modeBtnFrontglas.classList.add('active');
        if (elements.modeBtnRepair) elements.modeBtnRepair.classList.remove('active');
        if (elements.repairModeContainer) elements.repairModeContainer.style.display = 'none';
        if (elements.frontglasModeContainer) elements.frontglasModeContainer.style.display = 'flex';

        if (elements.tabKleinanzeigenBtn) {
            elements.tabKleinanzeigenBtn.style.display = 'none';
            if (state.currentTab === 'kleinanzeigen') {
                switchTab('preview');
            }
        }
        showToast('💎 Frontglas mit OCA Ersatzteil-Generator aktiv');
    }

    generateAndRender();
}

function handleFrontglasFileUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showToast('⚠️ Bitte eine gültige Bilddatei auswählen!');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const dataUrl = event.target.result;
        state.frontglasImage = dataUrl;
        setFrontglasImagePreview(dataUrl, file.name);
        if (elements.fgImageUrlInput) elements.fgImageUrlInput.value = '';
        generateAndRender();
        showToast('✅ Produktbild geladen & im Angebot eingefügt!');
    };
    reader.readAsDataURL(file);
}

function handleFrontglasImageUrlInput() {
    const url = elements.fgImageUrlInput ? elements.fgImageUrlInput.value.trim() : '';
    if (url) {
        state.frontglasImage = url;
        setFrontglasImagePreview(url, 'Bild-URL');
    } else if (!elements.fgImageFileInput || !elements.fgImageFileInput.files.length) {
        state.frontglasImage = '';
        clearFrontglasImagePreview();
    }
    generateAndRender();
}

function setFrontglasImagePreview(src, name) {
    if (!elements.fgImagePreviewRow) return;
    if (elements.fgImageThumb) elements.fgImageThumb.src = src;
    if (elements.fgImageThumbTitle) elements.fgImageThumbTitle.innerText = name || 'Produktbild';
    elements.fgImagePreviewRow.style.display = 'flex';
}

function clearFrontglasImagePreview() {
    state.frontglasImage = '';
    if (elements.fgImageFileInput) elements.fgImageFileInput.value = '';
    if (elements.fgImageUrlInput) elements.fgImageUrlInput.value = '';
    if (elements.fgImagePreviewRow) elements.fgImagePreviewRow.style.display = 'none';
    generateAndRender();
    showToast('🗑️ Produktbild entfernt (Standard-Grafik aktiv).');
}

// ================= CUSTOM TEMPLATES (LocalStorage) =================
function saveCustomTemplate() {
    const defaultName = `${elements.brandSelect.value} ${elements.modelInput.value} (${elements.repairTypeSelect.value})`;
    const name = prompt('Name für deine Vorlage eingeben:', defaultName);
    if (!name || name.trim().length === 0) return;

    const tpl = {
        id: 'tpl_' + Date.now(),
        name: name.trim(),
        brand: elements.brandSelect.value,
        model: elements.modelInput.value,
        repairType: elements.repairTypeSelect.value,
        price: elements.priceInput.value,
        shipping: elements.shippingCostInput.value,
        warranty: elements.warrantyInput.value,
        processing: elements.processingTimeInput.value,
        theme: state.currentTheme
    };

    state.savedTemplates.push(tpl);
    try {
        localStorage.setItem('hl_custom_templates', JSON.stringify(state.savedTemplates));
    } catch (e) {}

    renderSavedTemplates();
    showToast(`💾 Vorlage "${name}" erfolgreich gespeichert!`);
}

function loadSavedTemplates() {
    try {
        const data = localStorage.getItem('hl_custom_templates');
        if (data) {
            state.savedTemplates = JSON.parse(data) || [];
        }
    } catch (e) {
        state.savedTemplates = [];
    }
    renderSavedTemplates();
}

function renderSavedTemplates() {
    if (!elements.savedTemplatesList) return;
    if (state.savedTemplates.length === 0) {
        elements.savedTemplatesList.innerHTML = '<span style="font-size: 11px; color: #666;">Keine eigenen Vorlagen gespeichert.</span>';
        return;
    }

    elements.savedTemplatesList.innerHTML = state.savedTemplates.map(t => `
        <div class="saved-chip" data-tpl-id="${t.id}">
            <span>📁 ${t.name}</span>
            <span class="saved-chip-del" data-del-id="${t.id}" title="Vorlage löschen">×</span>
        </div>
    `).join('');

    elements.savedTemplatesList.querySelectorAll('.saved-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            if (e.target.classList.contains('saved-chip-del')) return;
            const tplId = chip.getAttribute('data-tpl-id');
            applyCustomTemplate(tplId);
        });
    });

    elements.savedTemplatesList.querySelectorAll('.saved-chip-del').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const delId = btn.getAttribute('data-del-id');
            deleteCustomTemplate(delId);
        });
    });
}

function applyCustomTemplate(tplId) {
    const tpl = state.savedTemplates.find(t => t.id === tplId);
    if (!tpl) return;

    elements.brandSelect.value = tpl.brand;
    elements.modelInput.value = tpl.model;
    elements.repairTypeSelect.value = tpl.repairType;
    elements.priceInput.value = tpl.price;
    elements.shippingCostInput.value = tpl.shipping;
    elements.warrantyInput.value = tpl.warranty;
    elements.processingTimeInput.value = tpl.processing;

    if (tpl.theme) {
        state.currentTheme = tpl.theme;
        elements.themeButtons.forEach(b => {
            if (b.getAttribute('data-theme') === tpl.theme) b.classList.add('active');
            else b.classList.remove('active');
        });
    }

    renderModelChips();
    updateDynamicTexts();
    generateAndRender();
    showToast(`📂 Vorlage "${tpl.name}" geladen!`);
}

function deleteCustomTemplate(tplId) {
    state.savedTemplates = state.savedTemplates.filter(t => t.id !== tplId);
    try {
        localStorage.setItem('hl_custom_templates', JSON.stringify(state.savedTemplates));
    } catch (e) {}
    renderSavedTemplates();
    showToast('🗑️ Vorlage gelöscht.');
}

// ================= SEO KEYWORDS GENERATOR =================
function renderSeoKeywords() {
    if (!elements.keywordsChipsContainer) return;
    const brand = elements.brandSelect.value;
    const model = elements.modelInput.value.trim();
    const typeObj = REPAIR_DATA.repairTypes.find(r => r.id === elements.repairTypeSelect.value);
    const kw = typeObj ? typeObj.seoKeyword : "Reparatur";
    const isGeneric = (elements.genericModeToggle && elements.genericModeToggle.checked) || brand === 'Universal';

    let dynamicTags = [];
    if (isGeneric) {
        dynamicTags = [
            `Smartphone ${kw}`,
            `Handy Reparatur Express`,
            `Alle Marken & Modelle`,
            `Express Reparatur Heidelberg`,
            `12 Monate Garantie`,
            `Rechnung inkl. 19% MwSt`,
            `DHL versicherter Versand`,
            `Kein Datenverlust`,
            `HandyLand Meisterwerkstatt`,
            `Display Akku Reparatur`
        ];
    } else {
        dynamicTags = [
            `${brand} ${model}`,
            `${brand} ${kw}`,
            `${model} ${kw}`,
            `Express Reparatur Heidelberg`,
            `12 Monate Garantie`,
            `Rechnung inkl. 19% MwSt`,
            `DHL versicherter Versand`,
            `Kein Datenverlust`,
            `HandyLand Meisterwerkstatt`,
            `Display Glas Tausch`
        ];
    }

    elements.keywordsChipsContainer.innerHTML = dynamicTags.map(t => `
        <span class="kw-chip">${t}</span>
    `).join('');

    return dynamicTags.join(', ');
}

// ================= KLEINANZEIGEN.DE PLAIN-TEXT GENERATOR =================
function generateKleinanzeigenText(config) {
    const shop = REPAIR_DATA.shopInfo;
    const isGeneric = config.genericMode || config.brand === 'Universal';
    const cleanRepairName = (config.repairName || '').replace(/[^\w\s\/\-\&äöüÄÖÜß]/g, '').trim();
    const waDeviceStr = isGeneric 
        ? `Smartphone-Reparatur (${cleanRepairName})`
        : `${config.brand} ${config.model} (${cleanRepairName})`;

    const waText = encodeURIComponent(`Hallo HandyLand Heidelberg! Ich habe euer Inserat auf Kleinanzeigen gesehen: ${waDeviceStr}. Könnt ihr mir bitte weiterhelfen?`);
    const waUrl = `https://wa.me/${shop.whatsappNumber}?text=${waText}`;

    let giftsSection = '';
    const isEligibleCategory = ['display', 'battery', 'backcover', 'charging'].includes(config.repairTypeId);
    if (config.freeGifts && isEligibleCategory) {
        let giftsList = [];
        if (config.freeGifts.cleaning !== false) {
            giftsList.push("✔ 🧼 Professionelle Außenreinigung des Geräts (Gehäuse, Lautsprechergitter & Ladebuchse sauber & desinfiziert)");
        }
        if (config.freeGifts.cover !== false) {
            if (config.repairTypeId === 'display') {
                giftsList.push("✔ 🛡️ Premium 9H Panzerglas Displayschutz (wird direkt fachgerecht & blasenfrei auf dem neuen Display montiert)");
            } else {
                giftsList.push("✔ 🛡️ Premium 9H Panzerglas Displayschutz (falls bereits intakt vorhanden, als neues Extra-Glas beigelegt)");
            }
        }
        if (config.freeGifts.lensGlass !== false) {
            giftsList.push("✔ 📸 Kamera-Linsenschutz Schutzglas (falls bereits intakt vorhanden, als neues Extra-Glas beigelegt)");
        }
        if (giftsList.length > 0) {
            giftsSection = `\n═══════════════════════════════════════════════\n🎁 3 FESTE GRATIS-AKTIONEN INKLUSIVE:\n═══════════════════════════════════════════════\n${giftsList.join('\n')}\n`;
        }
    }

    const deviceLabel = isGeneric ? 'Alle Smartphone-Modelle & Marken (Universal)' : `${config.brand} ${config.model}`;
    const priceLabel = isGeneric ? 'Siehe Modellauswahl / Varianten (inkl. 19% MwSt.)' : `${config.price} (inkl. 19% MwSt.)`;

    return `⚡ HandyLand Heidelberg • Professionelle Smartphone Reparatur ⚡
═══════════════════════════════════════════════

📱 GERÄT: ${deviceLabel}
🛠️ REPARATURART: ${config.repairName}
💶 PREIS: ${priceLabel}
🛡️ GARANTIE: ${config.warrantyMonths} Monate Meister-Garantie
⚡ DAUER: Express Bearbeitung (${config.processingTime})
${giftsSection}
═══════════════════════════════════════════════
⭐ UNSERE LEISTUNGEN & VORTEILE:
═══════════════════════════════════════════════
✔ Erstklassige Ersatzteile in geprüfter Meisterqualität
✔ 100% DATENSCHUTZ: Deine Fotos, WhatsApp-Chats & Daten bleiben sicher erhalten
✔ DHL Express Rückversand versichert mit Sendungsverfolgabe
✔ Auch persönliche Abgabe & Abholung in unserer Werkstatt in Heidelberg möglich!
✔ Offizielle Rechnung mit ausgewiesener MwSt. (19%)

═══════════════════════════════════════════════
📦 SO EINFACH FUNKTIONIERT DER EINSENDESERVICE:
═══════════════════════════════════════════════
1. Kontaktiere uns kurz per WhatsApp oder Nachricht.
2. Sende dein Gerät sicher verpackt an unsere Fachwerkstatt.
3. Nach erfolgreicher Reparatur & Endtest senden wir dein Smartphone blitzschnell per DHL zurück.

═══════════════════════════════════════════════
📍 KONTAKT & WERKSTATT-STANDORT:
═══════════════════════════════════════════════
HandyLand Heidelberg
Inh. Alsafi Nawfal
Hertzstr. 1
69126 Heidelberg

💬 WhatsApp Support: https://wa.me/${shop.whatsappNumber}
📞 Telefon / Hotline: ${shop.phone}
✉️ E-Mail: ${shop.email}
🏛️ USt-IdNr.: ${shop.vatId}
🌐 eBay Shop: ${shop.ebayShopUrl}`;
}

// ================= COMPATIBILITY MATRIX MANAGER =================
function initMatrixRows() {
    const brand = elements.brandSelect ? elements.brandSelect.value : 'Apple';
    const repairType = elements.repairTypeSelect ? elements.repairTypeSelect.value : 'display';
    
    // Default quality label based on repair type
    let defaultQuality = "Kompatibel (Erstausrüsterqualität)";
    if (repairType === 'display') {
        defaultQuality = (brand === 'Samsung') ? "Kompatibel (Dynamic AMOLED Qualität)" : "Kompatibel (HQ Display - kein Original)";
    } else if (repairType === 'battery') {
        defaultQuality = "Kompatibel (HQ Li-Ion 100% Kapazität)";
    } else if (repairType === 'charging') {
        defaultQuality = "Kompatibel (HQ Fast-Charge Modul)";
    } else if (repairType === 'backcover') {
        defaultQuality = "Kompatibel (Passgenaues Ersatzglas)";
    }

    if (REPAIR_DATA.compatibilityMatrix && REPAIR_DATA.compatibilityMatrix[brand]) {
        state.matrixRows = REPAIR_DATA.compatibilityMatrix[brand].map(row => ({
            series: row.series,
            models: row.models,
            status: defaultQuality
        }));
    } else {
        state.matrixRows = [
            { series: `${brand} Serie 1`, models: `${brand} Standard / Pro`, status: defaultQuality }
        ];
    }

    renderMatrixEditorRows();
}

function renderMatrixEditorRows() {
    if (!elements.matrixRowsContainer) return;
    
    elements.matrixRowsContainer.innerHTML = state.matrixRows.map((row, idx) => `
        <div class="matrix-row-item" data-row-idx="${idx}">
            <div class="matrix-row-top">
                <input type="text" class="matrix-input-series" placeholder="Baureihe" value="${escapeHtml(row.series)}" title="Serie / Baureihe">
                <input type="text" class="matrix-input-models" placeholder="Modelle" value="${escapeHtml(row.models)}" title="Unterstützte Modelle">
                <button type="button" class="btn-del-matrix-row" data-del-idx="${idx}" title="Diese Modellreihe löschen">🗑️</button>
            </div>
            <select class="matrix-input-status" title="Ersatzteil-Qualität & Status">
                <option value="Kompatibel (Erstausrüsterqualität)" ${row.status.includes('Erstausrüsterqualität') ? 'selected' : ''}>✔ Kompatibel (HQ Erstausrüsterqualität)</option>
                <option value="Kompatibel (HQ Display - kein Original)" ${row.status.includes('HQ Display') || row.status.includes('kein Original') ? 'selected' : ''}>✔ Kompatibel (HQ Display - kein Original)</option>
                <option value="Kompatibel (Dynamic AMOLED Qualität)" ${row.status.includes('AMOLED') ? 'selected' : ''}>✔ Kompatibel (Dynamic AMOLED Qualität)</option>
                <option value="Kompatibel (HQ Li-Ion 100% Kapazität)" ${row.status.includes('Kapazität') ? 'selected' : ''}>✔ Kompatibel (HQ Li-Ion 100% Kapazität)</option>
                <option value="Original Refurbished Qualität" ${row.status.includes('Refurbished') ? 'selected' : ''}>✔ Original Refurbished Qualität</option>
                <option value="Original AMOLED Qualität" ${row.status === 'Original AMOLED Qualität' ? 'selected' : ''}>✔ Original AMOLED Qualität</option>
            </select>
        </div>
    `).join('');

    // Bind row input events
    elements.matrixRowsContainer.querySelectorAll('.matrix-row-item').forEach(itemEl => {
        const idx = parseInt(itemEl.getAttribute('data-row-idx'), 10);
        const seriesInput = itemEl.querySelector('.matrix-input-series');
        const modelsInput = itemEl.querySelector('.matrix-input-models');
        const statusSelect = itemEl.querySelector('.matrix-input-status');

        const updateData = () => {
            if (state.matrixRows[idx]) {
                state.matrixRows[idx].series = seriesInput.value;
                state.matrixRows[idx].models = modelsInput.value;
                state.matrixRows[idx].status = statusSelect.value;
                generateAndRender();
            }
        };

        seriesInput.addEventListener('input', updateData);
        modelsInput.addEventListener('input', updateData);
        statusSelect.addEventListener('change', updateData);
    });

    // Bind delete buttons
    elements.matrixRowsContainer.querySelectorAll('.btn-del-matrix-row').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const delIdx = parseInt(btn.getAttribute('data-del-idx'), 10);
            deleteMatrixRow(delIdx);
        });
    });
}

function addMatrixRow() {
    const brand = elements.brandSelect.value;
    state.matrixRows.push({
        series: `Weitere ${brand} Serie`,
        models: `Alle Modelle & Varianten`,
        status: "Kompatibel (Erstausrüsterqualität)"
    });
    renderMatrixEditorRows();
    generateAndRender();
    showToast('➕ Neue Modellreihe hinzugefügt!');
}

function deleteMatrixRow(idx) {
    state.matrixRows.splice(idx, 1);
    renderMatrixEditorRows();
    generateAndRender();
    showToast('🗑️ Modellreihe entfernt.');
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

function bindEvents() {
    // Mode Switcher (Reparatur vs Frontglas mit OCA)
    if (elements.modeBtnRepair) {
        elements.modeBtnRepair.addEventListener('click', () => switchAppMode('repair'));
    }
    if (elements.modeBtnFrontglas) {
        elements.modeBtnFrontglas.addEventListener('click', () => switchAppMode('frontglas'));
    }

    // Frontglas Image Upload & URL handling
    if (elements.fgBtnUploadFile && elements.fgImageFileInput) {
        elements.fgBtnUploadFile.addEventListener('click', () => elements.fgImageFileInput.click());
        elements.fgImageFileInput.addEventListener('change', handleFrontglasFileUpload);
    }
    if (elements.fgImageUrlInput) {
        elements.fgImageUrlInput.addEventListener('input', handleFrontglasImageUrlInput);
    }
    if (elements.fgBtnRemoveImage) {
        elements.fgBtnRemoveImage.addEventListener('click', clearFrontglasImagePreview);
    }

    // Frontglas Brand
    if (elements.fgBrandInput) {
        elements.fgBrandInput.addEventListener('change', () => {
            updateFrontglasSeoTitle();
            generateAndRender();
        });
    }

    if (elements.fgBtnCopySeo && elements.fgSeoTitleInput) {
        elements.fgBtnCopySeo.addEventListener('click', () => {
            copyToClipboard(elements.fgSeoTitleInput.value, '🔍 Frontglas SEO Titel kopiert!');
        });
    }

    // Frontglas Live Inputs
    const fgInputs = [
        elements.fgColorInput,
        elements.fgShippingCostInput,
        elements.fgWarningInput,
        elements.fgSpecsInput,
        elements.fgLieferumfangInput,
        elements.fgHinweiseInput,
        elements.fgSeoTitleInput
    ];
    fgInputs.forEach(inp => {
        if (inp) {
            inp.addEventListener('input', generateAndRender);
            inp.addEventListener('change', generateAndRender);
        }
    });

    // Add Matrix Row Button
    if (elements.btnAddMatrixRow) {
        elements.btnAddMatrixRow.addEventListener('click', addMatrixRow);
    }

    // Generic Mode Toggle
    if (elements.genericModeToggle) {
        elements.genericModeToggle.addEventListener('change', () => {
            updateDynamicTexts();
            generateAndRender();
            showToast(elements.genericModeToggle.checked ? '🔒 Generischer Modus aktiv (ohne Modell/Preis im Text)!' : '🔓 Standard-Modus (mit Modellname) aktiv.');
        });
    }

    // eBay Compliance Toggle
    if (elements.ebayComplianceToggle) {
        elements.ebayComplianceToggle.addEventListener('change', () => {
            generateAndRender();
            showToast(elements.ebayComplianceToggle.checked ? '🚫 eBay-Konformitätsmodus aktiv (WhatsApp ausgeblendet).' : '💬 Voller Modus inkl. WhatsApp-Links aktiv.');
        });
    }

    // Master Free Gifts Toggle
    if (elements.masterGiftsToggle) {
        elements.masterGiftsToggle.addEventListener('change', () => {
            const checked = elements.masterGiftsToggle.checked;
            if (elements.giftCleaning) elements.giftCleaning.checked = checked;
            if (elements.giftCover) elements.giftCover.checked = checked;
            if (elements.giftLensGlass) elements.giftLensGlass.checked = checked;
            generateAndRender();
            showToast(checked ? '🎁 Alle 3 Gratis-Geschenke aktiviert!' : '🎁 Gratis-Geschenke deaktiviert.');
        });
    }

    // Individual Free Gifts Checkboxes
    [elements.giftCleaning, elements.giftCover, elements.giftLensGlass].forEach(chk => {
        if (chk) {
            chk.addEventListener('change', () => {
                const allChecked = elements.giftCleaning.checked && elements.giftCover.checked && elements.giftLensGlass.checked;
                if (elements.masterGiftsToggle) elements.masterGiftsToggle.checked = allChecked;
                generateAndRender();
            });
        }
    });

    // Theme Switcher Buttons
    elements.themeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const theme = e.currentTarget.getAttribute('data-theme');
            state.currentTheme = theme;
            elements.themeButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            generateAndRender();
            showToast(`🎨 Farbschema "${theme.toUpperCase()}" aktiviert!`);
        });
    });

    // Brand or Repair change triggers text updates
    elements.brandSelect.addEventListener('change', () => {
        handleBrandChange();
        renderModelChips();
        updateDynamicTexts();
        generateAndRender();
    });

    elements.repairTypeSelect.addEventListener('change', () => {
        handleRepairTypeChange();
        updateDynamicTexts();
        generateAndRender();
    });

    // Model and direct inputs trigger SEO and Live Preview
    elements.modelInput.addEventListener('input', () => {
        updateSeoTitle();
        renderSeoKeywords();
        generateAndRender();
    });

    // Input changes for real-time live preview
    const liveInputs = [
        elements.priceInput,
        elements.shippingCostInput,
        elements.warrantyInput,
        elements.processingTimeInput,
        elements.logoModeSelect,
        elements.logoUrlInput,
        elements.matrixToggleSelect,
        elements.upsellPriceInput,
        elements.upsellTitleInput,
        elements.upsellDescInput,
        elements.beforeTitleInput,
        elements.beforeDescInput,
        elements.afterTitleInput,
        elements.afterDescInput,
        elements.dynFeatures,
        elements.dynFaq1,
        elements.dynTransparency,
        elements.appleOemToggleSelect,
        elements.customNotes,
        elements.review1Text,
        elements.review1Author,
        elements.review2Text,
        elements.review2Author,
        elements.formToggleSelect,
        elements.formLinkInput,
        elements.videoToggleSelect,
        elements.videoTypeSelect,
        elements.videoUrlInput,
        elements.videoPosterInput,
        elements.videoTitleInput,
        elements.videoDescInput
    ];

    liveInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', generateAndRender);
            input.addEventListener('change', generateAndRender);
        }
    });

    // Before/After toggle
    if (elements.beforeAfterToggleSelect && elements.baSettingsGroup) {
        elements.beforeAfterToggleSelect.addEventListener('change', () => {
            if (elements.beforeAfterToggleSelect.value === 'yes') {
                elements.baSettingsGroup.classList.remove('hidden');
            } else {
                elements.baSettingsGroup.classList.add('hidden');
            }
            generateAndRender();
        });
    }

    // Video toggle change
    if (elements.videoToggleSelect && elements.videoSettingsGroup) {
        elements.videoToggleSelect.addEventListener('change', () => {
            if (elements.videoToggleSelect.value === 'yes') {
                elements.videoSettingsGroup.classList.remove('hidden');
            } else {
                elements.videoSettingsGroup.classList.add('hidden');
            }
            generateAndRender();
        });
    }

    // Logo mode change
    elements.logoModeSelect.addEventListener('change', () => {
        if (elements.logoModeSelect.value === 'custom') {
            elements.logoUrlInput.classList.remove('hidden');
        } else {
            elements.logoUrlInput.classList.add('hidden');
        }
        generateAndRender();
    });

    // Form toggle change
    elements.formToggleSelect.addEventListener('change', () => {
        if (elements.formToggleSelect.value === 'yes') {
            elements.formLinkInput.classList.remove('hidden');
        } else {
            elements.formLinkInput.classList.add('hidden');
        }
        generateAndRender();
    });

    // Generate Button Action
    elements.btnGenerate.addEventListener('click', () => {
        generateAndRender();
        showToast('🚀 HTML-Code & Live-Vorschau neu gerendert!');
    });

    // Tabs switching
    elements.tabPreviewBtn.addEventListener('click', () => switchTab('preview'));
    elements.tabCodeBtn.addEventListener('click', () => switchTab('code'));
    if (elements.tabKleinanzeigenBtn) {
        elements.tabKleinanzeigenBtn.addEventListener('click', () => switchTab('kleinanzeigen'));
    }

    // Device Switcher
    elements.deviceButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dev = e.currentTarget.getAttribute('data-device');
            setPreviewDevice(dev);
        });
    });

    // Copy to clipboard actions
    elements.btnCopyCodeTop.addEventListener('click', () => {
        copyToClipboard(state.currentHtml, '📋 Vollständiger eBay HTML-Code kopiert!');
    });
    elements.btnCopyCodeBottom.addEventListener('click', () => {
        copyToClipboard(state.currentHtml, '📋 Vollständiger eBay HTML-Code kopiert!');
    });

    if (elements.btnCopyKleinanzeigen) {
        elements.btnCopyKleinanzeigen.addEventListener('click', () => {
            copyToClipboard(state.currentKleinanzeigenText, '📱 Kleinanzeigen-Text kopiert!');
        });
    }

    elements.btnCopySeo.addEventListener('click', () => {
        copyToClipboard(elements.seoTitleInput.value, '🔍 eBay SEO Titel kopiert!');
    });

    // Download HTML file actions
    elements.btnDownloadHtmlTop.addEventListener('click', downloadHtmlFile);
    elements.btnDownloadHtmlBottom.addEventListener('click', downloadHtmlFile);

    // Customer Form Auto-filler
    if (elements.btnOpenFilledForm) {
        elements.btnOpenFilledForm.addEventListener('click', openPreFilledSlip);
    }
}

function openPreFilledSlip() {
    const name = elements.custName ? elements.custName.value.trim() : '';
    const ebayUser = elements.custEbay ? elements.custEbay.value.trim() : '';
    const address = elements.custAddress ? elements.custAddress.value.trim() : '';
    const zipCity = elements.custZipCity ? elements.custZipCity.value.trim() : '';
    const phone = elements.custPhone ? elements.custPhone.value.trim() : '';
    const pin = elements.custPin ? elements.custPin.value.trim() : '';
    const notes = elements.custNotes ? elements.custNotes.value.trim() : '';
    const brand = elements.brandSelect ? elements.brandSelect.value : 'Apple';
    const model = elements.modelInput ? elements.modelInput.value.trim() : '';
    const repair = elements.repairTypeSelect ? elements.repairTypeSelect.value : 'display';
    const today = new Date().toLocaleDateString('de-DE');

    const price = elements.priceInput ? elements.priceInput.value.trim() : '';

    const params = new URLSearchParams({
        name: name,
        ebayUser: ebayUser,
        address: address,
        zipCity: zipCity,
        phone: phone,
        brand: brand,
        model: `${brand} ${model}`,
        pin: pin,
        repair: repair,
        price: price,
        notes: notes,
        date: today
    });

    window.open(`reparaturschein.html?${params.toString()}`, '_blank');
    showToast('📄 Vorausgefüllter Reparaturschein wird geöffnet...');
}

function handleBrandChange() {
    const brandId = elements.brandSelect.value;
    const brandObj = REPAIR_DATA.brands.find(b => b.id === brandId);
    if (brandObj && brandObj.defaultModel) {
        elements.modelInput.value = brandObj.defaultModel;
    }
    initMatrixRows();
}

function handleRepairTypeChange() {
    const typeId = elements.repairTypeSelect.value;
    const typeObj = REPAIR_DATA.repairTypes.find(r => r.id === typeId);
    if (typeObj && typeObj.defaultPrice) {
        elements.priceInput.value = typeObj.defaultPrice;
    }
    initMatrixRows();
}

function updateDynamicTexts() {
    const typeId = elements.repairTypeSelect.value;
    const brandId = elements.brandSelect.value;
    const isGeneric = (elements.genericModeToggle && elements.genericModeToggle.checked) || brandId === 'Universal';
    const tpl = REPAIR_DATA.templates[typeId] || REPAIR_DATA.templates.battery;

    // Visual badge indicators and input hints for generic mode
    if (elements.genericModelBadge) {
        elements.genericModelBadge.style.display = isGeneric ? 'inline-flex' : 'none';
    }
    if (elements.genericPriceBadge) {
        elements.genericPriceBadge.style.display = isGeneric ? 'inline-flex' : 'none';
    }
    if (elements.modelInput) {
        if (isGeneric) {
            elements.modelInput.classList.add('input-generic-active');
            elements.modelInput.placeholder = "Automatisch: Alle Modelle (Universal)";
        } else {
            elements.modelInput.classList.remove('input-generic-active');
            elements.modelInput.placeholder = "z.B. iPhone 14 Pro";
        }
    }
    if (elements.priceInput) {
        if (isGeneric) {
            elements.priceInput.classList.add('input-generic-active');
            elements.priceInput.placeholder = "Varianten-Preis (laut eBay Dropdown)";
        } else {
            elements.priceInput.classList.remove('input-generic-active');
            elements.priceInput.placeholder = "z.B. 69,00 €";
        }
    }

    // Feature list customization
    let features = tpl.features;
    if (isGeneric && tpl.generic_features) {
        features = tpl.generic_features;
    } else if (brandId === 'Apple' && tpl.apple_features) {
        features = tpl.apple_features;
    } else if (brandId === 'Samsung' && tpl.samsung_features) {
        features = tpl.samsung_features;
    }

    // Transparency customization
    let trans = tpl.transparency;
    if (isGeneric && tpl.generic_transparency) {
        trans = tpl.generic_transparency;
    } else if (brandId === 'Apple' && tpl.apple_transparency) {
        trans = tpl.apple_transparency;
    } else if (brandId === 'Samsung' && tpl.samsung_transparency) {
        trans = tpl.samsung_transparency;
    }

    // Free gifts control box visibility & price input hint
    if (elements.freeGiftsControlBox) {
        const isEligibleCategory = ['display', 'battery', 'backcover', 'charging'].includes(typeId);
        if (isEligibleCategory) {
            elements.freeGiftsControlBox.style.display = 'block';
        } else {
            elements.freeGiftsControlBox.style.display = 'none';
        }
    }

    // Before/After customization
    if (tpl.beforeAfter) {
        elements.beforeTitleInput.value = tpl.beforeAfter.beforeTitle;
        elements.beforeDescInput.value = tpl.beforeAfter.beforeDesc;
        elements.afterTitleInput.value = tpl.beforeAfter.afterTitle;
        elements.afterDescInput.value = tpl.beforeAfter.afterDesc;
    }

    elements.dynFeatures.value = features;
    elements.dynFaq1.value = tpl.faq1 || "";
    elements.dynTransparency.value = trans || "";

    if (tpl.review1) {
        elements.review1Text.value = tpl.review1.text;
        elements.review1Author.value = tpl.review1.author;
    }
    if (tpl.review2) {
        elements.review2Text.value = tpl.review2.text;
        elements.review2Author.value = tpl.review2.author;
    }

    updateSeoTitle();
    renderSeoKeywords();
}

function updateSeoTitle() {
    const brand = elements.brandSelect.value;
    const model = elements.modelInput.value.trim();
    const typeId = elements.repairTypeSelect.value;
    const typeObj = REPAIR_DATA.repairTypes.find(r => r.id === typeId);
    const keyword = typeObj ? typeObj.seoKeyword : "Reparatur";
    const isGeneric = (elements.genericModeToggle && elements.genericModeToggle.checked) || brand === 'Universal';

    let title = '';
    if (isGeneric) {
        title = `Smartphone ${keyword} Reparatur Express | Alle Marken & Modelle | Garantie`;
    } else {
        title = `${brand} ${model} ${keyword} Reparatur | Express & Garantie`;
    }
    
    // eBay item title limit is 80 chars
    const charCount = title.length;
    elements.seoTitleInput.value = title;
    elements.seoCounter.innerText = `${charCount}/80`;

    if (charCount > 80) {
        elements.seoCounter.style.color = '#ef4444';
        elements.seoCounter.style.borderColor = '#ef4444';
    } else if (charCount >= 70) {
        elements.seoCounter.style.color = '#f59e0b';
        elements.seoCounter.style.borderColor = '#f59e0b';
    } else {
        elements.seoCounter.style.color = '#25D366';
        elements.seoCounter.style.borderColor = 'rgba(37, 211, 102, 0.4)';
    }
}

function generateAndRender() {
    if (state.appMode === 'frontglas') {
        const fgConfig = {
            themeId: state.currentTheme,
            brand: elements.fgBrandInput ? elements.fgBrandInput.value : 'Universal',
            shippingCost: elements.fgShippingCostInput ? elements.fgShippingCostInput.value.trim() : 'Kostenloser DHL Versand (inkl. Tracking)',
            color: elements.fgColorInput ? elements.fgColorInput.value.trim() : 'Schwarz / Siehe Modellauswahl',
            imageUrl: state.frontglasImage || (elements.fgImageUrlInput ? elements.fgImageUrlInput.value.trim() : ''),
            specsHtml: elements.fgSpecsInput ? elements.fgSpecsInput.value.trim() : '',
            warningText: elements.fgWarningInput ? elements.fgWarningInput.value.trim() : '',
            lieferumfangHtml: elements.fgLieferumfangInput ? elements.fgLieferumfangInput.value.trim() : '',
            hinweiseHtml: elements.fgHinweiseInput ? elements.fgHinweiseInput.value.trim() : '',
            customTitle: elements.fgSeoTitleInput ? elements.fgSeoTitleInput.value.trim() : ''
        };

        const generatedHtml = generateFrontglasEbayHtml(fgConfig);
        state.currentHtml = generatedHtml;
        if (elements.codeOutput) elements.codeOutput.value = generatedHtml;
        renderPreviewIframe(generatedHtml);
        return;
    }

    const selectedRepairOption = elements.repairTypeSelect.options[elements.repairTypeSelect.selectedIndex];
    const repairName = selectedRepairOption ? selectedRepairOption.text : "Reparatur";

    const isGeneric = (elements.genericModeToggle && elements.genericModeToggle.checked) || (elements.brandSelect.value === 'Universal');
    const isEbayCompliance = elements.ebayComplianceToggle ? elements.ebayComplianceToggle.checked : true;

    const freeGiftsConfig = {
        cleaning: elements.giftCleaning ? elements.giftCleaning.checked : true,
        cover: elements.giftCover ? elements.giftCover.checked : true,
        lensGlass: elements.giftLensGlass ? elements.giftLensGlass.checked : true
    };

    const config = {
        themeId: state.currentTheme,
        logoMode: elements.logoModeSelect ? elements.logoModeSelect.value : "badge",
        logoUrl: elements.logoUrlInput ? elements.logoUrlInput.value.trim() : "",
        brand: elements.brandSelect.value,
        model: elements.modelInput.value.trim(),
        repairTypeId: elements.repairTypeSelect.value,
        repairName: repairName,
        price: elements.priceInput.value.trim(),
        shippingCost: elements.shippingCostInput.value.trim(),
        warrantyMonths: elements.warrantyInput.value.trim(),
        processingTime: elements.processingTimeInput.value.trim(),
        
        genericMode: isGeneric,
        ebayComplianceMode: isEbayCompliance,
        freeGifts: freeGiftsConfig,
        upsellType: "none",
        
        beforeAfterToggle: elements.beforeAfterToggleSelect ? elements.beforeAfterToggleSelect.value : "yes",
        beforeTitle: elements.beforeTitleInput ? elements.beforeTitleInput.value.trim() : "",
        beforeDesc: elements.beforeDescInput ? elements.beforeDescInput.value.trim() : "",
        afterTitle: elements.afterTitleInput ? elements.afterTitleInput.value.trim() : "",
        afterDesc: elements.afterDescInput ? elements.afterDescInput.value.trim() : "",
        matrixToggle: elements.matrixToggleSelect ? elements.matrixToggleSelect.value : "yes",
        matrixRows: state.matrixRows,

        formToggle: elements.formToggleSelect.value,
        formLink: elements.formLinkInput.value.trim(),
        
        videoToggle: elements.videoToggleSelect ? elements.videoToggleSelect.value : "no",
        videoType: elements.videoTypeSelect ? elements.videoTypeSelect.value : "direct",
        videoUrl: elements.videoUrlInput ? elements.videoUrlInput.value.trim() : "",
        videoPoster: elements.videoPosterInput ? elements.videoPosterInput.value.trim() : "",
        videoTitle: elements.videoTitleInput ? elements.videoTitleInput.value.trim() : "",
        videoDesc: elements.videoDescInput ? elements.videoDescInput.value.trim() : "",
        
        featuresHtml: elements.dynFeatures.value,
        faq1Text: elements.dynFaq1.value.trim(),
        transparencyText: elements.dynTransparency.value.trim(),
        appleOemToggle: elements.appleOemToggleSelect ? elements.appleOemToggleSelect.value : "yes",
        customNotes: elements.customNotes ? elements.customNotes.value.trim() : "",
        
        review1: {
            text: elements.review1Text.value.trim(),
            author: elements.review1Author.value.trim()
        },
        review2: {
            text: elements.review2Text.value.trim(),
            author: elements.review2Author.value.trim()
        }
    };

    const generatedHtml = generateEbayHtml(config);
    state.currentHtml = generatedHtml;

    // Update Code Pane
    elements.codeOutput.value = generatedHtml;

    // Generate and update Kleinanzeigen text
    const kleinanzeigenText = generateKleinanzeigenText(config);
    state.currentKleinanzeigenText = kleinanzeigenText;
    if (elements.kleinanzeigenOutput) {
        elements.kleinanzeigenOutput.value = kleinanzeigenText;
    }

    // Update Live Preview Iframe safely
    renderPreviewIframe(generatedHtml);

    // Save link preference
    saveSettings();
}

function renderPreviewIframe(html) {
    const iframe = elements.previewIframe;
    if (!iframe) return;

    // Use srcdoc with dark sleek background
    iframe.srcdoc = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 20px; background: #08080c; font-family: sans-serif; display: flex; justify-content: center; }
    </style>
</head>
<body>
    ${html}
</body>
</html>`;
}

function switchTab(tab) {
    state.currentTab = tab;
    
    elements.tabPreviewBtn.classList.remove('active');
    elements.tabCodeBtn.classList.remove('active');
    if (elements.tabKleinanzeigenBtn) elements.tabKleinanzeigenBtn.classList.remove('active');
    
    elements.panePreview.classList.remove('active');
    elements.paneCode.classList.remove('active');
    if (elements.paneKleinanzeigen) elements.paneKleinanzeigen.classList.remove('active');

    if (tab === 'preview') {
        elements.tabPreviewBtn.classList.add('active');
        elements.panePreview.classList.add('active');
    } else if (tab === 'code') {
        elements.tabCodeBtn.classList.add('active');
        elements.paneCode.classList.add('active');
    } else if (tab === 'kleinanzeigen') {
        if (elements.tabKleinanzeigenBtn) elements.tabKleinanzeigenBtn.classList.add('active');
        if (elements.paneKleinanzeigen) elements.paneKleinanzeigen.classList.add('active');
    }
}

function setPreviewDevice(device) {
    state.currentDevice = device;
    elements.deviceButtons.forEach(btn => {
        if (btn.getAttribute('data-device') === device) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    elements.previewViewport.className = `preview-viewport ${device}`;
}

function downloadHtmlFile() {
    let filename = '';
    if (state.appMode === 'frontglas') {
        const brand = (elements.fgBrandInput ? elements.fgBrandInput.value : 'universal').toLowerCase();
        filename = `ebay-frontglas-oca-${brand}-alle-modelle.html`;
    } else {
        const brand = elements.brandSelect.value.toLowerCase();
        const model = elements.modelInput.value.trim().toLowerCase().replace(/\s+/g, '-');
        const repair = elements.repairTypeSelect.value;
        filename = `ebay-template-${brand}-${model}-${repair}.html`;
    }

    const blob = new Blob([state.currentHtml], { type: 'text/html;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);

    showToast(`💾 Datei "${filename}" heruntergeladen!`);
}

function copyToClipboard(text, message) {
    if (!navigator.clipboard) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    } else {
        navigator.clipboard.writeText(text);
    }
    showToast(message || '✅ In die Zwischenablage kopiert!');
}

function showToast(message) {
    const toast = elements.toast;
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show');
    
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function saveSettings() {
    try {
        const formLink = elements.formLinkInput.value.trim();
        localStorage.setItem('hl_form_link', formLink);
    } catch (e) {}
}

function loadSavedSettings() {
    try {
        let savedLink = localStorage.getItem('hl_form_link');
        // Auto-migrate legacy .pdf link to .html so users get the interactive digital form
        if (savedLink && savedLink.includes('reparaturschein.pdf')) {
            savedLink = savedLink.replace('reparaturschein.pdf', 'reparaturschein.html');
            localStorage.setItem('hl_form_link', savedLink);
        }
        if (savedLink && savedLink.length > 0) {
            elements.formLinkInput.value = savedLink;
        } else {
            elements.formLinkInput.value = 'https://mustafamuhammed29.github.io/handyland-generator/reparaturschein.html';
        }
    } catch (e) {}
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
