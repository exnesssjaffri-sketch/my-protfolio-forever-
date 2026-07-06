/* ================================================================
   JAFFEIZ RESTAURANT — Complete JavaScript
   ================================================================
   Features: Loading screen, particles, typing effect, menu filter,
   cart system, coupon, booking/billing flow, review carousel,
   scroll animations, mobile nav, promo banner.
   ================================================================ */

'use strict';

// ================================================================
// 1. DATA — Menu Items & Reviews
// ================================================================

/** Array of menu items for the categorized menu (affordable PKR prices) */
const menuData = [
    // ---- Pakistani Meals ----
    {
        id: 1,
        name: 'Chicken Biryani',
        category: 'pakistani',
        description: 'Fragrant basmati rice layered with tender chicken, aromatic spices, and saffron.',
        price: 650,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80'
    },
    {
        id: 2,
        name: 'Beef Korma',
        category: 'pakistani',
        description: 'Slow-cooked tender beef in a rich, creamy yogurt and cashew gravy.',
        price: 750,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80'
    },
    {
        id: 3,
        name: 'Chicken Karahi',
        category: 'pakistani',
        description: 'Sizzling wok-cooked chicken with tomatoes, ginger, and green chilies.',
        price: 700,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80'
    },
    {
        id: 4,
        name: 'Lamb Pulao',
        category: 'pakistani',
        description: 'Fragrant rice with tender lamb, caramelized onions, and warm spices.',
        price: 800,
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80'
    },
    {
        id: 5,
        name: 'Daal Chawal',
        category: 'pakistani',
        description: 'Comforting lentils simmered with garlic and cumin, served over steamed rice.',
        price: 400,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
    {
        id: 6,
        name: 'Seekh Kebab',
        category: 'pakistani',
        description: 'Spiced minced meat skewers grilled to perfection on the tandoor.',
        price: 550,
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80'
    },
    // ---- Drinks ----
    // (Removed spicy / masala drinks per request)
    {
        id: 8,
        name: 'Espresso',
        category: 'drinks',
        description: 'Rich, bold single-origin espresso shot. Pure energy in a cup.',
        price: 200,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80'
    },
    {
        id: 9,
        name: 'Cappuccino',
        category: 'drinks',
        description: 'Velvety espresso with steamed milk foam and a dusting of cocoa.',
        price: 300,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80'
    },
    {
        id: 10,
        name: 'Latte',
        category: 'drinks',
        description: 'Smooth espresso with creamy steamed milk. Available in vanilla or caramel.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80'
    },
    {
        id: 11,
        name: 'Mango Milkshake',
        category: 'drinks',
        description: 'Thick, creamy milkshake made with fresh Alphonso mangoes.',
        price: 400,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    },
    {
        id: 12,
        name: 'Chocolate Milkshake',
        category: 'drinks',
        description: 'Decadent chocolate milkshake topped with whipped cream and shavings.',
        price: 400,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    }
    ,
    {
        id: 13,
        name: 'Vanilla Ice Cream Shake',
        category: 'drinks',
        description: 'Creamy vanilla ice cream blended with milk for a smooth, classic shake.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
    },
    {
        id: 14,
        name: 'Strawberry Ice Cream Shake',
        category: 'drinks',
        description: 'Fresh strawberry ice cream shaken with milk and a touch of sweetness.',
        price: 380,
        image: 'https://images.unsplash.com/photo-1505253758479-34fbd9f1a0d9?w=400&q=80'
    },
    {
        id: 15,
        name: 'Mango Ice Cream Float',
        category: 'drinks',
        description: 'Mango ice cream served in chilled soda — a fruity, creamy float.',
        price: 420,
        image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80'
    },
    {
        id: 16,
        name: 'Kulfi Cream',
        category: 'drinks',
        description: 'Traditional kulfi-inspired creamy drink with pistachio and cardamom notes.',
        price: 450,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
    }
];

/** Array of fake reviews for the carousel */
const reviewsData = [
    {
        name: 'Sarah Al-Mansouri',
        location: 'Dubai, UAE',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        stars: 5,
        text: 'Absolutely phenomenal! The Chicken Biryani at Jaffeiz transported me straight to Lahore. The aroma, the spices, the tenderness of the meat — perfection. And their Chai? Out of this world. I had it delivered to Dubai and it arrived hot and fresh. Jaffeiz has earned a lifelong customer.'
    },
    {
        name: 'James Mitchell',
        location: 'London, UK',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        stars: 5,
        text: 'I\'ve traveled the world and tasted cuisine from every corner, but Jaffeiz holds a special place in my heart. The Beef Korma is the best I\'ve ever had — rich, creamy, and packed with flavor. The worldwide delivery is a game-changer. My family in London gets Jaffeiz delivered weekly now!'
    },
    {
        name: 'Priya Sharma',
        location: 'Mumbai, India',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        stars: 5,
        text: 'Jaffeiz is not just a restaurant; it\'s an experience. I booked the Romantic Couple dinner for our anniversary and it was magical. The ambiance, the service, the food — every detail was impeccable. Haider Jaffri has created something truly special. We\'ll be coming back every year!'
    },
    {
        name: 'Ahmed Hassan',
        location: 'Karachi, Pakistan',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        stars: 5,
        text: 'Being from Karachi, I know good Pakistani food. Jaffeiz exceeds every expectation. Their Karahi is legendary — cooked exactly the way it should be. The FIFA World Cup promo was a nice touch too! 20% off with FIFA2026 code made our family feast even sweeter. Highly recommended!'
    }
];

// ================================================================
// 2. LOADING SCREEN
// ================================================================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 600);
        }, 2000); // 2 second loading screen
    }
});

