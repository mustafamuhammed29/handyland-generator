/**
 * HandyLand Generator Pro - Main Application Controller
 * Handles UI interactions, live preview rendering, clipboard copying, and state synchronization.
 */

import { REPAIR_DATA } from './data/repair-data.js';
import { generateEbayHtml } from './ebay-template.js';

// Application State
const state = {
    currentTab: 'preview',
    currentDevice: 'desktop',
    currentHtml: ''
};

// DOM Elements Cache
let elements = {};

function init() {
    cacheElements();
    populateSelectOptions();
    bindEvents();
    loadSavedSettings();
    updateDynamicTexts();
    generateAndRender();
}

function cacheElements() {
    elements = {
        // Inputs
        brandSelect: document.getElementById('brandInput'),
        modelInput: document.getElementById('modelInput'),
        repairTypeSelect: document.getElementById('repairTypeInput'),
        priceInput: document.getElementById('priceInput'),
        shippingCostInput: document.getElementById('shippingCostInput'),
        warrantyInput: document.getElementById('warrantyInput'),
        processingTimeInput: document.getElementById('processingTimeInput'),
        
        upsellTypeSelect: document.getElementById('upsellType'),
        upsellPriceGroup: document.getElementById('promoPriceGroup'),
        upsellPriceInput: document.getElementById('inputUpsellPrice'),
        upsellTitleInput: document.getElementById('inputUpsellTitle'),
        upsellDescInput: document.getElementById('inputUpsellDesc'),
        
        dynFeatures: document.getElementById('dynFeatures'),
        dynFaq1: document.getElementById('dynFaq1'),
        dynTransparency: document.getElementById('dynTransparency'),
        customNotes: document.getElementById('customNotes'),
        
        review1Text: document.getElementById('review1Text'),
        review1Author: document.getElementById('review1Author'),
        review2Text: document.getElementById('review2Text'),
        review2Author: document.getElementById('review2Author'),
        
        formToggleSelect: document.getElementById('formToggle'),
        formLinkInput: document.getElementById('inputFormLink'),
        
        // SEO Box
        seoTitleInput: document.getElementById('seoTitleInput'),
        seoCounter: document.getElementById('titleCharCount'),
        btnCopySeo: document.getElementById('btnCopySeo'),
        
        // Main Actions & Tabs
        btnGenerate: document.getElementById('btnGenerate'),
        tabPreviewBtn: document.getElementById('tabPreviewBtn'),
        tabCodeBtn: document.getElementById('tabCodeBtn'),
        panePreview: document.getElementById('pane-preview'),
        paneCode: document.getElementById('pane-code'),
        previewViewport: document.getElementById('previewViewport'),
        previewIframe: document.getElementById('previewIframe'),
        codeOutput: document.getElementById('code-output'),
        btnCopyCodeTop: document.getElementById('btnCopyCodeTop'),
        btnCopyCodeBottom: document.getElementById('btnCopyCodeBottom'),
        
        // Device switcher
        deviceButtons: document.querySelectorAll('.btn-device'),
        
        // Toast
        toast: document.getElementById('toastNotification')
    };
}

function populateSelectOptions() {
    // Populate Brands
    elements.brandSelect.innerHTML = REPAIR_DATA.brands.map(b => 
        `<option value="${b.id}">${b.name}</option>`
    ).join('');

    // Populate Repair Types
    elements.repairTypeSelect.innerHTML = REPAIR_DATA.repairTypes.map(r => 
        `<option value="${r.id}">${r.name}</option>`
    ).join('');
}

function bindEvents() {
    // Brand or Repair change triggers text updates
    elements.brandSelect.addEventListener('change', () => {
        handleBrandChange();
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
        generateAndRender();
    });

    // Input changes for real-time live preview
    const liveInputs = [
        elements.priceInput,
        elements.shippingCostInput,
        elements.warrantyInput,
        elements.processingTimeInput,
        elements.upsellPriceInput,
        elements.upsellTitleInput,
        elements.upsellDescInput,
        elements.dynFeatures,
        elements.dynFaq1,
        elements.dynTransparency,
        elements.customNotes,
        elements.review1Text,
        elements.review1Author,
        elements.review2Text,
        elements.review2Author,
        elements.formToggleSelect,
        elements.formLinkInput
    ];

    liveInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', generateAndRender);
            input.addEventListener('change', generateAndRender);
        }
    });

    // Upsell type change
    elements.upsellTypeSelect.addEventListener('change', () => {
        const type = elements.upsellTypeSelect.value;
        if (type === 'paid') {
            elements.upsellPriceGroup.style.display = 'flex';
        } else {
            elements.upsellPriceGroup.style.display = 'none';
        }
        generateAndRender();
    });

    // Copy SEO Title
    elements.btnCopySeo.addEventListener('click', () => {
        copyToClipboard(elements.seoTitleInput.value, '🎯 eBay SEO-Titel kopiert!');
    });

    // Copy Code Buttons
    if (elements.btnCopyCodeTop) {
        elements.btnCopyCodeTop.addEventListener('click', () => {
            copyToClipboard(state.currentHtml, '✅ eBay HTML-Code kopiert!');
        });
    }
    if (elements.btnCopyCodeBottom) {
        elements.btnCopyCodeBottom.addEventListener('click', () => {
            copyToClipboard(state.currentHtml, '✅ eBay HTML-Code kopiert!');
        });
    }

    // Tab Switching
    elements.tabPreviewBtn.addEventListener('click', () => switchTab('preview'));
    elements.tabCodeBtn.addEventListener('click', () => switchTab('code'));

    // Device Switcher
    elements.deviceButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const device = e.currentTarget.getAttribute('data-device');
            setPreviewDevice(device);
        });
    });

    // Big Generate Button
    elements.btnGenerate.addEventListener('click', () => {
        generateAndRender();
        showToast('🚀 eBay Vorlage erfolgreich aktualisiert!');
    });
}

