document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initFormHandling();
    initScrollAnimations();
    initInteractiveElements();
    initNewsletterForm();
    initTrendCards();
    initTechCards();
    initNewsCards();
    initTimelineAnimation();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form handling for newsletter subscription
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                showNotification('Thank you for subscribing to Chinese Web Trends!', 'success');
                emailInput.value = '';
            }
        });
    });
}

// Scroll animations for elements
function initScrollAnimations() {
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
    
    const animatedElements = document.querySelectorAll('.trend-card, .tech-card, .insight-card, .news-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Interactive elements
function initInteractiveElements() {
    // CTA button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('#trends').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.trend-card, .tech-card, .insight-card, .news-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Newsletter form functionality
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (validateEmail(email)) {
                showNotification('Successfully subscribed to Chinese Web Trends updates!', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
}

// Trend cards interaction
function initTrendCards() {
    const trendCards = document.querySelectorAll('.trend-card');
    
    trendCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            showTrendDetails(title);
        });
        
        // Add pulse animation on hover
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 1s infinite';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
}

// Tech cards interaction
function initTechCards() {
    const techCards = document.querySelectorAll('.tech-card');
    
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const badge = this.querySelector('.tech-badge').textContent;
            showTechDetails(title, badge);
        });
    });
}

// News cards interaction
function initNewsCards() {
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach(card => {
        const readMoreLink = card.querySelector('.read-more');
        if (readMoreLink) {
            readMoreLink.addEventListener('click', function(e) {
                e.preventDefault();
                const title = card.querySelector('h3').textContent;
                const category = card.querySelector('.news-category').textContent;
                showNewsDetails(title, category);
            });
        }
    });
}

// Timeline animation
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.5 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });
}

// Show trend details modal
function showTrendDetails(title) {
    const modal = document.createElement('div');
    modal.className = 'trend-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Trend Analysis</h3>
                <p>This trend represents a significant shift in China's internet technology landscape, reflecting the country's strategic focus on innovation and global leadership.</p>
                
                <h3>Key Metrics</h3>
                <ul>
                    <li>Market Impact: High</li>
                    <li>Investment Potential: Strong</li>
                    <li>Global Relevance: Significant</li>
                </ul>
                
                <h3>Future Outlook</h3>
                <p>Expected to continue growing as China strengthens its position in global technology markets.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .trend-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
        
        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .modal-header {
            background: linear-gradient(135deg, #d32f2f 0%, #f57c00 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 15px 15px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h2 {
            margin: 0;
            color: white;
        }
        
        .close-modal {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-body {
            padding: 2rem;
        }
        
        .modal-body h3 {
            color: #d32f2f;
            margin: 1.5rem 0 1rem 0;
        }
        
        .modal-body ul {
            margin-left: 1.5rem;
        }
        
        .modal-body li {
            margin-bottom: 0.5rem;
        }
    `;
    document.head.appendChild(style);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Show tech details modal
function showTechDetails(title, badge) {
    const modal = document.createElement('div');
    modal.className = 'tech-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <span class="tech-badge">${badge}</span>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Technology Overview</h3>
                <p>This revolutionary technology represents a breakthrough in China's internet infrastructure development.</p>
                
                <h3>Technical Specifications</h3>
                <ul>
                    <li>Performance: Exceptional</li>
                    <li>Scalability: High</li>
                    <li>Global Impact: Revolutionary</li>
                </ul>
                
                <h3>Development Status</h3>
                <p>Currently in active development with significant progress being made.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles (similar to trend modal)
    const style = document.createElement('style');
    style.textContent = `
        .tech-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
        
        .tech-modal .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .tech-modal .modal-header {
            background: linear-gradient(135deg, #d32f2f 0%, #f57c00 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 15px 15px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .tech-modal .modal-header h2 {
            margin: 0;
            color: white;
        }
        
        .tech-modal .close-modal {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .tech-modal .modal-body {
            padding: 2rem;
        }
        
        .tech-modal .modal-body h3 {
            color: #d32f2f;
            margin: 1.5rem 0 1rem 0;
        }
        
        .tech-modal .modal-body ul {
            margin-left: 1.5rem;
        }
        
        .tech-modal .modal-body li {
            margin-bottom: 0.5rem;
        }
    `;
    document.head.appendChild(style);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Show news details modal
function showNewsDetails(title, category) {
    const modal = document.createElement('div');
    modal.className = 'news-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <span class="news-category">${category}</span>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Article Summary</h3>
                <p>This news article provides important insights into the latest developments in Chinese internet technology.</p>
                
                <h3>Key Points</h3>
                <ul>
                    <li>Significant technological advancement</li>
                    <li>Global market implications</li>
                    <li>Future development roadmap</li>
                </ul>
                
                <h3>Read Full Article</h3>
                <p>For the complete story and detailed analysis, please visit our news section or subscribe to our newsletter for updates.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles (similar to other modals)
    const style = document.createElement('style');
    style.textContent = `
        .news-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
        
        .news-modal .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .news-modal .modal-header {
            background: linear-gradient(135deg, #d32f2f 0%, #f57c00 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 15px 15px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .news-modal .modal-header h2 {
            margin: 0;
            color: white;
        }
        
        .news-modal .close-modal {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .news-modal .modal-body {
            padding: 2rem;
        }
        
        .news-modal .modal-body h3 {
            color: #d32f2f;
            margin: 1.5rem 0 1rem 0;
        }
        
        .news-modal .modal-body ul {
            margin-left: 1.5rem;
        }
        
        .news-modal .modal-body li {
            margin-bottom: 0.5rem;
        }
    `;
    document.head.appendChild(style);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10001;
            animation: slideIn 0.3s ease;
        }
        
        .notification-success {
            background: #4caf50;
        }
        
        .notification-error {
            background: #f44336;
        }
        
        .notification-info {
            background: #2196f3;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Add CSS animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .trend-card,
    .tech-card,
    .insight-card,
    .news-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .trend-card.animate-in,
    .tech-card.animate-in,
    .insight-card.animate-in,
    .news-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animationStyle); 