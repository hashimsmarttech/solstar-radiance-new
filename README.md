# SolStar Radiance — Website (Frontend + Form Backend)

Updated responsive website — multi-page ab hai (Home, About, Projects, Testimonials)
aur form ab PHP ke zariye email par jata hai.

## Structure
```
solstar/
├── index.html          → Home page (Header, Hero, Stats, Solutions, Why Choose,
│                          Projects preview, Process, Savings Form, Testimonials, FAQ, Footer)
├── about.html           → About Us page
├── projects.html        → All Projects page (with filter buttons)
├── testimonials.html    → Testimonials page (text + video placeholders)
├── send-form.php        → Backend: receives the Solar Assessment form and emails it
├── css/
│   └── style.css        → Sara styling (responsive: desktop, tablet, mobile, small phones)
├── js/
│   └── main.js           → Mobile menu, FAQ accordion, project filter, form submit (AJAX), scroll effects
├── img/
│   └── hero-solar.svg    → Hero background illustration
└── README.md
```

## Kaise chalayen (local preview)
Static pages (index.html, about.html, etc.) kisi bhi browser mein seedha khol kar
dekhi ja sakti hain. **Lekin form (send-form.php) sirf PHP server par chalega** —
browser mein `.php` file seedhi open karne se kaam nahi karega.

Local test ke liye (PHP installed hone par):
```
cd solstar
php -S localhost:8000
```
Phir browser mein `http://localhost:8000` khol lein.

## Hosting par form kaise kaam karega
1. Poora `solstar/` folder apne hosting (cPanel / shared hosting jo PHP support
   karta ho) par upload kar dein.
2. `send-form.php` ke top par `$TO_EMAIL` variable mein wahi email hai jo
   aapne di thi: `info@solstarradiance.com`. Agar email change karni ho to
   yahin change kar dein.
3. Zyada tar shared hosting (cPanel wagera) par PHP ka `mail()` function pehle
   se kaam karta hai. Agar emails na aayen (spam mein bhi check kar lein), to
   hosting provider se pooch lein ke SMTP (e.g. PHPMailer jaisi service) set up
   karni hai — is case mein `send-form.php` ko SMTP credentials ke sath update
   karna hoga.
4. Form submit hone par data + uploaded bill file dono email mein chali jaati
   hain (attachment ke tor par).

## Naye pages
- **About** (`about.html`) — company story, values, group backing.
- **Projects** (`projects.html`) — sab projects ek jagah, filter buttons
  (All / Residential / Commercial / Industrial) ke sath.
- **Testimonials** (`testimonials.html`) — written testimonials + video
  testimonials ka section (abhi placeholder hai, neeche dekhein).

## ⚠️ Aap se jo cheezein chahiye (TODO — code mein bhi `<!-- TODO -->` comments ke sath marked hain)
- **1 MW+ installed capacity**: stat abhi "Approaching 1 MW" keh raha hai.
  Fahad se confirm karke exact number bata dein, update kar denge.
- **Payback period (FAQ)**: abhi "3-5 years" likha hai — confirm karein ke
  sahi hai ya nahi.
- **Brands** (Why Choose section: LONGi, JA Solar, HUAWEI, Schneider, wagera):
  confirm karein ke ye abhi bhi wahi brands hain jo use ho rahi hain.
- **Testimonials**: abhi ke quotes placeholder hain (sample names ke sath) —
  real client quotes/naam/permission mil jayen to unse replace kar dein.
- **Video testimonials**: `testimonials.html` mein 3 video placeholders hain.
  Real videos YouTube par upload karke embed link de dein, ya `.mp4` files
  bhej dein — dono tarike se laga denge.
- **Project photos**: abhi projects gradient color-blocks hain (real photos
  nahi). Actual site photos mil jayen to unse replace kar denge.

## Features (existing + new)
- Fully responsive (desktop, tablet, mobile, small phones — dedicated breakpoints)
- Mobile hamburger menu (ab har page par kaam karta hai)
- Working FAQ accordion
- Solar Assessment form — ab **hybrid vs on-grid system** bhi poochta hai,
  aur submit hone par PHP backend ke zariye email par jata hai
- Smooth scroll navigation with active-link highlighting
- WhatsApp floating button + header WhatsApp button (sab pages par)
- Hero section mein readable text (dark overlay + shadow) aur solar-themed
  background illustration
- Sab icons SVG (koi image dependency nahi — fast load)
