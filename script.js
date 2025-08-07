// Product Data
const products = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 79.99,
        originalPrice: 99.99,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'electronics',
        description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
        rating: 4.8,
        reviews: 234,
        inStock: true,
        featured: true,
    },
    {
        id: 2,
        name: 'Smart Watch Series 5',
        price: 299.99,
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'electronics',
        description: 'Advanced fitness tracking, heart rate monitoring, and GPS functionality.',
        rating: 4.7,
        reviews: 189,
        inStock: true,
        featured: true,
    },
    {
        id: 3,
        name: 'Premium Cotton T-Shirt',
        price: 24.99,
        image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'clothing',
        description: 'Comfortable 100% organic cotton t-shirt in various colors.',
        rating: 4.5,
        reviews: 156,
        inStock: true,
    },
    {
        id: 4,
        name: 'Leather Messenger Bag',
        price: 149.99,
        originalPrice: 199.99,
        image: 'https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'accessories',
        description: 'Handcrafted genuine leather messenger bag with multiple compartments.',
        rating: 4.9,
        reviews: 87,
        inStock: true,
        featured: true,
    },
    {
        id: 5,
        name: 'Wireless Keyboard & Mouse Set',
        price: 89.99,
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'electronics',
        description: 'Ergonomic wireless keyboard and mouse combo with long battery life.',
        rating: 4.6,
        reviews: 203,
        inStock: true,
    },
    {
        id: 6,
        name: 'Denim Jacket',
        price: 69.99,
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'clothing',
        description: 'Classic denim jacket with modern fit and premium quality.',
        rating: 4.4,
        reviews: 178,
        inStock: true,
    },
    {
        id: 7,
        name: 'Sunglasses Collection',
        price: 89.99,
        originalPrice: 120.99,
        image: 'https://images.pexels.com/photos/1661469/pexels-photo-1661469.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'accessories',
        description: 'UV protection sunglasses with polarized lenses and stylish frames.',
        rating: 4.7,
        reviews: 145,
        inStock: true,
    },
    {
        id: 8,
        name: 'Indoor Plant Collection',
        price: 34.99,
        image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'home',
        description: 'Beautiful indoor plants to enhance your home environment.',
        rating: 4.3,
        reviews: 92,
        inStock: true,
    },

    {
        id: 9,
        name: 'Fitness Tracker Band',
        price: 49.99,
        image: 'https://images.pexels.com/photos/1756996/pexels-photo-1756996.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'electronics',
        description: 'Track your daily activities, sleep, and health metrics.',
        rating: 4.2,
        reviews: 167,
        inStock: true,
    },
    {
        id: 10,
        name: 'Minimalist Wallet',
        price: 39.99,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'accessories',
        description: 'Slim leather wallet with RFID blocking technology.',
        rating: 4.6,
        reviews: 134,
        inStock: true,
    },
    {
        id: 11,
        name: 'Cozy Knit Sweater',
        price: 54.99,
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'clothing',
        description: 'Soft and warm knit sweater perfect for any season.',
        rating: 4.5,
        reviews: 198,
        inStock: true,
    },
    {
        id: 12,
        name: 'Smart Home Speaker',
        price: 129.99,
        originalPrice: 159.99,
        image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'electronics',
        description: 'Voice-controlled smart speaker with premium sound quality.',
        rating: 4.8,
        reviews: 256,
        inStock: true,
        featured: true,
    },
{
        id: 13,
        name: 'Green Leaf Glow',
        price: 34.99,
        image: 'https://images.pexels.com/photos/19753141/pexels-photo-19753141.jpeg',
        category: 'home',
        description: 'Bring life to your space with this lush indoor plant — a natural air purifier and stylish décor in one.',
        rating: 4.5,
        reviews: 92,
        inStock: true,
    },
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';
let searchTerm = '';

// DOM Elements
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const productsGrid = document.getElementById('productsGrid');
const featuredProducts = document.getElementById('featuredProducts');
const searchInput = document.getElementById('searchInput');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    updateCartUI();
    renderFeaturedProducts();
    renderProducts();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function(e) {
        searchTerm = e.target.value.toLowerCase();
        renderProducts();
    });

    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentCategory = this.dataset.category;
            renderProducts();
        });
    });

    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        if (!cartSidebar.contains(e.target) && !e.target.closest('.cart-btn')) {
            if (cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }
    });
}

// Render featured products
function renderFeaturedProducts() {
    const featured = products.filter(product => product.featured);
    featuredProducts.innerHTML = featured.map(product => createProductCard(product)).join('');
}

// Render products based on current filters
function renderProducts() {
    let filteredProducts = products;

    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-cart" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
    } else {
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Create product card HTML
function createProductCard(product) {
    const stars = createStarRating(product.rating);
    const salePrice = product.originalPrice ? 
        `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : '';
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.originalPrice ? '<div class="product-badge">SALE</div>' : ''}
                ${product.featured ? '<div class="product-badge featured">FEATURED</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">(${product.reviews} reviews)</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${salePrice}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Create star rating HTML
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star empty"></i>';
    }

    return stars;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartUI();
    saveCart();
    
    // Show feedback
    showAddToCartFeedback();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
        saveCart();
    }
}

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2);

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
}

// Toggle mobile menu (placeholder)
function toggleMobileMenu() {
    // Mobile menu functionality would go here
    console.log('Mobile menu toggled');
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your purchase🥰🤗! Total: $${total.toFixed(2)}\n\n Shop Again😊`);
    
    // Clear cart after "purchase"
    cart = [];
    updateCartUI();
    saveCart();
    toggleCart();
}

// Show add to cart feedback
function showAddToCartFeedback() {
    // Create and show a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-check-circle"></i>
            <span>Added to cart!</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states and error handling
function handleImageError(img) {
    img.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
    img.alt = 'Image not available';
}

// Add this to all product images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}