function handleBrandChange() {
    const brandId = elements.brandSelect.value;
    const brandObj = REPAIR_DATA.brands.find(b => b.id === brandId);
    if (brandObj && brandObj.defaultModel) {
        elements.modelInput.value = brandObj.defaultModel;
    }
}

function handleRepairTypeChange() {
    const typeId = elements.repairTypeSelect.value;
    const typeObj = REPAIR_DATA.repairTypes.find(r => r.id === typeId);
    if (typeObj && typeObj.defaultPrice) {
        elements.priceInput.value = typeObj.defaultPrice;
    }
}

function updateDynamicTexts() {
    const typeId = elements.repairTypeSelect.value;
    const brandId = elements.brandSelect.value;
    const tpl = REPAIR_DATA.templates[typeId] || REPAIR_DATA.templates.battery;

    // Feature list customization
    let features = tpl.features;
    if (typeId === 'display' && brandId === 'Apple' && tpl.apple_features) {
        features = tpl.apple_features;
    } else if (typeId === 'display' && brandId === 'Samsung' && tpl.samsung_features) {
        features = tpl.samsung_features;
    }

    // Transparency customization
    let trans = tpl.transparency;
    if (brandId === 'Apple' && tpl.apple_transparency) {
        trans = tpl.apple_transparency;
    } else if (brandId === 'Samsung' && tpl.samsung_transparency) {
        trans = tpl.samsung_transparency;
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
}

function updateSeoTitle() {
    const brand = elements.brandSelect.value;
    const model = elements.modelInput.value.trim();
    const typeId = elements.repairTypeSelect.value;
    const typeObj = REPAIR_DATA.repairTypes.find(r => r.id === typeId);
    const keyword = typeObj ? typeObj.seoKeyword : "Reparatur";

    let title = `${brand} ${model} ${keyword} Reparatur | Express & Garantie`;
    
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
    const selectedRepairOption = elements.repairTypeSelect.options[elements.repairTypeSelect.selectedIndex];
    const repairName = selectedRepairOption ? selectedRepairOption.text : "Reparatur";

    const config = {
        brand: elements.brandSelect.value,
        model: elements.modelInput.value.trim(),
        repairTypeId: elements.repairTypeSelect.value,
        repairName: repairName,
        price: elements.priceInput.value.trim(),
        shippingCost: elements.shippingCostInput.value.trim(),
        warrantyMonths: elements.warrantyInput.value.trim(),
        processingTime: elements.processingTimeInput.value.trim(),
        
        upsellType: elements.upsellTypeSelect.value,
        upsellPrice: elements.upsellPriceInput.value.trim(),
        upsellTitle: elements.upsellTitleInput.value.trim(),
        upsellDesc: elements.upsellDescInput.value.trim(),
        
        formToggle: elements.formToggleSelect.value,
        formLink: elements.formLinkInput.value.trim(),
        
        featuresHtml: elements.dynFeatures.value,
        faq1Text: elements.dynFaq1.value.trim(),
        transparencyText: elements.dynTransparency.value.trim(),
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

    // Update Live Preview Iframe safely
    renderPreviewIframe(generatedHtml);

    // Save link preference
    saveSettings();
}

function renderPreviewIframe(html) {
    const iframe = elements.previewIframe;
    if (!iframe) return;

    // Use srcdoc or fallback to document write
    iframe.srcdoc = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 20px; background: #000; font-family: sans-serif; display: flex; justify-content: center; }
    </style>
</head>
<body>
    ${html}
</body>
</html>`;
}

function switchTab(tab) {
    state.currentTab = tab;
    
    if (tab === 'preview') {
        elements.tabPreviewBtn.classList.add('active');
        elements.tabCodeBtn.classList.remove('active');
        elements.panePreview.classList.add('active');
        elements.paneCode.classList.remove('active');
    } else {
        elements.tabPreviewBtn.classList.remove('active');
        elements.tabCodeBtn.classList.add('active');
        elements.panePreview.classList.remove('active');
        elements.paneCode.classList.add('active');
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

function copyToClipboard(text, message) {
    if (!navigator.clipboard) {
        // Fallback
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
    } catch (e) {
        // Local storage might be blocked in some iframe environments
    }
}

function loadSavedSettings() {
    try {
        const savedLink = localStorage.getItem('hl_form_link');
        if (savedLink && savedLink.length > 0) {
            elements.formLinkInput.value = savedLink;
        }
    } catch (e) {
        // Ignore
    }
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
