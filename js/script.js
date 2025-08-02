// Comprehensive car database with multiple cars per brand
const cars = [
  // Tesla Cars
  {
    brand: 'Tesla',
    name: 'Tesla Model S',
    image: 'images/Tesla Model S/2021-Tesla-Model-S-001-1080.jpg',
    images: [
      'images/Tesla Model S/2021-Tesla-Model-S-001-1080.jpg',
      'images/Tesla Model S/2021-Tesla-Model-S-002-1080.jpg',
      'images/Tesla Model S/2021-Tesla-Model-S-003-1080.jpg',
      'images/Tesla Model S/2021-Tesla-Model-S-005-1080.jpg',
      'images/Tesla Model S/2021-Tesla-Model-S-007-1080.jpg',
      'images/Tesla Model S/2021-Tesla-Model-S-008-1080.jpg',
      'images/Tesla Model S/2021-Tesla-Model-S-009-1080.jpg'
    ],
    details: 'Electric luxury sedan with autopilot features and 396-mile range.',
    featured: true,
    price: '$89,990'
  },
  {
    brand: 'Tesla',
    name: 'Tesla Model 3',
    image: 'images/Tesla model 3/2025-Tesla-Model-3-Performance-002-1080.jpg',
    images: [
      'images/Tesla model 3/2025-Tesla-Model-3-Performance-002-1080.jpg',
      'images/Tesla model 3/2025-Tesla-Model-3-Performance-003-1080.jpg',
      'images/Tesla model 3/2025-Tesla-Model-3-Performance-008-1080.jpg'
    ],
    details: 'Compact electric sedan with advanced technology and 358-mile range.',
    featured: true,
    price: '$38,990'
  },

  // BMW Cars
  {
    brand: 'BMW',
    name: 'BMW X5 M Competition',
    image: 'images/BMW X5/2024-BMW-X5-M-Competition-001-1080.jpg',
    images: [
      'images/BMW X5/2024-BMW-X5-M-Competition-001-1080.jpg',
      'images/BMW X5/2024-BMW-X5-M-Competition-002-1080.jpg',
      'images/BMW X5/2024-BMW-X5-M-Competition-004-1080.jpg',
      'images/BMW X5/2024-BMW-X5-M-Competition-005-1080.jpg',
      'images/BMW X5/2024-BMW-X5-M-Competition-008-1080.jpg'
    ],
    details: 'High-performance luxury SUV with M Competition package.',
    featured: true,
    price: '$130,900'
  },

  // Toyota Cars
  {
    brand: 'Toyota',
    name: 'Toyota GR Supra',
    image: 'images/Toyota Supra/2025-Toyota-GR-Supra-001-1080.jpg',
    images: [
      'images/Toyota Supra/2025-Toyota-GR-Supra-001-1080.jpg',
      'images/Toyota Supra/2025-Toyota-GR-Supra-002-1080.jpg',
      'images/Toyota Supra/2025-Toyota-GR-Supra-005-1080.jpg',
      'images/Toyota Supra/2025-Toyota-GR-Supra-006-1080.jpg',
      'images/Toyota Supra/2024-Toyota-GR-Supra-45th-Anniversary-Edition-004-1080.jpg',
      'images/Toyota Supra/2020-Toyota-Supra-2.0-007-1080.jpg',
      'images/Toyota Supra/2020-Toyota-Supra-2.0-001-1080.jpg'
    ],
    details: 'Legendary sports car with modern performance and classic styling.',
    featured: true,
    price: '$52,000'
  },

  // Ferrari Cars
  {
    brand: 'Ferrari',
    name: 'Ferrari 296 GTS',
    image: 'images/Ferrari 296/2023-Ferrari-296-GTS-004-1080.jpg',
    images: [
      'images/Ferrari 296/2023-Ferrari-296-GTS-004-1080.jpg',
      'images/Ferrari 296/2023-Ferrari-296-GTS-006-1080.jpg',
      'images/Ferrari 296/2026-Ferrari-296-Speciale-A-008-1080.jpg',
      'images/Ferrari 296/2024-Ferrari-296-Challenge-002-1080.jpg',
      'images/Ferrari 296/2024-Ferrari-296-Challenge-003-1080.jpg',
      'images/Ferrari 296/2024-Ferrari-296-Challenge-005-1080.jpg',
      'images/Ferrari 296/2024-Ferrari-296-Challenge-006-1080.jpg'
    ],
    details: 'Mid-engine V6 hybrid supercar with exceptional performance.',
    featured: true,
    price: '$322,986'
  },

  // Alfa Romeo Cars
  {
    brand: 'Alfa Romeo',
    name: 'Alfa Romeo 4C Spider',
    image: 'images/Alfa romeo 4c/2020-Alfa-Romeo-4C-Spider-33-Stradale-Tributo-001-1080.jpg',
    images: [
      'images/Alfa romeo 4c/2020-Alfa-Romeo-4C-Spider-33-Stradale-Tributo-001-1080.jpg',
      'images/Alfa romeo 4c/2020-Alfa-Romeo-4C-Spider-33-Stradale-Tributo-002-1080.jpg',
      'images/Alfa romeo 4c/2020-Alfa-Romeo-4C-Spider-33-Stradale-Tributo-003-1080.jpg',
      'images/Alfa romeo 4c/2012-Ugur-Sahin-Design-Alfa-Romeo-12C-GTS-001-1080.jpg',
      'images/Alfa romeo 4c/2012-Ugur-Sahin-Design-Alfa-Romeo-12C-GTS-002-1080.jpg',
      'images/Alfa romeo 4c/2012-Ugur-Sahin-Design-Alfa-Romeo-12C-GTS-004-1080.jpg',
      'images/Alfa romeo 4c/2012-Ugur-Sahin-Design-Alfa-Romeo-12C-GTS-005-1080.jpg'
    ],
    details: 'Lightweight sports car with Italian passion and precision.',
    featured: false,
    price: '$67,150'
  },

  // Aston Martin Cars
  {
    brand: 'Aston Martin',
    name: 'Aston Martin DBR22 Concept',
    image: 'images/Aston Martin DBR 22/2022-Aston-Martin-DBR22-Concept-001-1080.jpg',
    images: [
      'images/Aston Martin DBR 22/2022-Aston-Martin-DBR22-Concept-001-1080.jpg',
      'images/Aston Martin DBR 22/2022-Aston-Martin-DBR22-Concept-002-1080.jpg',
      'images/Aston Martin DBR 22/2022-Aston-Martin-DBR22-Concept-003-1080.jpg',
      'images/Aston Martin DBR 22/2022-Aston-Martin-DBR22-Concept-004-1080.jpg',
      'images/Aston Martin DBR 22/2021-Aston-Martin-V12-Speedster-001-1080.jpg',
      'images/Aston Martin DBR 22/2021-Aston-Martin-V12-Speedster-004-1080.jpg',
      'images/Aston Martin DBR 22/2021-Aston-Martin-V12-Speedster-006-1080.jpg'
    ],
    details: 'Concept hypercar showcasing future of automotive design.',
    featured: true,
    price: 'Concept'
  },

  // Audi Cars
  {
    brand: 'Audi',
    name: 'Audi A6 E-Tron Concept',
    image: 'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-001-1080.jpg',
    images: [
      'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-001-1080.jpg',
      'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-002-1080.jpg',
      'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-003-1080.jpg',
      'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-004-1080.jpg',
      'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-005-1080.jpg',
      'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-008-1080.jpg',
      'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-009-1080.jpg'
    ],
    details: 'Electric concept vehicle with avant-garde design and technology.',
    featured: false,
    price: 'Concept'
  }
];

