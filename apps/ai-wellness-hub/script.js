document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initFormHandling();
    initScrollAnimations();
    initInteractiveElements();
    initNewsletterForm();
    initToolCards();
    initTrendingCards();
    initCommunityStats();
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

// Form handling for the wellness form
function initFormHandling() {
    const wellnessForm = document.querySelector('.wellness-form');
    
    if (wellnessForm) {
        wellnessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const age = formData.get('age');
            const fitnessLevel = formData.get('fitness-level');
            const goals = formData.get('goals');
            
            if (age && fitnessLevel && goals) {
                showAIWellnessPlan(age, fitnessLevel, goals);
            } else {
                showNotification('Please fill in all fields to get your personalized AI wellness plan.', 'error');
            }
        });
    }
}

// Show personalized AI wellness plan
function showAIWellnessPlan(age, fitnessLevel, goals) {
    const planData = generateAIWellnessPlan(age, fitnessLevel, goals);
    
    const modal = document.createElement('div');
    modal.className = 'ai-plan-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>🤖 Your AI Wellness Plan</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="plan-summary">
                    <div class="plan-stat">
                        <span class="stat-label">Age Group</span>
                        <span class="stat-value">${planData.ageGroup}</span>
                    </div>
                    <div class="plan-stat">
                        <span class="stat-label">Fitness Level</span>
                        <span class="stat-value">${planData.fitnessLevel}</span>
                    </div>
                    <div class="plan-stat">
                        <span class="stat-label">Primary Goal</span>
                        <span class="stat-value">${planData.goal}</span>
                    </div>
                </div>
                
                <div class="ai-recommendations">
                    <h3>🎯 AI Recommendations</h3>
                    <div class="recommendation">
                        <h4>Workout Frequency</h4>
                        <p>${planData.workoutFrequency}</p>
                    </div>
                    <div class="recommendation">
                        <h4>Nutrition Focus</h4>
                        <p>${planData.nutritionFocus}</p>
                    </div>
                    <div class="recommendation">
                        <h4>Recovery Strategy</h4>
                        <p>${planData.recoveryStrategy}</p>
                    </div>
                    <div class="recommendation">
                        <h4>Progress Tracking</h4>
                        <p>${planData.progressTracking}</p>
                    </div>
                </div>
                
                <div class="ai-insights">
                    <h3>🧠 AI Insights</h3>
                    <p>${planData.aiInsights}</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="save-plan-btn">Save My Plan</button>
                <button class="modify-plan-btn">Modify Plan</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .ai-plan-modal {
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
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 16px;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        
        .modal-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 16px 16px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h2 {
            margin: 0;
            font-size: 1.5rem;
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
        
        .plan-summary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 12px;
        }
        
        .plan-stat {
            text-align: center;
        }
        
        .plan-stat .stat-label {
            display: block;
            font-size: 0.8rem;
            color: #6b7280;
            margin-bottom: 0.5rem;
        }
        
        .plan-stat .stat-value {
            display: block;
            font-size: 1.1rem;
            font-weight: 600;
            color: #1f2937;
        }
        
        .ai-recommendations {
            margin-bottom: 2rem;
        }
        
        .ai-recommendations h3 {
            color: #1f2937;
            margin-bottom: 1rem;
        }
        
        .recommendation {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 4px solid #667eea;
        }
        
        .recommendation h4 {
            color: #374151;
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }
        
        .recommendation p {
            color: #6b7280;
            margin: 0;
            font-size: 0.9rem;
        }
        
        .ai-insights {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            padding: 1.5rem;
            border-radius: 12px;
            border-left: 4px solid #f59e0b;
        }
        
        .ai-insights h3 {
            color: #92400e;
            margin-bottom: 1rem;
        }
        
        .ai-insights p {
            color: #92400e;
            margin: 0;
            line-height: 1.6;
        }
        
        .modal-footer {
            padding: 1.5rem;
            border-top: 1px solid #e5e7eb;
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }
        
        .save-plan-btn, .modify-plan-btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .save-plan-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .modify-plan-btn {
            background: #f3f4f6;
            color: #374151;
        }
        
        .save-plan-btn:hover, .modify-plan-btn:hover {
            transform: translateY(-2px);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(modalStyles);
    
    // Event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.save-plan-btn').addEventListener('click', () => {
        showNotification('Your AI wellness plan has been saved! 🎉', 'success');
        modal.remove();
    });
    
    modal.querySelector('.modify-plan-btn').addEventListener('click', () => {
        modal.remove();
        document.querySelector('#personalized').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Generate AI wellness plan based on user inputs
function generateAIWellnessPlan(age, fitnessLevel, goals) {
    const ageNum = parseInt(age);
    let ageGroup, workoutFrequency, nutritionFocus, recoveryStrategy, progressTracking, aiInsights;
    
    // Age group classification
    if (ageNum < 25) ageGroup = 'Young Adult (18-24)';
    else if (ageNum < 35) ageGroup = 'Young Professional (25-34)';
    else if (ageNum < 50) ageGroup = 'Mid-Life (35-49)';
    else ageGroup = 'Mature Adult (50+)';
    
    // Fitness level adjustments
    const levelMultiplier = fitnessLevel === 'beginner' ? 0.7 : fitnessLevel === 'intermediate' ? 1.0 : 1.3;
    
    // Workout frequency based on age and fitness level
    if (ageNum < 30) {
        workoutFrequency = `${Math.round(4 * levelMultiplier)}-${Math.round(6 * levelMultiplier)} sessions per week`;
    } else if (ageNum < 50) {
        workoutFrequency = `${Math.round(3 * levelMultiplier)}-${Math.round(5 * levelMultiplier)} sessions per week`;
    } else {
        workoutFrequency = `${Math.round(2 * levelMultiplier)}-${Math.round(4 * levelMultiplier)} sessions per week`;
    }
    
    // Nutrition focus based on goals
    switch(goals) {
        case 'weight-loss':
            nutritionFocus = 'Calorie deficit with high protein (1.6-2.2g per kg body weight) and fiber-rich foods';
            break;
        case 'muscle-gain':
            nutritionFocus = 'Calorie surplus with high protein (2.0-2.4g per kg body weight) and complex carbohydrates';
            break;
        case 'endurance':
            nutritionFocus = 'Balanced macronutrients with emphasis on carbohydrates (6-10g per kg body weight) for energy';
            break;
        case 'flexibility':
            nutritionFocus = 'Anti-inflammatory foods, adequate protein, and hydration for joint health and recovery';
            break;
        case 'mental-health':
            nutritionFocus = 'Omega-3 rich foods, complex carbohydrates, and mood-supporting nutrients like B vitamins';
            break;
        default:
            nutritionFocus = 'Balanced nutrition with focus on whole foods and adequate protein';
    }
    
    // Recovery strategy
    if (ageNum < 30) {
        recoveryStrategy = 'Active recovery, 7-8 hours sleep, and 1-2 rest days per week';
    } else if (ageNum < 50) {
        recoveryStrategy = 'Active recovery, 7-9 hours sleep, and 2-3 rest days per week with mobility work';
    } else {
        recoveryStrategy = 'Gentle recovery, 8-9 hours sleep, and 3-4 rest days per week with stretching and mobility';
    }
    
    // Progress tracking
    progressTracking = 'Weekly measurements, progress photos, performance metrics, and AI-powered insights';
    
    // AI insights
    aiInsights = `Based on your profile, our AI recommends focusing on ${goals.replace('-', ' ')} with a ${fitnessLevel} approach. Your age group typically responds well to ${ageNum < 35 ? 'high-intensity' : ageNum < 50 ? 'moderate-intensity' : 'low-impact'} training. Consider tracking your sleep quality and stress levels as they significantly impact your ${goals.replace('-', ' ')} progress.`;
    
    return {
        ageGroup,
        fitnessLevel: fitnessLevel.charAt(0).toUpperCase() + fitnessLevel.slice(1),
        goal: goals.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        workoutFrequency,
        nutritionFocus,
        recoveryStrategy,
        progressTracking,
        aiInsights
    };
}

// Newsletter form handling
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                showNotification('Thank you for subscribing to AI wellness updates! 🚀', 'success');
                this.reset();
            }
        });
    }
}

