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

/** Array of menu items for the categorized menu */
const menuData = [
    // ---- Pakistani Meals ----
    {
        id: 1,
        name: 'Chicken Biryani',
        category: 'pakistani',
        description: 'Fragrant basmati rice layered with tender chicken, aromatic spices, and saffron.',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80'
    },
    {
        id: 2,
        name: 'Beef Korma',
        category: 'pakistani',
        description: 'Slow-cooked tender beef in a rich, creamy yogurt and cashew gravy.',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80'
    },
    {
        id: 3,
        name: 'Chicken Karahi',
        category: 'pakistani',
        description: 'Sizzling wok-cooked chicken with tomatoes, ginger, and green chilies.',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80'
    },
    {
        id: 4,
        name: 'Lamb Pulao',
        category: 'pakistani',
        description: 'Fragrant rice with tender lamb, caramelized onions, and warm spices.',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80'
    },
    {
        id: 5,
        name: 'Daal Chawal',
        category: 'pakistani',
        description: 'Comforting lentils simmered with garlic and cumin, served over steamed rice.',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
    {
        id: 6,
        name: 'Seekh Kebab',
        category: 'pakistani',
        description: 'Spiced minced meat skewers grilled to perfection on the tandoor.',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80'
    },
    // ---- Drinks ----
    // (Removed spicy / masala drinks per request)
    {
        id: 8,
        name: 'Espresso',
        category: 'drinks',
        description: 'Rich, bold single-origin espresso shot. Pure energy in a cup.',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80'
    },
    {
        id: 9,
        name: 'Cappuccino',
        category: 'drinks',
        description: 'Velvety espresso with steamed milk foam and a dusting of cocoa.',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80'
    },
    {
        id: 10,
        name: 'Latte',
        category: 'drinks',
        description: 'Smooth espresso with creamy steamed milk. Available in vanilla or caramel.',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80'
    },
    {
        id: 11,
        name: 'Mango Milkshake',
        category: 'drinks',
        description: 'Thick, creamy milkshake made with fresh Alphonso mangoes.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    },
    {
        id: 12,
        name: 'Chocolate Milkshake',
        category: 'drinks',
        description: 'Decadent chocolate milkshake topped with whipped cream and shavings.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    }
    ,
    {
        id: 13,
        name: 'Vanilla Ice Cream Shake',
        category: 'drinks',
        description: 'Creamy vanilla ice cream blended with milk for a smooth, classic shake.',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80'
    },
    {
        id: 14,
        name: 'Strawberry Ice Cream Shake',
        category: 'drinks',
        description: 'Fresh strawberry ice cream shaken with milk and a touch of sweetness.',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1505253758479-34fbd9f1a0d9?w=400&q=80'
    },
    {
        id: 15,
        name: 'Mango Ice Cream Float',
        category: 'drinks',
        description: 'Mango ice cream served in chilled soda — a fruity, creamy float.',
        price: 5.49,
        image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80'
    },
    {
        id: 16,
        name: 'Kulfi Cream',
        category: 'drinks',
        description: 'Traditional kulfi-inspired creamy drink with pistachio and cardamom notes.',
        price: 5.99,
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
// 3. PARTICLE BACKGROUND (Canvas)
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
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = `rgba(193, 154, 43, ${this.opacity})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

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
    const particleCount = Math.min(Math.floor(canvas.width * canvas.height / 15000), 100);

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
                    const opacity = (1 - distance / 150) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(193, 154, 43, ${opacity})`;
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

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
}

// Initialize particles after DOM is ready
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
            // Typing forward
            headingEl.textContent = text.slice(0, index);
            index++;

            if (index > text.length) {
                // Pause at the end, then start deleting
                isDeleting = true;
                speed = 40; // Faster when deleting
                setTimeout(type, 2000); // Pause before deleting
                return;
            }
        } else {
            // Deleting backward
            headingEl.textContent = text.slice(0, index);
            index--;

            if (index < 0) {
                // Reset and start over
                isDeleting = false;
                index = 0;
                speed = 80;
                setTimeout(type, 500);
                return;
            }
        }

        setTimeout(type, speed);
    }

    // Start typing after loading screen
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

    // Sticky nav on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Active link highlighting based on scroll position
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
            // Adjust navbar top padding since banner is gone
            const navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.style.top = '0';
            }
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

    /** Render menu items based on active filter */
    function renderMenu(filter) {
        const filtered = filter === 'all'
            ? menuData
            : menuData.filter(item => item.category === filter);

        menuGrid.innerHTML = '';

        filtered.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy" />
                <div class="menu-item-info">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <p class="menu-item-category">${item.category === 'pakistani' ? 'Pakistani Meal' : 'Drink'}</p>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                    </div>
                </div>
            `;

            menuGrid.appendChild(card);
        });

        // Attach add-to-cart event listeners to new buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                addToCart(id);
            });
        });
    }

    // Initial render
    renderMenu('all');

    // Filter button click handlers
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
// 8. SHOPPING CART SYSTEM
// ================================================================

let cart = [];
let couponApplied = false;
let discountPercent = 0;

/** Find a menu item by ID */
function findMenuItem(id) {
    return menuData.find(item => item.id === id);
}

/** Add item to cart */
function addToCart(id) {
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        const menuItem = findMenuItem(id);
        if (menuItem) {
            cart.push({
                id: menuItem.id,
                name: menuItem.name,
                price: menuItem.price,
                quantity: 1
            });
        }
    }

    updateCartUI();
    showAddFeedback();
}

/** Show a brief visual feedback when item is added */
function showAddFeedback() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.textContent = '✓ Item Added!';
        setTimeout(() => {
            checkoutBtn.textContent = 'Proceed to Checkout';
        }, 1000);
    }
}

/** Remove item from cart */
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

/** Update item quantity */
function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }
    }
    updateCartUI();
}

/** Calculate cart total */
function getCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (couponApplied && discountPercent > 0) {
        return subtotal * (1 - discountPercent / 100);
    }
    return subtotal;
}

/** Update the cart UI */
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartCount = document.querySelectorAll('.cart-count');

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Your cart is empty. Start adding delicious meals!</p>';
        totalPrice.textContent = '$0.00';
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
        }
        // Update any cart count badges
        cartCount.forEach(el => el.textContent = '0');
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <span class="cart-item-name">${item.name}</span>
                <div class="cart-item-qty">
                    <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                </div>
                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="cart-item-remove" data-id="${item.id}">&times;</button>
            </div>
        `;
    });

    cartItems.innerHTML = html;

    // Attach quantity button events
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const delta = parseInt(btn.dataset.delta);
            updateQuantity(id, delta);
        });
    });

    // Attach remove button events
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });

    // Update total
    const total = getCartTotal();
    totalPrice.textContent = `$${total.toFixed(2)}`;

    // Enable checkout
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
    }

    // Update cart count badges
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
            couponMessage.textContent = '✅ Coupon applied! You get 20% OFF!';
            couponMessage.className = 'coupon-message success';
            couponInput.value = '';
            updateCartUI();
        } else {
            couponApplied = false;
            discountPercent = 0;
            couponMessage.textContent = '❌ Invalid coupon code. Please try again.';
            couponMessage.className = 'coupon-message error';
            updateCartUI();
        }
    });

    // Allow pressing Enter to apply coupon
    couponInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            applyBtn.click();
        }
    });
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

    // ---- Select booking type ----
    bookingTypeCards.forEach(card => {
        card.addEventListener('click', () => {
            bookingTypeCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            selectedType = card.dataset.type;
            bookingTypeInput.value = selectedType;

            // Show booking form
            bookingFormWrapper.style.display = 'block';
            billingFormWrapper.style.display = 'none';

            // Update form title
            if (selectedType === 'family') {
                bookingFormTitle.textContent = 'Book Your Family Feast';
            } else {
                bookingFormTitle.textContent = 'Book Your Romantic Dinner';
            }

            // Scroll to form
            bookingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ---- Booking form submit -> Show billing ----
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Gather booking data
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

            // Basic validation
            if (!bookingData.name || !bookingData.email || !bookingData.date || !bookingData.time) {
                alert('Please fill in all required fields.');
                return;
            }

            // Populate billing summary
            const typeLabel = selectedType === 'family' ? 'Family Feast' : 'Romantic Couple';
            const totalAmount = selectedType === 'family' ? 49.99 : 39.99;

            document.getElementById('billing-summary-type').textContent = typeLabel;
            document.getElementById('billing-summary-date').textContent = `${bookingData.date} at ${bookingData.time}`;
            document.getElementById('billing-summary-guests').textContent = bookingData.guests;
            document.getElementById('billing-summary-total').textContent = `$${totalAmount.toFixed(2)}`;
            document.getElementById('billing-amount').textContent = totalAmount.toFixed(2);

            // Show billing form
            bookingFormWrapper.style.display = 'none';
            billingFormWrapper.style.display = 'block';

            billingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // ---- Billing back button ----
    if (billingBack) {
        billingBack.addEventListener('click', () => {
            billingFormWrapper.style.display = 'none';
            bookingFormWrapper.style.display = 'block';
            bookingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // ---- Billing form submit -> Success modal ----
    if (billingForm) {
        billingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Show success modal
            if (successModal) {
                successModal.style.display = 'flex';
            }
        });
    }

    // ---- Close modal ----
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (successModal) {
                successModal.style.display = 'none';
            }
            // Reset booking flow
            bookingTypeCards.forEach(c => c.classList.remove('selected'));
            bookingFormWrapper.style.display = 'none';
            billingFormWrapper.style.display = 'none';
            bookingForm.reset();
            billingForm.reset();
            selectedType = null;
            // Scroll to top of booking section
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Close modal on overlay click
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.style.display = 'none';
                // Reset
                bookingTypeCards.forEach(c => c.classList.remove('selected'));
                bookingFormWrapper.style.display = 'none';
                billingFormWrapper.style.display = 'none';
                bookingForm.reset();
                billingForm.reset();
                selectedType = null;
            }
        });
    }

    // ---- Credit card formatting ----
    const cardInput = document.getElementById('billing-card');
    if (cardInput) {
        cardInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 16) value = value.slice(0, 16);
            // Add spaces every 4 digits
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
        });
    }

    const expiryInput = document.getElementById('billing-expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2);
            }
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

    // Render reviews
    reviewsData.forEach((review, index) => {
        const card = document.createElement('div');
        card.className = 'review-card';

        const starsHtml = '★'.repeat(review.stars) + '☆'.repeat(5 - review.stars);

        card.innerHTML = `
            <img src="${review.avatar}" alt="${review.name}" class="review-avatar" loading="lazy" />
            <h3 class="review-name">${review.name}</h3>
            <p class="review-location">${review.location}</p>
            <div class="review-stars">${starsHtml}</div>
            <p class="review-text">${review.text}</p>
        `;

        track.appendChild(card);
    });

    // Create dots
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

        // Update dots
        document.querySelectorAll('.review-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }

    // Auto-advance carousel every 5 seconds
    let autoAdvance = setInterval(() => goToSlide(currentIndex + 1), 5000);

    // Pause on hover
    const carousel = document.querySelector('.reviews-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
        carousel.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(() => goToSlide(currentIndex + 1), 5000);
        });
    }

    // Keyboard navigation
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
                // Optionally stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

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

            // Scroll to booking section
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
            }
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
// 15. CONSOLE WELCOME MESSAGE
// ================================================================

console.log('%c🍽️ Jaffeiz Restaurant', 'font-size: 24px; font-weight: bold; color: #c19a2b;');
console.log('%cA World of Flavor Awaits Since 2010.', 'font-size: 14px; color: #aaa;');
console.log('%cBuilt with ❤️ using HTML, CSS & Vanilla JS', 'font-size: 12px; color: #666;');