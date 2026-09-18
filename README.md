# 🌸 FLOR-CHID – Premium Florist E-Commerce Website

> A modern, luxurious, and fully responsive e-commerce platform for a premium flower shop. Built with HTML, CSS, and JavaScript.

![FLOR-CHID Preview](https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=1200&h=400&fit=crop)

## 📋 Overview

FLOR-CHID is a complete front-end e-commerce website for a premium florist brand. It features a stunning visual design with floating petals animation, comprehensive product catalog, bouquet collections, and an interactive shopping experience. The website is built using vanilla HTML, CSS, and JavaScript with a focus on elegance, user experience, and responsiveness.



---

## ✨ Key Features

### 🎨 Design & Experience
- **Premium Aesthetic** – Elegant color palette with soft pink, lavender, sage, emerald, and gold accents
- **Floating Petals Animation** – Subtle background animations for a magical feel
- **Sticky Navigation** – Smooth transparent navbar with backdrop blur
- **Fully Responsive** – Optimized for desktop, tablet, and mobile devices
- **Interactive Elements** – Hover effects, smooth transitions, and micro-interactions

### 🛍️ Product Catalog
- **40+ Flower Varieties** – Including roses, tulips, orchids, lilies, and more
- **Detailed Flower Cards** – Scientific names, pricing, and add-to-cart functionality
- **Premium Bouquet Collection** – Curated arrangements with pricing
- **Occasion-Based Curation** – Flowers recommended for specific events

### 💝 Interactive Features
- **Personal Message** – Add heartfelt notes with live character counter and preview
- **Custom Bouquet Builder** – Interactive builder with live price updates
- **Shopping Cart** – Dynamic cart with badge counter
- **Wishlist** – Save favorite items (UI ready)

### 📱 User Experience
- **Instant Search** – Autocomplete search functionality (UI framework ready)
- **Category Filters** – Browse by occasion, type, and price
- **Mobile Navigation** – Hamburger menu for mobile devices
- **Accessibility** – Semantic HTML and ARIA support

---

## 🚀 Technologies Used

### Frontend
- **HTML5** – Semantic markup
- **CSS3** – Custom properties, flexbox, grid, animations
- **JavaScript (ES6+)** – DOM manipulation, event handling, dynamic rendering
- **Font Awesome** – Icon library
- **Google Fonts** – Inter typography

### External Resources
- **Unsplash** – Royalty-free flower photography
- **Pexels** – Additional stock images
- **PAKUTASO** – Japanese flower stock photos

---

## 📁 File Structure

```
flor-chid/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # All JavaScript functionality
├── README.md           # Project documentation
└── assets/             # (Optional) Local images folder
```

---

## 🚦 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Basic understanding of HTML/CSS/JS

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flor-chid.git
   cd flor-chid
   ```

2. **Open the website**
   - Simply open `index.html` in your browser
   - Or use Live Server extension in VS Code

3. **Customize (Optional)**
   - Update product data in `script.js`
   - Modify colors in `styles.css`
   - Change content in `index.html`

---

## 🎯 Features Deep Dive

### 🌸 Flower Catalog
The website includes a comprehensive flower collection with:
- **Red Rose** – ₹60/stem
- **Tulip** – ₹150/stem *(Using PAKUTASO royalty-free image)*
- **Sunflower** – ₹120/stem
- **Orchid** – ₹280/stem
- **Lily** – ₹180/stem
- **Gerbera** – ₹80/stem
- **Carnation** – ₹70/stem
- **Hydrangea** – ₹300/stem

Each flower card displays:
- High-quality image
- Common and scientific name
- Price per stem
- Add to cart and wishlist buttons

### 💐 Bouquet Collection
Premium arrangements including:
- Classic Rose Bouquet – ₹799
- Luxury Red Roses – ₹1499
- Sunflower Happiness – ₹999
- Elegant Orchid – ₹1799

### 💌 Personal Message Feature
- 300-character text area
- Live character counter
- Greeting card option
- Anonymous delivery option
- Emoji support
- Live preview card

### 🎨 Custom Bouquet Builder
- Choose flowers, colors, wrapping, ribbon, vase, and more
- Live price updates
- Interactive UI elements

---


### Adding New Bouquets
Edit the `bouquets` array:
```javascript
const bouquets = [
  {
    name: 'Your Bouquet',
    price: '₹XX',
    img: 'https://your-image-url.jpg'
  }
];
```

### Changing Colors
Update CSS variables in `styles.css`:
```css
:root {
  --pink: #f7c5cc;
  --lavender: #d9c8e0;
  /* ... */
}
```

---

## 📸 Image Credits

All images used are royalty-free and sourced from:
- [Unsplash](https://unsplash.com) – Free stock photos
- [Pexels](https://pexels.com) – Free stock photos
- [PAKUTASO](https://www.pakutaso.com) – Japanese free stock photos (Tulip image)

---

## 🧪 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |
| Opera | ✅ |
| Mobile Chrome | ✅ |
| Mobile Safari | ✅ |

---



---

## 🙏 Acknowledgments

- **Flower Photography**: Unsplash, Pexels, Pixabay, and PAKUTASO
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Inspiration**: Premium florist websites and e-commerce best practices


---

## ⭐ Show Your Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting issues
- 💡 Suggesting features
- 📢 Sharing with others

---

**FLOR-CHID** – Where every bloom tells a story. 🌸

---

*Made with 💚 and lots of petals*