// Home page slideshow images
const slideshowImages = [
  'images/Slideshow/2025-Pagani-Utopia-Roadster-006-1080.jpg',
  'images/Slideshow/2021-Koenigsegg-Jesko-Absolut-002-1080.jpg',
  'images/Slideshow/2002-Ferrari-Enzo-004-1080.jpg',
  'images/Slideshow/2020-Bugatti-Centodieci-004-1080.jpg',
  'images/Slideshow/2024-BMW-M-Hybrid-V8-Art-Car-007-1080.jpg'
];

let currentFilter = 'All';
let currentSlideshowIndex = 0;
let slideshowInterval;
let cardSlideshowIntervals = {};

// Simple home slideshow with smooth transitions
function startSlideshow() {
  console.log('Starting home slideshow...');
  const heroImage = document.querySelector('.hero-image');
  
  if (!heroImage) {
    console.log('Hero image not found');
    return;
  }
  
  // Set initial image
  heroImage.src = slideshowImages[currentSlideshowIndex];
  
  slideshowInterval = setInterval(() => {
    currentSlideshowIndex = (currentSlideshowIndex + 1) % slideshowImages.length;
    console.log('Changing to image:', slideshowImages[currentSlideshowIndex]);
    
    // Smooth fade transition with consistent timing
    heroImage.style.transition = 'opacity 1s ease-in-out';
    heroImage.style.opacity = '0';
    
    setTimeout(() => {
      heroImage.src = slideshowImages[currentSlideshowIndex];
      heroImage.style.opacity = '1';
    }, 500);
    
    setTimeout(() => {
      heroImage.style.transition = '';
    }, 1500);
  }, 6000); // 6 seconds between transitions for more consistent timing
}

function stopSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
}

// Simple card slideshow with smooth fade transitions
function startCardSlideshow(cardId, brandImages) {
  const card = document.getElementById(cardId);
  if (!card) return;
  
  const imageElement = card.querySelector('.car-image');
  if (!imageElement) return;
  
  let currentIndex = 0;
  
  cardSlideshowIntervals[cardId] = setInterval(() => {
    currentIndex = (currentIndex + 1) % brandImages.length;
    
    // Smooth fade transition for cards with consistent timing
    imageElement.style.transition = 'opacity 0.8s ease-in-out';
    imageElement.style.opacity = '0.4';
    
    setTimeout(() => {
      imageElement.src = brandImages[currentIndex];
      imageElement.style.opacity = '1';
    }, 400);
    
    setTimeout(() => {
      imageElement.style.transition = '';
    }, 1200);
  }, 10000); // 10 seconds between transitions for cards
}

function stopCardSlideshow(cardId) {
  if (cardSlideshowIntervals[cardId]) {
    clearInterval(cardSlideshowIntervals[cardId]);
    delete cardSlideshowIntervals[cardId];
  }
}

// --- Staggered Card Slideshow ---
function startStaggeredCardSlideshow() {
  const cards = Array.from(document.querySelectorAll('.card, .featured-card'));
  if (!cards.length) return;

  // Group cards by rows (assume 3 or 4 per row based on screen size)
  const cardsPerRow = window.innerWidth < 700 ? 1 : window.innerWidth < 1100 ? 2 : 3;
  const rows = [];
  for (let i = 0; i < cards.length; i += cardsPerRow) {
    rows.push(cards.slice(i, i + cardsPerRow));
  }

  let currentImageIndices = Array(cards.length).fill(0);
  let interval = 6000;
  let rowDelay = 400; // ms between rows

  function changeRow(rowIdx) {
    if (!rows[rowIdx]) return;
    rows[rowIdx].forEach((card, idxInRow) => {
      const cardIdx = rowIdx * cardsPerRow + idxInRow;
      const car = cars.find(c => c.name === card.querySelector('h3').textContent);
      if (!car || !car.images || car.images.length < 2) return;
      const imageElement = card.querySelector('.car-image');
      currentImageIndices[cardIdx] = (currentImageIndices[cardIdx] + 1) % car.images.length;
      // Fade+scale effect
      imageElement.style.transition = 'opacity 0.5s, transform 0.5s';
      imageElement.style.opacity = '0';
      imageElement.style.transform = 'scale(1.08)';
      setTimeout(() => {
        imageElement.src = car.images[currentImageIndices[cardIdx]];
        imageElement.style.opacity = '1';
        imageElement.style.transform = 'scale(1)';
      }, 250);
      setTimeout(() => {
        imageElement.style.transition = '';
      }, 700);
    });
  }

  // Clear any previous interval
  if (window.staggeredCardSlideshowInterval) clearInterval(window.staggeredCardSlideshowInterval);

  let row = 0;
  window.staggeredCardSlideshowInterval = setInterval(() => {
    for (let r = 0; r < rows.length; r++) {
      setTimeout(() => changeRow(r), r * rowDelay);
    }
  }, interval);
}

// --- Remove nav buttons from card hover, only show in modal ---
// Remove .card-nav-buttons from displayFeaturedCars and displayCars
// (Assume the modal already has nav buttons)

