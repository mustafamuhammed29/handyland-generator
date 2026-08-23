# HandyLand eBay Generator Pro 🚀

> **Professioneller eBay-Vorlagen-Generator & Begleitschein-System für HandyLand Heidelberg.**
> Erstellt responsive, verkaufsstarke eBay-Angebotsbeschreibungen auf Knopfdruck – **100% eBay-Richtlinienkonform (Zero-JS)**.

---

## 📌 Über das Projekt

Dieses Tool wurde speziell für die Werkstatt **HandyLand** in Heidelberg entwickelt, um den Prozess der Erstellung von eBay-Reparaturangeboten zu automatisieren und zu professionalisieren.

Das System besteht aus zwei Hauptkomponenten:
1. **Generator Dashboard (`index.html`)**: Eine moderne Steuerzentrale für Mitarbeiter zur Konfiguration von Modell, Reparaturart, Preisen, Upsells und SEO-Titeln mit Live-Vorschau.
2. **Reparaturschein / Begleitschein (`reparaturschein.html`)**: Ein druckoptimiertes DIN-A4-Formular für Kunden zur Einsendung ihrer Smartphones.

---

## 🔒 100% eBay-Sicherheits- & Richtlinienkonformität

> [!IMPORTANT]
> **eBay verbietet aktive Skripte und externe CSS-Dateien in Artikelbeschreibungen.**
> 
> Der von diesem Generator erzeugte HTML-Code hält sich strikt an alle eBay-Richtlinien:
> - **Kein JavaScript (`<script>`-Tags, Inline-Events wie `onclick` etc. sind vollständig eliminiert).**
> - **Keine externen CSS-Stylesheets (`<link rel="stylesheet">` ist nicht enthalten).**
> - **Reines HTML5 & Embedded CSS (Scoped `<style>`-Block).**
> - **Native Interaktionen (z. B. FAQ-Akkordeons über HTML5 `<details>` und `<summary>`).**
> - **Vollständig responsiv für Desktop, Tablet und die offizielle eBay-Smartphone-App.**

---

## 📂 Projektstruktur

```text
HandyLand-Generator/
├── index.html                 # لوحة التحكم الرئيسية (Dashboard)
├── reparaturschein.html        # استمارة تذكرة الشحن والإصلاح للعملاء (DIN A4 Print)
├── css/
│   ├── dashboard.css          # تنسيقات لوحة التحكم (Luxury Dark & Gold UI)
│   └── print-form.css         # تنسيقات الطباعة للاستمارة (DIN A4)
├── js/
│   ├── data/
│   │   └── repair-data.js     # قوالب الأعطال والماركات ونصوص الضمان (Apple, Samsung...)
│   ├── ebay-template.js       # محرك توليد كود إيباي الصافي (Pure eBay HTML/CSS)
│   └── app.js                 # منطق لوحة التحكم والتفاعل والمعاينة الحية
├── .gitignore
└── README.md
```

---

## 🚀 خطوة بخطوة: التشغيل والرفع على GitHub Pages

### 1. تشغيل المشروع محلياً (Local Development)
بما أن المشروع يعتمد على معيار **ES Modules** في الجافاسكريبت، يُفضل تشغيله عبر سيرفر محلي بسيط:
- باستخدام إضافة **Live Server** في VS Code.
- أو عبر التيرمينال:
  ```bash
  npx serve .
  # أو
  python -m http.server 8000
  ```

---

### 2. الرفع على GitHub (Push to GitHub)

افتح موجه الأوامر (Terminal) داخل مجلد المشروع ونفذ:

```bash
# 1. تهيئة المستودع
git init

# 2. إضافة جميع الملفات
git add .

# 3. حفظ التغييرات
git commit -m "feat: initial release of HandyLand eBay Generator Pro"

# 4. تغيير الفرع الرئيسي إلى main
git branch -M main

# 5. ربط المستودع مع GitHub (استبدل YOUR_USERNAME و REPO_NAME برابط مستودعك)
git remote add origin https://github.com/YOUR_USERNAME/HandyLand-Generator.git

# 6. الرفع
git push -u origin main
```

---

### 3. تفعيل GitHub Pages (Deploy to GitHub Pages)

1. توجه إلى مستودعك على موقع **GitHub**.
2. اضغط على **Settings** ثم من القائمة الجانبية اضغط على **Pages**.
3. تحت قسم **Build and deployment -> Branch**:
   - اختر الفرع: `main`
   - اختر المجلد: `/ (root)`
   - اضغط على **Save**.
4. بعد دقيقة واحدة، سيظهر لك رابط الموقع المباشر:
   ```text
   https://<YOUR_USERNAME>.github.io/HandyLand-Generator/
   ```

---

### 4. ربط استمارة الشحن في إعلانات eBay
بعد نشر الموقع على GitHub Pages، سيصبح رابط استمارة الشحن متاحاً لجميع عملائك على:
```text
https://<YOUR_USERNAME>.github.io/HandyLand-Generator/reparaturschein.html
```
يمكنك لصق هذا الرابط في خانة **"رابط تذكرة الشحن"** داخل لوحة التحكم ليكون مدمجاً في زر الطباعة داخل كل إعلان تولده.

---

## 👨‍🔧 بيانات الورشة (Impressum)

- **HandyLand Heidelberg** (Inh. Alsafi Nawfal)
- **العنوان:** Hertzstr. 1, 69126 Heidelberg, Deutschland
- **WhatsApp:** +49 176 25565255
- **البريد الإلكتروني:** handyland.hd1@gmail.com
- **الرقم الضريبي:** USt-IdNr.: DE 406785869
