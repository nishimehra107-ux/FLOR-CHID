// script.js – FLOR-CHID dynamic content & interactions

// ----- sample flower data (royalty-free images from pexels/unsplash via placeholder) -----
const flowers = [
  { name: 'Red Rose', sci: 'Rosa gallica', price: '₹60/stem', img: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&h=400&fit=crop' },
  { name: 'Tulip', sci: 'Tulipa gesneriana', price: '₹150/stem', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop' },
  { name: 'Sunflower', sci: 'Helianthus annuus', price: '₹120/stem', img: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop' },
  { name: 'Orchid', sci: 'Phalaenopsis', price: '₹280/stem', img: 'https://images.unsplash.com/photo-1556189250-72ba954cfb2c?w=400&h=400&fit=crop' },
  { name: 'Lily', sci: 'Lilium candidum', price: '₹180/stem', img: 'https://images.unsplash.com/photo-1586003671441-45caffda866b?w=400&h=400&fit=crop' },
  { name: 'Gerbera', sci: 'Gerbera jamesonii', price: '₹80/stem', img: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6f5?w=400&h=400&fit=crop' },
  { name: 'Carnation', sci: 'Dianthus caryophyllus', price: '₹70/stem', img: 'https://images.unsplash.com/photo-1587293852726-70cdb0c3d0b5?w=400&h=400&fit=crop' },
  { name: 'Hydrangea', sci: 'Hydrangea macrophylla', price: '₹300/stem', img: 'https://images.unsplash.com/photo-1558537345-c0f8e733989d?w=400&h=400&fit=crop' },
];

const bouquets = [
  { name: 'Classic Rose', price: '₹799', img: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=400&h=200&fit=crop' },
  { name: 'Luxury Red Roses', price: '₹1499', img: 'https://images.unsplash.com/photo-1561181286-d3fee7d29164?w=400&h=200&fit=crop' },
  { name: 'Sunflower Happiness', price: '₹999', img: 'https://images.unsplash.com/photo-1589292949588-10193df5b8c0?w=400&h=200&fit=crop' },
  { name: 'Elegant Orchid', price: '₹1799', img: 'https://images.unsplash.com/photo-1577023314880-99693bbb7b54?w=400&h=200&fit=crop' },
];

const occasions = ['Birthday','Anniversary','Wedding','Proposal','Congratulations','Graduation','Mother\'s Day','Valentine\'s Day','Christmas','New Year','Sympathy','Just Because'];

// ----- render flowers -----
const flowerGrid = document.getElementById('flowerGrid');
flowers.forEach(f => {
  const card = document.createElement('div');
  card.className = 'flower-card';
  card.innerHTML = `
    <img src="${f.img}" alt="${f.name}" loading="lazy" />
    <h4>${f.name}</h4>
    <div class="sci">${f.sci}</div>
    <div class="price">${f.price}</div>
    <div class="actions">
      <button>+ Cart</button>
      <button><i class="far fa-heart"></i></button>
    </div>
  `;
  flowerGrid.appendChild(card);
});

// ----- render bouquets -----
const bouquetGrid = document.getElementById('bouquetGrid');
bouquets.forEach(b => {
  const card = document.createElement('div');
  card.className = 'bouquet-card';
  card.innerHTML = `
    <img src="${b.img}" alt="${b.name}" loading="lazy" />
    <div class="info">
      <h4>${b.name}</h4>
      <div class="price">${b.price}</div>
      <button class="btn primary" style="padding:0.3rem 1.2rem; font-size:0.8rem;">Add to Cart</button>
    </div>
  `;
  bouquetGrid.appendChild(card);
});

// ----- render occasions -----
const occasionChips = document.getElementById('occasionChips');
occasions.forEach(occ => {
  const span = document.createElement('span');
  span.textContent = occ;
  occasionChips.appendChild(span);
});

// ----- personal message preview -----
const msgInput = document.getElementById('msgInput');
const charCount = document.getElementById('charCount');
const previewCard = document.getElementById('previewCard');

msgInput.addEventListener('input', () => {
  const len = msgInput.value.length;
  charCount.textContent = len;
  previewCard.textContent = msgInput.value || '💌 Your note will appear here';
});

// ----- builder live price (demo) -----
const builderPrice = document.getElementById('builderPrice');
let price = 1299;
setInterval(() => {
  price += Math.floor(Math.random() * 20) - 5;
  if (price < 800) price = 800;
  builderPrice.textContent = '₹' + price;
}, 2800);

// ----- navbar toggle (mobile) -----
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// ----- cart badge increment (demo) -----
const cartBadge = document.querySelector('.cart-badge');
let cartCount = 0;
document.addEventListener('click', (e) => {
  if (e.target.textContent.trim() === '+ Cart' || e.target.closest('button')?.textContent.includes('Add to Cart')) {
    cartCount++;
    if (cartBadge) cartBadge.textContent = cartCount;
  }
});

// ----- sticky nav effect (transparent) -----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(255,255,255,0.92)';
  } else {
    nav.style.background = 'rgba(255,255,255,0.7)';
  }
});

console.log('🌷 FLOR-CHID loaded – premium blooms');