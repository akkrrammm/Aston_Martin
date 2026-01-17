// Aston Martin Models Data with Real Images and Official Links
const astonMartinModels = [
    {
        id: 1,
        name: "Vantage",
        category: "sports",
        image: "aston-martin-vantage-gt4.jpg",
        description: "The Vantage is a pure sports car with aggressive styling and breathtaking performance. It delivers an exhilarating driving experience with its powerful V8 engine and precise handling.",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "503 HP",
            torque: "685 Nm",
            "0-100": "3.6 seconds",
            "top-speed": "314 km/h"
        },
        features: ["Sports Car", "V8 Engine", "Aggressive Design", "Track Capable"],
        link: "https://www.astonmartin.com/en/models/vantage"
    },
    {
        id: 2,
        name: "DB12",
        category: "gt",
        image: "OIP.jpg",
        description: "The DB12 is the definitive Grand Tourer, combining luxury, technology, and performance in a breathtaking package. It's designed for long-distance comfort without compromising on excitement.",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "680 HP",
            torque: "800 Nm",
            "0-100": "3.5 seconds",
            "top-speed": "325 km/h"
        },
        features: ["Grand Tourer", "Luxury Interior", "Advanced Tech", "Comfort"],
        link: "https://www.astonmartin.com/en/models/db12"
    },
    {
        id: 3,
        name: "DBX",
        category: "suv",
        image: "aston_martin_dbx_render_2023.jpg",
        description: "The DBX is Aston Martin's first SUV, offering unparalleled luxury and performance. It combines SUV practicality with sports car dynamics in a truly unique package.",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "550 HP",
            torque: "700 Nm",
            "0-100": "4.5 seconds",
            "top-speed": "291 km/h"
        },
        features: ["Luxury SUV", "All-Wheel Drive", "Spacious Interior", "Practical"],
        link: "https://www.astonmartin.com/en/models/dbx"
    },
    {
        id: 4,
        name: "Valhalla",
        category: "hyper",
        image: "OIP (1).jpg",
        description: "Valhalla is Aston Martin's hybrid hypercar, born from Formula 1 technology. It represents the pinnacle of performance and innovation in the automotive world.",
        specs: {
            engine: "4.0L V8 + Hybrid",
            power: "1,000 HP",
            torque: "1,000 Nm",
            "0-100": "2.5 seconds",
            "top-speed": "350 km/h"
        },
        features: ["Hypercar", "Hybrid", "F1 Technology", "Limited Production"],
        link: "https://www.astonmartin.com/en/models/valhalla"
    },
    {
        id: 5,
        name: "Valkyrie",
        category: "hyper",
        image: "OIP (2).jpg",
        description: "The Valkyrie is the ultimate track-focused hypercar, developed with Red Bull Advanced Technologies. It's the closest thing to a Formula 1 car for the road.",
        specs: {
            engine: "6.5L V12 + Hybrid",
            power: "1,160 HP",
            torque: "900 Nm",
            "0-100": "2.5 seconds",
            "top-speed": "402 km/h"
        },
        features: ["Track Hypercar", "V12 Engine", "F1 Derived", "Extreme Performance"],
        link: "https://www.astonmartin.com/en/models/valkyrie"
    },
    {
        id: 6,
        name: "Vanquish",
        category: "gt",
        image: "aston-martin-vanquish-front-quarter.jpg",
        description: "The Vanquish represents the perfect balance of elegance and performance. It's a Grand Tourer that delivers exceptional comfort while being capable of breathtaking speed.",
        specs: {
            engine: "5.2L V12 Twin-Turbo",
            power: "603 HP",
            torque: "630 Nm",
            "0-100": "3.5 seconds",
            "top-speed": "323 km/h"
        },
        features: ["Grand Tourer", "V12 Engine", "Elegant Design", "Luxury"],
        link: "https://www.astonmartin.com/en/models/vanquish"
    },
    {
        id: 7,
        name: "DB11",
        category: "gt",
        image: "OIP (5).jpg",
        description: "The DB11 is an icon of British luxury and performance. It set new standards for Grand Tourers with its innovative design and exceptional driving dynamics.",
        specs: {
            engine: "4.0L V8 / 5.2L V12",
            power: "503-630 HP",
            torque: "675-700 Nm",
            "0-100": "3.9 seconds",
            "top-speed": "322 km/h"
        },
        features: ["Iconic GT", "Luxury", "Advanced Tech", "Comfortable"],
        link: "https://www.astonmartin.com/en/models/db11"
    },
    {
        id: 8,
        name: "DBS",
        category: "gt",
        image: "2020-Aston-Martin-DBS.jpg",
        description: "The DBS Superleggera is the ultimate Aston Martin GT, combining breathtaking power with exquisite luxury. It's designed for those who demand the very best.",
        specs: {
            engine: "5.2L V12 Twin-Turbo",
            power: "725 HP",
            torque: "900 Nm",
            "0-100": "3.4 seconds",
            "top-speed": "340 km/h"
        },
        features: ["Super GT", "V12 Power", "Luxury", "High Performance"],
        link: "https://www.astonmartin.com/en/models/dbs"
    },
    {
        id: 9,
        name: "Valour",
        category: "special",
        image: "Valour_Launch_Imagery-8.webp",
        description: "The Valour is a limited-edition celebration of Aston Martin's heritage, featuring a manual transmission and retro-inspired design for the ultimate driving purist.",
        specs: {
            engine: "5.2L V12 Twin-Turbo",
            power: "705 HP",
            torque: "753 Nm",
            "0-100": "3.5 seconds",
            "top-speed": "330 km/h"
        },
        features: ["Limited Edition", "Manual Transmission", "Heritage Design", "Collector's Item"],
        link: "https://www.astonmartin.com/en/models/valour"
    },
    {
        id: 10,
        name: "Valiant",
        category: "special",
        image: "OIP (6).jpg",
        description: "The Valiant is a track-focused special edition based on the Vantage, created for Formula 1 champion Fernando Alonso. It's the ultimate expression of performance.",
        specs: {
            engine: "5.2L V12 Twin-Turbo",
            power: "735 HP",
            torque: "753 Nm",
            "0-100": "3.0 seconds",
            "top-speed": "340 km/h"
        },
        features: ["Track Special", "V12 Power", "Lightweight", "Extreme Performance"],
        link: "https://www.astonmartin.com/en/models/valiant"
    },
    {
        id: 11,
        name: "AMR25 F1",
        category: "special",
        image: "OIP (7).jpg",
        description: "The AMR25 is Aston Martin's Formula 1 race car, representing the pinnacle of motorsport technology and performance on the world's greatest racing circuits.",
        specs: {
            engine: "1.6L V6 Turbo Hybrid",
            power: "1,000+ HP",
            torque: "N/A",
            "0-100": "2.0 seconds",
            "top-speed": "370 km/h"
        },
        features: ["Formula 1 Car", "Hybrid Power", "Carbon Fiber", "Race Technology"],
        link: "https://www.astonmartin.com/en/formula1"
    },
    {
        id: 12,
        name: "DBX707",
        category: "suv",
        image: "OIP (8).jpg",
        description: "The DBX707 is the most powerful luxury SUV in the world, taking performance to unprecedented levels while maintaining Aston Martin's signature luxury and comfort.",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "707 HP",
            torque: "900 Nm",
            "0-100": "3.1 seconds",
            "top-speed": "310 km/h"
        },
        features: ["Performance SUV", "707 HP", "All-Wheel Drive", "Luxury"],
        link: "https://www.astonmartin.com/en/models/dbx/dbx707"
    }
];

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const modelsContainer = document.getElementById('modelsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const modelModal = document.getElementById('modelModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Load Models
function loadModels(filter = 'all') {
    modelsContainer.innerHTML = '';
    
    const filteredModels = filter === 'all' 
        ? astonMartinModels 
        : astonMartinModels.filter(model => model.category === filter);
    
    filteredModels.forEach(model => {
        const modelElement = document.createElement('div');
        modelElement.className = `model-item ${model.category}`;
        modelElement.dataset.id = model.id;
        
        modelElement.innerHTML = `
            <div class="model-image">
                <img src="${model.image}" alt="${model.name}" loading="lazy">
            </div>
            <div class="model-info">
                <div class="model-category">${getCategoryLabel(model.category)}</div>
                <h3 class="model-name">${model.name}</h3>
                <p class="model-description">${model.description.substring(0, 100)}...</p>
                <div class="model-features">
                    ${model.features.map(feature => `
                        <div class="feature">
                            <i class="fas fa-check"></i>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="model-actions">
                    <a href="${model.link}" target="_blank" class="model-link">
                        View on Official Site <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
        
        modelElement.addEventListener('click', (e) => {
            if (!e.target.closest('.model-link')) {
                openModelModal(model);
            }
        });
        
        modelsContainer.appendChild(modelElement);
    });
    
    // Animate models
    gsap.fromTo('.model-item', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.models-grid',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        'sports': 'Sports Car',
        'gt': 'Grand Tourer',
        'suv': 'Luxury SUV',
        'hyper': 'Hypercar',
        'special': 'Special Edition'
    };
    return labels[category] || category;
}

// Open model modal
function openModelModal(model) {
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${model.image}" alt="${model.name}">
        </div>
        <div class="modal-info">
            <div class="modal-category">${getCategoryLabel(model.category)}</div>
            <h2>${model.name}</h2>
            <p class="modal-description">${model.description}</p>
            
            <div class="modal-specs">
                <h3>Specifications</h3>
                ${Object.entries(model.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <span class="spec-label">${key.toUpperCase()}</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="modal-features">
                <h3>Key Features</h3>
                <div class="model-features">
                    ${model.features.map(feature => `
                        <div class="feature">
                            <i class="fas fa-check"></i>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-actions">
                <a href="${model.link}" target="_blank" class="modal-link">
                    View Full Details on AstonMartin.com <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
    
    modelModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModelModal() {
    modelModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        loadModels(button.dataset.filter);
    });
});

closeModal.addEventListener('click', closeModelModal);
modelModal.addEventListener('click', (e) => {
    if (e.target === modelModal) {
        closeModelModal();
    }
});

// Hero animations
gsap.to('.hero h1', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out'
});

gsap.to('.hero p', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8,
    ease: 'power2.out'
});

gsap.to('.hero .btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.1,
    ease: 'power2.out'
});

// Section animations
gsap.from('.section-title', {
    scrollTrigger: {
        trigger: '.models-gallery',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out'
});

gsap.from('.section-subtitle', {
    scrollTrigger: {
        trigger: '.models-gallery',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2,
    ease: 'power2.out'
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Preload images for better performance
function preloadImages() {
    astonMartinModels.forEach(model => {
        const img = new Image();
        img.src = model.image;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadModels();
    preloadImages();
    
    console.log('Aston Martin Models Gallery Loaded');
    console.log('Total Models:', astonMartinModels.length);
    console.log('All models have direct links to official Aston Martin website');
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modelModal.style.display === 'block') {
        closeModelModal();
    }
});

// أضف هذا الكود قبل </script>
// تحسينات الـ Performance
class PerformanceOptimizer {
  constructor() {
    this.images = [];
    this.observer = null;
    this.init();
  }

  init() {
    this.setupLazyLoading();
    this.setupPreload();
    this.setupSmoothScrolling();
    this.setupTouchOptimizations();
  }

  setupLazyLoading() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          this.observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px',
      threshold: 0.1
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      this.observer.observe(img);
    });
  }

  setupPreload() {
    // Preload critical images
    const criticalImages = [
      astonMartinModels[0].image,
      astonMartinModels[1].image
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupTouchOptimizations() {
    // تحسينات للمس
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      e.preventDefault();
    }, { passive: false });
  }
}

// تحسينات الـ Interactions
class InteractionEnhancer {
  constructor() {
    this.cursor = null;
    this.init();
  }

  init() {
    this.createCustomCursor();
    this.setupHoverEffects();
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
  }

  createCustomCursor() {
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    document.body.appendChild(this.cursor);

    document.addEventListener('mousemove', (e) => {
      gsap.to(this.cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
    });

    document.querySelectorAll('a, button, .model-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        this.cursor.classList.remove('hover');
      });
    });
  }

  setupHoverEffects() {
    document.querySelectorAll('.model-item').forEach(item => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 5;
        const rotateX = ((centerY - y) / centerY) * 5;

        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Tab navigation between models
      if (e.key === 'Tab' && e.target.classList.contains('model-item')) {
        e.preventDefault();
        const items = document.querySelectorAll('.model-item');
        const currentIndex = Array.from(items).indexOf(e.target);
        const nextIndex = e.shiftKey ? currentIndex - 1 : currentIndex + 1;
        
        if (items[nextIndex]) {
          items[nextIndex].focus();
        }
      }
    });
  }

  setupFocusManagement() {
    // Focus trap for modal
    modelModal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusable = modelModal.querySelectorAll('button, a, input, textarea, select');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }
}

// تحسينات الـ Animations
class AnimationManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupPageTransitions();
    this.setupScrollAnimations();
    this.setupStaggerEffects();
  }

  setupPageTransitions() {
    // Fade in page
    gsap.from('body', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    });

    // Stagger animation for nav items
    gsap.from('.nav-link', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
      ease: 'power2.out'
    });
  }

  setupScrollAnimations() {
    // Animate on scroll with more polish
    gsap.utils.toArray('.model-item').forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(item,
            { opacity: 0, y: 50, rotationY: 15 },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 0.8,
              ease: 'power2.out',
              delay: i * 0.05
            }
          );
        }
      });
    });
  }

  setupStaggerEffects() {
    // Stagger children animations
    const staggerContainers = ['.models-grid', '.footer-content'];
    
    staggerContainers.forEach(selector => {
      gsap.from(`${selector} > *`, {
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    });
  }
}

// تحسينات الـ Accessibility
class AccessibilityEnhancer {
  constructor() {
    this.init();
  }

  init() {
    this.enhanceSemantics();
    this.setupAriaLabels();
    this.setupFocusVisible();
    this.setupScreenReaderOptimizations();
  }

  enhanceSemantics() {
    // Add ARIA labels to interactive elements
    document.querySelectorAll('.model-link').forEach(link => {
      const modelName = link.closest('.model-item').querySelector('.model-name').textContent;
      link.setAttribute('aria-label', `View ${modelName} on official site`);
    });

    document.querySelectorAll('.filter-btn').forEach((btn, i) => {
      btn.setAttribute('aria-label', `Filter by ${btn.textContent}`);
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', btn.classList.contains('active'));
      btn.setAttribute('tabindex', btn.classList.contains('active') ? '0' : '-1');
    });
  }

  setupAriaLabels() {
    // Modal accessibility
    modelModal.setAttribute('aria-modal', 'true');
    modelModal.setAttribute('role', 'dialog');
    modelModal.setAttribute('aria-labelledby', 'modalTitle');
    
    const closeBtn = document.getElementById('closeModal');
    closeBtn.setAttribute('aria-label', 'Close modal');
  }

  setupFocusVisible() {
    // Better focus indicators
    document.addEventListener('focusin', (e) => {
      if (e.target.matches('a, button, input, [tabindex]')) {
        e.target.classList.add('focus-visible');
      }
    });

    document.addEventListener('focusout', (e) => {
      e.target.classList.remove('focus-visible');
    });
  }

  setupScreenReaderOptimizations() {
    // Live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.className = 'sr-only';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    document.body.appendChild(liveRegion);

    // Announce model filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setTimeout(() => {
          liveRegion.textContent = `Showing ${btn.textContent} models`;
        }, 100);
      });
    });
  }
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Initialize optimizers
  new PerformanceOptimizer();
  new InteractionEnhancer();
  new AnimationManager();
  new AccessibilityEnhancer();

  // Additional mobile optimizations
  if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
    
    // Larger touch targets
    document.querySelectorAll('.btn, .filter-btn, .model-link').forEach(el => {
      el.style.minHeight = '44px';
      el.style.minWidth = '44px';
    });
  }

  // Add loading priority
  const heroImg = document.querySelector('.hero-bg');
  if (heroImg) {
    heroImg.style.backgroundImage = `url('DBS_main.webp')`;
    
    // Load high-res after initial render
    setTimeout(() => {
      heroImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
                                      url('DBS_main.webp')`;
    }, 100);
  }
});