function displayFeaturedCars() {
  const container = document.getElementById('featuredCars');
  if (!container) return;
  container.innerHTML = '';
  const featuredCars = cars.filter(car => car.featured);
  featuredCars.forEach((car, index) => {
    const cardId = `featured-card-${index}`;
    const card = document.createElement('div');
    card.className = 'featured-card';
    card.id = cardId;
    card.innerHTML = `
      <div class="card-image">
        <img src="${car.image}" alt="${car.name}" class="car-image">
        <div class="card-overlay">
          <button class="view-details-btn" onclick='openCarModal(${JSON.stringify(car).replace(/"/g, "&quot;")})'>
            View Gallery
          </button>
        </div>
      </div>
      <div class="card-content">
        <h3>${car.name}</h3>
        <p class="brand-name">${car.brand}</p>
        <p class="card-description">${car.details}</p>
        <p class="car-price">${car.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function displayCars(brand = 'All') {
  const container = document.getElementById('carCards');
  if (!container) return;
  container.innerHTML = '';
  const filteredCars = brand === 'All' ? cars : cars.filter(c => c.brand === brand);
  filteredCars.forEach((car, index) => {
    const cardId = `car-card-${index}`;
    const card = document.createElement('div');
    card.className = 'card';
    card.id = cardId;
    card.innerHTML = `
      <div class="card-image">
        <img src="${car.image}" alt="${car.name}" class="car-image">
        <div class="card-overlay">
          <button class="view-details-btn" onclick='openCarModal(${JSON.stringify(car).replace(/"/g, "&quot;")})'>
            View Gallery
          </button>
        </div>
      </div>
      <div class="card-content">
        <h3>${car.name}</h3>
        <p class="brand-name">${car.brand}</p>
        <p class="car-price">${car.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Function to change card image manually
function changeCardImage(cardIndex, direction) {
  const card = document.querySelector(`#car-card-${cardIndex}, #featured-card-${cardIndex}`);
  if (!card) return;
  
  const imageElement = card.querySelector('.car-image');
  const car = cars.find(c => c.name === card.querySelector('h3').textContent);
  
  if (!car || !car.images) return;
  
  // Get current image index
  const currentSrc = imageElement.src;
  const currentIndex = car.images.findIndex(img => img === currentSrc);
  let newIndex = currentIndex + direction;
  
  if (newIndex < 0) newIndex = car.images.length - 1;
  if (newIndex >= car.images.length) newIndex = 0;
  
  // Smooth transition
  imageElement.style.transition = 'opacity 0.3s ease-in-out';
  imageElement.style.opacity = '0.5';
  
  setTimeout(() => {
    imageElement.src = car.images[newIndex];
    imageElement.style.opacity = '1';
  }, 150);
  
  setTimeout(() => {
    imageElement.style.transition = '';
  }, 450);
}

// New modal function for car galleries
function openCarModal(car) {
  // Remove any existing modal
  const existing = document.querySelector('.car-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'car-modal';
  modal.innerHTML = `
    <div class="car-modal-content">
      <span class="car-modal-close" tabindex="0" title="Close">&times;</span>
      <div class="car-modal-header">
        <h2>${car.name}</h2>
        <p class="car-modal-brand">${car.brand}</p>
        <p class="car-modal-price">${car.price}</p>
      </div>
      <div class="car-modal-gallery">
        <div class="car-modal-main-image">
          <img src="${car.images[0]}" alt="${car.name}" id="carModalMainImage">
          <button class="car-modal-nav prev" onclick="changeCarModalImage(-1)">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="car-modal-nav next" onclick="changeCarModalImage(1)">
            <i class="fas fa-chevron-right"></i>
          </button>
          <div class="car-modal-counter">
            <span id="currentImageIndex">1</span> / <span id="totalImages">${car.images.length}</span>
          </div>
        </div>
        <div class="car-modal-thumbnails">
          ${car.images.map((img, index) => `
            <img src="${img}" alt="${car.name}" class="car-modal-thumbnail ${index === 0 ? 'active' : ''}" 
                 onclick="setCarModalImage(${index})">
          `).join('')}
        </div>
      </div>
      <div class="car-modal-details">
        <p>${car.details}</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  window.currentCarModal = {
    car: car,
    currentImageIndex: 0
  };
  // Close modal functionality
  modal.querySelector('.car-modal-close').onclick = () => {
    document.body.removeChild(modal);
  };
  modal.querySelector('.car-modal-close').onkeydown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      document.body.removeChild(modal);
    }
  };
  modal.onclick = (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  };
  // Keyboard navigation
  document.addEventListener('keydown', function escListener(e) {
    if (!document.body.contains(modal)) {
      document.removeEventListener('keydown', escListener);
      return;
    }
    if (e.key === 'Escape') {
      document.body.removeChild(modal);
    } else if (e.key === 'ArrowLeft') {
      changeCarModalImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeCarModalImage(1);
    }
  });
  setCarModalImage(0);
}

function changeCarModalImage(direction) {
  if (!window.currentCarModal) return;
  
  const { car, currentImageIndex } = window.currentCarModal;
  let newIndex = currentImageIndex + direction;
  
  if (newIndex < 0) newIndex = car.images.length - 1;
  if (newIndex >= car.images.length) newIndex = 0;
  
  setCarModalImage(newIndex);
}

function setCarModalImage(index) {
  if (!window.currentCarModal) return;
  
  const { car } = window.currentCarModal;
  window.currentCarModal.currentImageIndex = index;
  
  const mainImage = document.getElementById('carModalMainImage');
  const thumbnails = document.querySelectorAll('.car-modal-thumbnail');
  const currentIndexSpan = document.getElementById('currentImageIndex');
  
  if (mainImage) {
    mainImage.src = car.images[index];
    mainImage.style.animation = 'fadeIn 0.3s ease-in-out';
  }
  
  if (currentIndexSpan) {
    currentIndexSpan.textContent = index + 1;
  }
  
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

// --- Fix gallery brand filter ---
function filterCars(brand) {
  displayCars(brand);
  if (typeof updateCarCount === 'function') updateCarCount();
  // Restart staggered slideshow for new cards
  setTimeout(startStaggeredCardSlideshow, 200);
}

function updateFilterButtons(selectedBrand) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.querySelector('.btn-text').textContent === selectedBrand || 
        (selectedBrand === 'All' && btn.querySelector('.btn-text').textContent === 'All Brands')) {
      btn.classList.add('active');
    }
  });
}

function updateClearFilter(brand) {
  const clearFilter = document.getElementById('clearFilter');
  if (clearFilter) {
    if (brand === 'All') {
      clearFilter.style.display = 'none';
    } else {
      clearFilter.style.display = 'block';
    }
  }
}

function clearFilter() {
  filterCars('All');
}

function openModal(car) {
  const modal = document.getElementById('carModal');
  if (!modal) return;
  
  document.getElementById('modalTitle').innerText = car.name;
  document.getElementById('modalImage').src = car.image;
  document.getElementById('modalDescription').innerText = car.details;
  document.getElementById('modalPrice').innerText = car.price;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('carModal');
  if (!modal) return;
  
  modal.style.display = 'none';
}

// Simple scroll animation
function initScrollAnimations() {
  window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card, .featured-card');
    const scrollY = window.scrollY;
    
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + scrollY;
      const windowHeight = window.innerHeight;
      const scrollProgress = (scrollY - cardTop + windowHeight) / (windowHeight + rect.height);
      
      if (scrollProgress > 0 && scrollProgress < 1) {
        const spacing = Math.max(10, 30 - (scrollProgress * 20));
        card.style.margin = `${spacing}px`;
        card.style.transform = `translateY(${scrollProgress * -5}px)`;
      } else {
        card.style.margin = '20px';
        card.style.transform = 'translateY(0)';
      }
    });
  });
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('carModal');
  if (event.target === modal) {
    closeModal();
  }
}

// --- Animated stats numbers ---
function animateStats() {
  const stats = [
    { selector: '.stat-number.cars', value: 500, suffix: '+' },
    { selector: '.stat-number.visitors', value: 50000, suffix: '+' },
    { selector: '.stat-number.countries', value: 25, suffix: '+' },
    { selector: '.stat-number.years', value: 15, suffix: '+' }
  ];
  stats.forEach(stat => {
    const el = document.querySelector(stat.selector);
    if (!el) return;
    let start = 0;
    let end = stat.value;
    let duration = 1200;
    let step = Math.ceil(end / (duration / 16));
    let suffix = stat.suffix || '';
    function update() {
      start += step;
      if (start >= end) {
        el.textContent = end.toLocaleString() + suffix;
      } else {
        el.textContent = start.toLocaleString() + suffix;
        requestAnimationFrame(update);
      }
    }
    update();
  });
}

// Animate stats when section comes into view
function observeStatsSection() {
  const section = document.querySelector('.stats-section');
  if (!section) return;
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animateStats();
      animated = true;
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(section);
}

// --- Fix homepage slideshow ---
function startSlideshow() {
  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;
  heroImage.src = slideshowImages[currentSlideshowIndex];
  if (window.heroSlideshowInterval) clearInterval(window.heroSlideshowInterval);
  window.heroSlideshowInterval = setInterval(() => {
    currentSlideshowIndex = (currentSlideshowIndex + 1) % slideshowImages.length;
    heroImage.style.transition = 'opacity 1s cubic-bezier(0.4,0,0.2,1)';
    heroImage.style.opacity = '0';
    setTimeout(() => {
      heroImage.src = slideshowImages[currentSlideshowIndex];
      heroImage.style.opacity = '1';
    }, 500);
    setTimeout(() => {
      heroImage.style.transition = '';
    }, 1500);
  }, 6000);
}

// --- On DOMContentLoaded, start everything ---
document.addEventListener('DOMContentLoaded', function() {
  // Partners Ticker Logic
  const ticker = document.getElementById('partnersTicker');
  if (ticker) {
    // List of logo filenames in images/Symbols/
    const logoFiles = [
      'Tesla.jpg',
      'Toyota.jpg',
      'BMW.jpg',
      'Audi.png',
      'aston-martin-team-racing-power-600nw-2406654785.webp',
      'ford-logo-on-transparent-background-free-vector.jpg',
      'Dodge.png',
      'Alfa Romeo.jpeg',
      'Ferrari.png',
      'Pagani.jpeg',
      'Bugatti.png'
    ];
    // Create the ticker track
    const track = document.createElement('div');
    track.className = 'partners-ticker-track';
    // Add logos twice for seamless looping
    for (let i = 0; i < 2; i++) {
      logoFiles.forEach(file => {
        const img = document.createElement('img');
        img.src = `images/Symbols/${file}`;
        img.alt = file.replace(/\..+$/, '');
        img.className = 'partners-ticker-logo';
        track.appendChild(img);
      });
    }
    ticker.appendChild(track);
  }
  
  // Load random gallery if on gallery page
  if (window.location.pathname.includes('gallery.html')) {
    loadRandomGallery();
  }
  // Show featured cars on homepage
  if (document.getElementById('featuredCars')) {
    displayFeaturedCars();
  }
  setTimeout(startStaggeredCardSlideshow, 500);
  // Start homepage slideshow
  if (document.querySelector('.hero-image')) {
    startSlideshow();
  }
  // Animated stats
  observeStatsSection();
});

// Initialize everything when page loads
window.onload = () => {
  console.log('Page loaded, starting initialization...');
  showHome();
  initScrollAnimations();
  
  // Force start the home slideshow
  setTimeout(() => {
    console.log('Forcing home slideshow start...');
    startSlideshow();
  }, 1000);
};

// Login validation
function validateLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Simple validation - in real app, this would check against a database
  if (!email || !password) {
    showNotification('Please fill in all fields', 'error');
    return false;
  }
  
  if (!email.includes('@')) {
    showNotification('Please enter a valid email address', 'error');
    return false;
  }
  
  if (password.length < 6) {
    showNotification('Password must be at least 6 characters', 'error');
    return false;
  }
  
  // Simulate login success
  showNotification('Login successful! Welcome back!', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
  
  return false; // Prevent form submission
}

// Signup validation
function validateSignup() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (!name || !email || !password || !confirmPassword) {
    showNotification('Please fill in all fields', 'error');
    return false;
  }
  
  if (!email.includes('@')) {
    showNotification('Please enter a valid email address', 'error');
    return false;
  }
  
  if (password.length < 6) {
    showNotification('Password must be at least 6 characters', 'error');
    return false;
  }
  
  if (password !== confirmPassword) {
    showNotification('Passwords do not match', 'error');
    return false;
  }
  
  // Simulate signup success
  showNotification('Account created successfully! Welcome to LuxuryDrive!', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
  
  return false; // Prevent form submission
}

// Gallery randomization
function loadRandomGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;
  
  // Random car images from different folders
  const randomImages = [
    'images/Random for showcase/2023-Dodge-Challenger-SRT-Demon-170-001-1080.jpg',
    'images/Random for showcase/2018-Dodge-Challenger-SRT-Demon-005-1080.jpg',
    'images/Random for showcase/2024-Ford-Mustang-GT-002-1080.jpg',
    'images/Random for showcase/2021-Pagani-Huayra-R-005-1080.jpg',
    'images/Random for showcase/2021-Pagani-Huayra-R-003-1080.jpg',
    'images/Random for showcase/2021-Pagani-Huayra-R-002-1080.jpg',
    'images/Random for showcase/2026-Bugatti-Tourbillon-004-1080.jpg',
    'images/Random for showcase/2026-Bugatti-Tourbillon-003-1080.jpg',
    'images/Random for showcase/2026-Bugatti-Tourbillon-002-1080.jpg',
    'images/Random for showcase/2026-Bugatti-Tourbillon-001-1080.jpg',
    'images/Tesla Model S/2021-Tesla-Model-S-001-1080.jpg',
    'images/Tesla Model S/2021-Tesla-Model-S-002-1080.jpg',
    'images/BMW X5/2024-BMW-X5-M-Competition-001-1080.jpg',
    'images/BMW X5/2024-BMW-X5-M-Competition-002-1080.jpg',
    'images/Ferrari 296/2023-Ferrari-296-GTS-004-1080.jpg',
    'images/Ferrari 296/2023-Ferrari-296-GTS-006-1080.jpg',
    'images/Toyota Supra/2025-Toyota-GR-Supra-001-1080.jpg',
    'images/Toyota Supra/2025-Toyota-GR-Supra-002-1080.jpg',
    'images/Alfa romeo 4c/2020-Alfa-Romeo-4C-Spider-33-Stradale-Tributo-001-1080.jpg',
    'images/Aston Martin DBR 22/2022-Aston-Martin-DBR22-Concept-001-1080.jpg',
    'images/Audi A6/2022-Audi-A6-Avant-E-Tron-Concept-001-1080.jpg'
  ];
  
  // Shuffle array
  const shuffled = randomImages.sort(() => 0.5 - Math.random());
  
  // Take first 12 images
  const selectedImages = shuffled.slice(0, 12);
  
  galleryGrid.innerHTML = '';
  
  selectedImages.forEach((image, index) => {
    const carName = getCarNameFromImage(image);
    const brand = getBrandFromImage(image);
    
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.onclick = () => openLightbox(index);
    
    galleryItem.innerHTML = `
      <img src="${image}" alt="${carName}">
      <div class="gallery-overlay">
        <h3>${carName}</h3>
        <p>${brand}</p>
        <i class="fas fa-expand"></i>
      </div>
    `;
    
    galleryGrid.appendChild(galleryItem);
  });
}

function getCarNameFromImage(imagePath) {
  const filename = imagePath.split('/').pop();
  const name = filename.replace(/^\d{4}-/, '').replace(/-\d{3}-1080\.jpg$/, '');
  return name.replace(/-/g, ' ');
}

function getBrandFromImage(imagePath) {
  if (imagePath.includes('Tesla')) return 'Tesla';
  if (imagePath.includes('BMW')) return 'BMW';
  if (imagePath.includes('Ferrari')) return 'Ferrari';
  if (imagePath.includes('Toyota')) return 'Toyota';
  if (imagePath.includes('Alfa')) return 'Alfa Romeo';
  if (imagePath.includes('Aston')) return 'Aston Martin';
  if (imagePath.includes('Audi')) return 'Audi';
  if (imagePath.includes('Dodge')) return 'Dodge';
  if (imagePath.includes('Ford')) return 'Ford';
  if (imagePath.includes('Pagani')) return 'Pagani';
  if (imagePath.includes('Bugatti')) return 'Bugatti';
  return 'Premium Car';
}