// ================================================================
// 3. PARTICLE BACKGROUND (Canvas) — Enhanced
// ================================================================

function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 4 + 1;
            this.speedX = (Math.random() - 0.5) * 0.6;
            this.speedY = (Math.random() - 0.5) * 0.6;
            this.opacity = Math.random() * 0.6 + 0.1;
            this.pulse = Math.random() * 0.02 + 0.01;
            this.pulseDir = 1;
            this.color = `rgba(212, 175, 55, ${this.opacity})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Pulse size for micro interaction
            this.size += this.pulse * this.pulseDir;
            if (this.size > 5 || this.size < 1) this.pulseDir *= -1;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Create particles based on screen size
    const particleCount = Math.min(Math.floor(canvas.width * canvas.height / 12000), 120);

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Connection lines between nearby particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        drawConnections();

        animationId = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('beforeunload', () => {
        if (animationId) cancelAnimationFrame(animationId);
    });
}

document.addEventListener('DOMContentLoaded', initParticles);

// ================================================================
// 4. TYPING EFFECT FOR HERO HEADING
// ================================================================

function initTypingEffect() {
    const headingEl = document.getElementById('hero-heading');
    if (!headingEl) return;

    const text = 'Welcome to Jaffeiz – A World of Flavor Awaits.';
    let index = 0;
    let isDeleting = false;
    let speed = 80;

    function type() {
        if (!isDeleting) {
            headingEl.textContent = text.slice(0, index);
            index++;
            if (index > text.length) {
                isDeleting = true;
                speed = 40;
                setTimeout(type, 2000);
                return;
            }
        } else {
            headingEl.textContent = text.slice(0, index);
            index--;
            if (index < 0) {
                isDeleting = false;
                index = 0;
                speed = 80;
                setTimeout(type, 500);
                return;
            }
        }
        setTimeout(type, speed);
    }

    setTimeout(type, 2500);
}

document.addEventListener('DOMContentLoaded', initTypingEffect);

// ================================================================
// 5. STICKY NAVIGATION & MOBILE TOGGLE
// ================================================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
}

document.addEventListener('DOMContentLoaded', initNavigation);

// ================================================================
// 6. PROMO BANNER DISMISS
// ================================================================

function initPromoBanner() {
    const promoBanner = document.getElementById('promo-banner');
    const promoClose = document.getElementById('promo-close');
    if (promoClose && promoBanner) {
        promoClose.addEventListener('click', () => {
            promoBanner.classList.add('hidden');
            const navbar = document.getElementById('navbar');
            if (navbar) navbar.style.top = '0';
        });
    }
}

document.addEventListener('DOMContentLoaded', initPromoBanner);

// ================================================================
// 7. MENU RENDERING & FILTERING
// ================================================================

function initMenu() {
    const menuGrid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!menuGrid) return;

    let currentFilter = 'all';

    function renderMenu(filter) {
        const filtered = filter === 'all'
            ? menuData
            : menuData.filter(item => item.category === filter);

        menuGrid.innerHTML = '';

        filtered.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.style.animationDelay = `${index * 0.1}s`;
            card.dataset.id = item.id;

            const priceFormatted = 'Rs. ' + item.price.toLocaleString('en-PK');

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy" />
                <div class="menu-item-info">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <p class="menu-item-category">${item.category === 'pakistani' ? 'Pakistani Meal' : 'Drink'}</p>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">${priceFormatted}</span>
                        <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                openMealModal(item.id);
            });

            menuGrid.appendChild(card);
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                addToCart(id);
            });
        });
    }

    renderMenu('all');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderMenu(currentFilter);
        });
    });
}

document.addEventListener('DOMContentLoaded', initMenu);

// ================================================================
// 7.5 MEAL DETAIL MODAL
// ================================================================

let currentMealId = null;

const extrasPricing = {
    'extra-cheese': 100,
    'extra-meat': 200,
    'extra-sauce': 50,
    'salad': 150
};

function formatPKR(amount) {
    return 'Rs. ' + Math.round(amount).toLocaleString('en-PK');
}

function openMealModal(id) {
    const meal = findMenuItem(id);
    if (!meal) return;
    currentMealId = id;
    const modal = document.getElementById('meal-modal');
    if (!modal) return;

    document.getElementById('meal-qty').value = 1;
    document.getElementById('meal-special-instructions').value = '';
    document.querySelector('input[name="spice-level"][value="medium"]').checked = true;
    document.querySelectorAll('#meal-modal .extras-options input[type="checkbox"]').forEach(cb => { cb.checked = false; });

    document.getElementById('meal-modal-img').src = meal.image;
    document.getElementById('meal-modal-img').alt = meal.name;
    document.getElementById('meal-modal-name').textContent = meal.name;
    document.getElementById('meal-modal-category').textContent = meal.category === 'pakistani' ? 'Pakistani Meal' : 'Drink';
    document.getElementById('meal-modal-price').textContent = formatPKR(meal.price);
    document.getElementById('meal-modal-desc').textContent = meal.description;

    updateMealModalTotal();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeMealModal() {
    const modal = document.getElementById('meal-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    currentMealId = null;
}

function updateMealModalTotal() {
    const meal = findMenuItem(currentMealId);
    if (!meal) return;
    const qty = parseInt(document.getElementById('meal-qty').value) || 1;
    let extrasTotal = 0;
    document.querySelectorAll('#meal-modal .extras-options input[type="checkbox"]:checked').forEach(cb => {
        extrasTotal += extrasPricing[cb.value] || 0;
    });
    const total = (meal.price + extrasTotal) * qty;
    document.getElementById('meal-modal-total-price').textContent = formatPKR(total);
}

function addMealToCart() {
    if (!currentMealId) return;
    const meal = findMenuItem(currentMealId);
    if (!meal) return;

    const qty = parseInt(document.getElementById('meal-qty').value) || 1;
    const spiceLevel = document.querySelector('input[name="spice-level"]:checked');
    const spice = spiceLevel ? spiceLevel.value : 'medium';
    const extras = [];
    document.querySelectorAll('#meal-modal .extras-options input[type="checkbox"]:checked').forEach(cb => {
        extras.push(cb.value);
    });
    const instructions = document.getElementById('meal-special-instructions').value.trim();
    let extrasTotal = 0;
    extras.forEach(ext => { extrasTotal += extrasPricing[ext] || 0; });

    for (let i = 0; i < qty; i++) {
        const existing = cart.find(item => item.id === currentMealId && item.spice === spice && item.instructions === instructions && JSON.stringify(item.extras) === JSON.stringify(extras));
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: currentMealId, name: meal.name, price: meal.price + extrasTotal, quantity: 1,
                spice: spice, extras: extras, instructions: instructions
            });
        }
    }
    updateCartUI();
    closeMealModal();
    showAddFeedback();
}

function initMealModal() {
    const closeBtn = document.getElementById('meal-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeMealModal);
    const modal = document.getElementById('meal-modal');
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeMealModal(); });

    const minusBtn = document.getElementById('meal-qty-minus');
    const plusBtn = document.getElementById('meal-qty-plus');
    const qtyInput = document.getElementById('meal-qty');

    if (minusBtn) minusBtn.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) { qtyInput.value = val - 1; updateMealModalTotal(); }
    });
    if (plusBtn) plusBtn.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val < 20) { qtyInput.value = val + 1; updateMealModalTotal(); }
    });

    document.querySelectorAll('#meal-modal .extras-options input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', updateMealModalTotal);
    });

    const addBtn = document.getElementById('meal-modal-add-btn');
    if (addBtn) addBtn.addEventListener('click', addMealToCart);

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMealModal(); });
}

document.addEventListener('DOMContentLoaded', initMealModal);

// ================================================================
// 8. SHOPPING CART SYSTEM
// ================================================================

let cart = [];
let couponApplied = false;
let discountPercent = 0;

function findMenuItem(id) {
    return menuData.find(item => item.id === id);
}

function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        const menuItem = findMenuItem(id);
        if (menuItem) {
            cart.push({ id: menuItem.id, name: menuItem.name, price: menuItem.price, quantity: 1 });
        }
    }
    updateCartUI();
    showAddFeedback();
}

function showAddFeedback() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.textContent = '✓ Item Added!';
        setTimeout(() => { checkoutBtn.textContent = 'Proceed to Checkout'; }, 1000);
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) { removeFromCart(id); return; }
    }
    updateCartUI();
}

function getCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (couponApplied && discountPercent > 0) return subtotal * (1 - discountPercent / 100);
    return subtotal;
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartCount = document.querySelectorAll('.cart-count');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Your cart is empty. Start adding delicious meals!</p>';
        totalPrice.textContent = 'Rs. 0';
        if (checkoutBtn) checkoutBtn.disabled = true;
        cartCount.forEach(el => el.textContent = '0');
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <span class="cart-item-name">${item.name}</span>
                <div class="cart-item-qty">
                    <button class="qty-btn" data-id="${item.id}" data-delta="-1">\u2212</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                </div>
                <span class="cart-item-price">${formatPKR(item.price * item.quantity)}</span>
                <button class="cart-item-remove" data-id="${item.id}">&times;</button>
            </div>
        `;
    });

    cartItems.innerHTML = html;

    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const delta = parseInt(btn.dataset.delta);
            updateQuantity(id, delta);
        });
    });

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });

    const total = getCartTotal();
    totalPrice.textContent = formatPKR(total);
    if (checkoutBtn) checkoutBtn.disabled = false;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.forEach(el => el.textContent = totalItems);
}