// Interactive tool cards
function initToolCards() {
    const toolButtons = document.querySelectorAll('.tool-button');
    
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolName = this.closest('.tool-card').querySelector('h3').textContent;
            showNotification(`Exploring ${toolName}... 🚀`, 'info');
            
            // Simulate loading
            setTimeout(() => {
                showNotification(`${toolName} tools are being loaded. This feature is coming soon! 🎯`, 'success');
            }, 1500);
        });
    });
}

// Interactive trending cards
function initTrendingCards() {
    const trendCards = document.querySelectorAll('.trend-card');
    
    trendCards.forEach(card => {
        card.addEventListener('click', function() {
            const trendName = this.querySelector('h3').textContent;
            const trendTag = this.querySelector('.trend-tag').textContent;
            
            showNotification(`🔥 ${trendName} is a ${trendTag.toLowerCase()} trend in AI wellness!`, 'info');
        });
    });
}

// Community stats animation
function initCommunityStats() {
    const stats = document.querySelectorAll('.community-stat .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Animate number counting
function animateNumber(element) {
    const finalNumber = element.textContent;
    const isPercentage = finalNumber.includes('%');
    const isPlus = finalNumber.includes('+');
    const isTime = finalNumber.includes(':');
    
    let numericValue;
    if (isPercentage) {
        numericValue = parseInt(finalNumber.replace('%', ''));
    } else if (isPlus) {
        numericValue = parseInt(finalNumber.replace('+', ''));
    } else if (isTime) {
        numericValue = 24; // For 24/7
    } else {
        numericValue = parseInt(finalNumber.replace('K', '000'));
    }
    
    let currentValue = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
            currentValue = numericValue;
            clearInterval(timer);
        }
        
        let displayValue;
        if (isPercentage) {
            displayValue = Math.floor(currentValue) + '%';
        } else if (isPlus) {
            displayValue = Math.floor(currentValue) + '+';
        } else if (isTime) {
            displayValue = '24/7';
        } else if (numericValue >= 1000) {
            displayValue = Math.floor(currentValue / 1000) + 'K+';
        } else {
            displayValue = Math.floor(currentValue);
        }
        
        element.textContent = displayValue;
    }, 30);
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    const animatedElements = document.querySelectorAll('.trend-card, .tool-card, .tech-item, .flow-step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Interactive elements
function initInteractiveElements() {
    // CTA button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            showNotification('Starting your AI wellness journey... 🚀', 'info');
            setTimeout(() => {
                document.querySelector('#personalized').scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        });
    }
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.trend-card, .tool-card, .tech-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 12px;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
                z-index: 10001;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
                border-left: 4px solid;
            }
            
            .notification-info {
                border-left-color: #667eea;
            }
            
            .notification-success {
                border-left-color: #10b981;
            }
            
            .notification-error {
                border-left-color: #ef4444;
            }
            
            .notification-content {
                padding: 1rem;
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .notification-message {
                flex: 1;
                color: #1f2937;
                font-weight: 500;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #6b7280;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                color: #374151;
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
}

// Add some dynamic content updates
setInterval(() => {
    const stats = document.querySelectorAll('.hero-stats .stat-number');
    if (stats.length > 0) {
        stats.forEach(stat => {
            if (stat.textContent.includes('$')) {
                // Simulate market growth
                const currentValue = parseFloat(stat.textContent.replace('$', '').replace('B', ''));
                const growth = (Math.random() * 0.1 - 0.05) * currentValue;
                const newValue = (currentValue + growth).toFixed(2);
                stat.textContent = `$${newValue}B`;
            }
        });
    }
}, 10000); // Update every 10 seconds 