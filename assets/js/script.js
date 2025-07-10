// Kids Craft Hub - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeSearch();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeTooltips();
});

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        searchBtn.addEventListener('click', performSearch);
        
        // Real-time search suggestions
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            if (query.length > 2) {
                showSearchSuggestions(query);
            } else {
                hideSearchSuggestions();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        showNotification('Please enter a search term!', 'warning');
        return;
    }
    
    // Simulate search (in a real implementation, this would query a database)
    const searchResults = findToys(query);
    
    if (searchResults.length > 0) {
        displaySearchResults(searchResults);
    } else {
        showNotification(`No toys found for "${query}". Try different keywords!`, 'info');
    }
}

function findToys(query) {
    // Sample toy database (in real implementation, this would be much larger)
    const toys = [
        { name: 'Cardboard Robot', category: 'cardboard', url: 'toys/cardboard-robot.html' },
        { name: 'Paper Airplane Launcher', category: 'paper', url: 'toys/paper-airplane-launcher.html' },
        { name: 'Rainbow Slime', category: 'science', url: 'toys/rainbow-slime.html' },
        { name: 'Bottle Rocket', category: 'recycled', url: 'toys/bottle-rocket.html' },
        { name: 'Magnetic Fishing Game', category: 'games', url: 'toys/magnetic-fishing-game.html' },
        { name: 'Bubble Snake Maker', category: 'outdoor', url: 'toys/bubble-snake-maker.html' },
        { name: 'Cardboard Marble Run', category: 'cardboard', url: 'toys/cardboard-marble-run.html' },
        { name: 'Paper Doll Chain', category: 'paper', url: 'toys/paper-doll-chain.html' },
        { name: 'Rock Painting Kit', category: 'nature', url: 'toys/rock-painting-kit.html' },
        { name: 'Tin Can Telephone', category: 'recycled', url: 'toys/tin-can-telephone.html' }
    ];
    
    return toys.filter(toy => 
        toy.name.toLowerCase().includes(query) || 
        toy.category.toLowerCase().includes(query)
    );
}

function displaySearchResults(results) {
    // Create search results modal
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
        <div class="search-modal-content">
            <div class="search-modal-header">
                <h3>🔍 Search Results</h3>
                <button class="close-modal" onclick="closeSearchModal()">&times;</button>
            </div>
            <div class="search-results">
                ${results.map(toy => `
                    <div class="search-result-item" onclick="location.href='${toy.url}'">
                        <span class="result-name">${toy.name}</span>
                        <span class="result-category">${toy.category}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    if (!document.getElementById('modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .search-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            .search-modal-content {
                background: white;
                border-radius: 15px;
                padding: 2rem;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            }
            .search-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            .close-modal {
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: #999;
            }
            .search-result-item {
                padding: 1rem;
                border: 2px solid #f0f0f0;
                border-radius: 10px;
                margin-bottom: 0.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .search-result-item:hover {
                border-color: #ff6b6b;
                transform: translateX(5px);
            }
            .result-name {
                font-weight: bold;
                color: #333;
            }
            .result-category {
                background: #f0f0f0;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.9rem;
                color: #666;
            }
        `;
        document.head.appendChild(modalStyles);
    }
}

function closeSearchModal() {
    const modal = document.querySelector('.search-modal');
    if (modal) {
        modal.remove();
    }
}

function showSearchSuggestions(query) {
    // Implementation for search suggestions dropdown
    // This would show popular searches or matching categories
    console.log('Showing suggestions for:', query);
}

function hideSearchSuggestions() {
    // Hide search suggestions dropdown
    console.log('Hiding suggestions');
}

// Smooth scrolling functionality
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function called by CTA button
function scrollToCategories() {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
        categoriesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animatedElements = document.querySelectorAll('.category-card, .toy-card, .benefit, .toy-item');
    animatedElements.forEach(el => observer.observe(el));
}

// Tooltip functionality
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Add notification styles if not already present
    if (!document.getElementById('notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'notification-styles';
        notificationStyles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                color: white;
                font-weight: bold;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
                z-index: 3000;
                animation: slideInRight 0.3s ease;
                min-width: 300px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            }
            .notification-info { background: #74b9ff; }
            .notification-warning { background: #fdcb6e; }
            .notification-success { background: #55a3ff; }
            .notification-error { background: #fd79a8; }
            .notification button {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
            }
        `;
        document.head.appendChild(notificationStyles);
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Fun interactive elements
function addSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
    sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle effect to category cards on hover
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            addSparkleEffect(this);
        });
    });
});

// Age-appropriate content filtering
function filterByAge(age) {
    // This would filter toys based on age groups
    console.log('Filtering toys for age group:', age);
    showNotification(`Showing toys for ${age}`, 'info');
}

// Favorite toys functionality
let favoriteToys = JSON.parse(localStorage.getItem('favoriteToys')) || [];

function toggleFavorite(toyId) {
    if (favoriteToys.includes(toyId)) {
        favoriteToys = favoriteToys.filter(id => id !== toyId);
        showNotification('Removed from favorites! 💔', 'info');
    } else {
        favoriteToys.push(toyId);
        showNotification('Added to favorites! ❤️', 'success');
    }
    
    localStorage.setItem('favoriteToys', JSON.stringify(favoriteToys));
    updateFavoriteIcons();
}

function updateFavoriteIcons() {
    // Update heart icons based on favorite status
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const toyId = btn.getAttribute('data-toy-id');
        if (favoriteToys.includes(toyId)) {
            btn.innerHTML = '❤️';
            btn.classList.add('favorited');
        } else {
            btn.innerHTML = '🤍';
            btn.classList.remove('favorited');
        }
    });
}

// Initialize favorites on page load
document.addEventListener('DOMContentLoaded', updateFavoriteIcons);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSearchModal();
    }
    
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Print functionality for toy instructions
function printToyInstructions() {
    window.print();
}

// Share functionality
function shareToy(toyName, toyUrl) {
    if (navigator.share) {
        navigator.share({
            title: `Check out this amazing DIY toy: ${toyName}`,
            text: `I found this cool DIY toy idea for kids!`,
            url: toyUrl
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(toyUrl).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        });
    }
}

// Easter egg - Konami Code
let konamiCode = [];
const konamiPattern = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiPattern.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Easter egg activated!
        document.body.style.filter = 'hue-rotate(180deg)';
        showNotification('🎉 SECRET RAINBOW MODE ACTIVATED! 🌈', 'success');
        setTimeout(() => {
            document.body.style.filter = '';
        }, 5000);
    }
});

// Performance optimization - Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
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
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading on page load
document.addEventListener('DOMContentLoaded', initializeLazyLoading);