// ================================================================
// 9. COUPON SYSTEM
// ================================================================

function initCouponSystem() {
    const couponInput = document.getElementById('coupon-input');
    const applyBtn = document.getElementById('apply-coupon');
    const couponMessage = document.getElementById('coupon-message');
    if (!applyBtn || !couponInput) return;

    applyBtn.addEventListener('click', () => {
        const code = couponInput.value.trim().toUpperCase();
        if (code === 'FIFA2026') {
            couponApplied = true;
            discountPercent = 20;
            couponMessage.textContent = '\u2705 Coupon applied! You get 20% OFF!';
            couponMessage.className = 'coupon-message success';
            couponInput.value = '';
            updateCartUI();
        } else {
            couponApplied = false;
            discountPercent = 0;
            couponMessage.textContent = '\u274C Invalid coupon code. Please try again.';
            couponMessage.className = 'coupon-message error';
            updateCartUI();
        }
    });

    couponInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') applyBtn.click(); });
}

document.addEventListener('DOMContentLoaded', initCouponSystem);

// ================================================================
// 10. BOOKING & BILLING FLOW
// ================================================================

function initBooking() {
    const bookingTypeCards = document.querySelectorAll('.booking-type-card');
    const bookingFormWrapper = document.getElementById('booking-form-wrapper');
    const billingFormWrapper = document.getElementById('billing-form-wrapper');
    const bookingForm = document.getElementById('booking-form');
    const billingForm = document.getElementById('billing-form');
    const billingBack = document.getElementById('billing-back');
    const bookingTypeInput = document.getElementById('booking-type');
    const bookingFormTitle = document.getElementById('booking-form-title');
    const successModal = document.getElementById('success-modal');
    const modalClose = document.getElementById('modal-close');

    let selectedType = null;
    let bookingData = {};

    bookingTypeCards.forEach(card => {
        card.addEventListener('click', () => {
            bookingTypeCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedType = card.dataset.type;
            bookingTypeInput.value = selectedType;
            bookingFormWrapper.style.display = 'block';
            billingFormWrapper.style.display = 'none';
            bookingFormTitle.textContent = selectedType === 'family' ? 'Book Your Family Feast' : 'Book Your Romantic Dinner';
            bookingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            bookingData = {
                type: selectedType,
                name: document.getElementById('book-name').value.trim(),
                email: document.getElementById('book-email').value.trim(),
                date: document.getElementById('book-date').value,
                time: document.getElementById('book-time').value,
                guests: document.getElementById('book-guests').value,
                phone: document.getElementById('book-phone').value.trim(),
                special: document.getElementById('book-special').value.trim()
            };
            if (!bookingData.name || !bookingData.email || !bookingData.date || !bookingData.time) {
                alert('Please fill in all required fields.');
                return;
            }
            const typeLabel = selectedType === 'family' ? 'Family Feast' : 'Romantic Couple';
            const totalAmount = selectedType === 'family' ? 4999 : 3999;
            document.getElementById('billing-summary-type').textContent = typeLabel;
            document.getElementById('billing-summary-date').textContent = `${bookingData.date} at ${bookingData.time}`;
            document.getElementById('billing-summary-guests').textContent = bookingData.guests;
            document.getElementById('billing-summary-total').textContent = formatPKR(totalAmount);
            document.getElementById('billing-amount').textContent = totalAmount.toLocaleString('en-PK');
            bookingFormWrapper.style.display = 'none';
            billingFormWrapper.style.display = 'block';
            billingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (billingBack) {
        billingBack.addEventListener('click', () => {
            billingFormWrapper.style.display = 'none';
            bookingFormWrapper.style.display = 'block';
            bookingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (billingForm) {
        billingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (successModal) successModal.style.display = 'flex';
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (successModal) successModal.style.display = 'none';
            bookingTypeCards.forEach(c => c.classList.remove('selected'));
            bookingFormWrapper.style.display = 'none';
            billingFormWrapper.style.display = 'none';
            bookingForm.reset();
            billingForm.reset();
            selectedType = null;
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.style.display = 'none';
                bookingTypeCards.forEach(c => c.classList.remove('selected'));
                bookingFormWrapper.style.display = 'none';
                billingFormWrapper.style.display = 'none';
                bookingForm.reset();
                billingForm.reset();
                selectedType = null;
            }
        });
    }

    const cardInput = document.getElementById('billing-card');
    if (cardInput) {
        cardInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 16) value = value.slice(0, 16);
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
        });
    }

    const expiryInput = document.getElementById('billing-expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
            e.target.value = value;
        });
    }

    const cvvInput = document.getElementById('billing-cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            e.target.value = value;
        });
    }
}

document.addEventListener('DOMContentLoaded', initBooking);

// ================================================================
// 11. REVIEWS CAROUSEL
// ================================================================

function initReviews() {
    const track = document.getElementById('reviews-track');
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    const dotsContainer = document.getElementById('review-dots');
    if (!track) return;

    let currentIndex = 0;

    reviewsData.forEach((review, index) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        const starsHtml = '\u2605'.repeat(review.stars) + '\u2606'.repeat(5 - review.stars);
        card.innerHTML = `
            <img src="${review.avatar}" alt="${review.name}" class="review-avatar" loading="lazy" />
            <h3 class="review-name">${review.name}</h3>
            <p class="review-location">${review.location}</p>
            <div class="review-stars">${starsHtml}</div>
            <p class="review-text">${review.text}</p>
        `;
        track.appendChild(card);
    });

    reviewsData.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `review-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const totalSlides = reviewsData.length;

    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) currentIndex = totalSlides - 1;
        if (currentIndex >= totalSlides) currentIndex = 0;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.review-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    let autoAdvance = setInterval(() => goToSlide(currentIndex + 1), 5000);
    const carousel = document.querySelector('.reviews-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
        carousel.addEventListener('mouseleave', () => { autoAdvance = setInterval(() => goToSlide(currentIndex + 1), 5000); });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
        if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
    });
}

document.addEventListener('DOMContentLoaded', initReviews);

// ================================================================
// 12. SCROLL ANIMATIONS (Intersection Observer)
// ================================================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    animatedElements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ================================================================
// 13. CHECKOUT BUTTON (Cart -> Booking scroll)
// ================================================================

function initCheckoutButton() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            const bookingSection = document.getElementById('booking');
            if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

document.addEventListener('DOMContentLoaded', initCheckoutButton);

// ================================================================
// 14. SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ================================================================
// 15. MOUSE FOLLOWER EFFECT
// ================================================================

function initMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate(${followerX - 12}px, ${followerY - 12}px)`;
        requestAnimationFrame(animate);
    }

    animate();

    // Hide on touch devices
    if ('ontouchstart' in window) {
        follower.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', initMouseFollower);

// ================================================================
// 16. ANIMATED COUNTERS
// ================================================================

function initAnimatedCounters() {
    const counters = document.querySelectorAll('.animated-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const duration = parseInt(el.dataset.duration) || 2000;
                const suffix = el.dataset.suffix || '';
                const step = Math.max(1, Math.floor(target / (duration / 16)));

                let current = 0;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current.toLocaleString('en-PK') + suffix;
                }, 16);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initAnimatedCounters);

// ================================================================
// 17. BUTTON RIPPLE EFFECT (Micro Interaction)
// ================================================================

function initRippleEffect() {
    document.querySelectorAll('.btn, .filter-btn, .add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

document.addEventListener('DOMContentLoaded', initRippleEffect);

// ================================================================
// 18. PULSE ANIMATION ON HERO CTA
// ================================================================

function initPulseAnimation() {
    const heroCta = document.querySelector('.hero-cta .btn-primary');
    if (heroCta) {
        setInterval(() => {
            heroCta.classList.add('pulse-animation');
            setTimeout(() => heroCta.classList.remove('pulse-animation'), 2000);
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', initPulseAnimation);

// ================================================================
// 19. CONSOLE WELCOME MESSAGE
// ================================================================

console.log('%c\uD83C\uDF7D\uFE0F Jaffeiz Restaurant', 'font-size: 24px; font-weight: bold; color: #c19a2b;');
console.log('%cA World of Flavor Awaits Since 2010.', 'font-size: 14px; color: #aaa;');
console.log('%cBuilt with \u2764\uFE0F using HTML, CSS & Vanilla JS', 'font-size: 12px; color: #666;');