// College Football Hub - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initSmoothScrolling();
    initNewsletterForm();
    initScrollAnimations();
    initTrendingCards();
    initTeamCards();
    initPlayerCards();
    initNewsCards();
    initLiveUpdates();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Newsletter form handling
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulate successful subscription
                showNotification('🎉 Successfully subscribed! Welcome to the College Football Hub family!', 'success');
                this.reset();
                
                // Update subscriber count
                updateSubscriberCount();
            }
        });
    }
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
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.trending-card, .team-card, .player-card, .fantasy-card, .news-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Trending cards interactions
function initTrendingCards() {
    const trendingCards = document.querySelectorAll('.trending-card');
    
    trendingCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show trending topic details
            const topic = this.querySelector('h3').textContent;
            showTrendingDetails(topic);
        });
        
        // Hover effects
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// Team cards interactions
function initTeamCards() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            const teamName = this.querySelector('h3').textContent;
            const teamRank = this.querySelector('.team-rank').textContent;
            
            showTeamDetails(teamName, teamRank);
        });
        
        // Add pulse animation for top team
        if (card.classList.contains('top-team')) {
            setInterval(() => {
                card.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 200);
            }, 3000);
        }
    });
}

// Player cards interactions
function initPlayerCards() {
    const playerCards = document.querySelectorAll('.player-card');
    
    playerCards.forEach(card => {
        card.addEventListener('click', function() {
            const playerName = this.querySelector('h3').textContent;
            const playerPosition = this.querySelector('.player-position').textContent;
            
            showPlayerStats(playerName, playerPosition);
        });
        
        // Add number glow effect
        const playerNumber = card.querySelector('.player-number');
        if (playerNumber) {
            setInterval(() => {
                playerNumber.style.textShadow = '0 0 10px rgba(59, 130, 246, 0.8)';
                setTimeout(() => {
                    playerNumber.style.textShadow = '';
                }, 1000);
            }, 2000);
        }
    });
}

// News cards interactions
function initNewsCards() {
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach(card => {
        card.addEventListener('click', function() {
            const newsTitle = this.querySelector('h3').textContent;
            const newsCategory = this.querySelector('.news-category').textContent;
            
            showNewsDetails(newsTitle, newsCategory);
        });
        
        // Add reading time indicator
        const title = card.querySelector('h3').textContent;
        const readingTime = Math.ceil(title.split(' ').length / 200); // 200 words per minute
        addReadingTime(card, readingTime);
    });
}

// Live updates simulation
function initLiveUpdates() {
    // Simulate live score updates
    setInterval(() => {
        updateLiveScores();
    }, 10000); // Update every 10 seconds
    
    // Simulate trending topic changes
    setInterval(() => {
        updateTrendingTopics();
    }, 30000); // Update every 30 seconds
}

// Show trending topic details
function showTrendingDetails(topic) {
    const details = {
        'Deion Sanders\' Impact on Colorado': {
            description: 'The "Prime Effect" continues to transform college football as Deion Sanders leads Colorado into the 2025 season with unprecedented attention and expectations.',
            stats: ['🔥 Massive Social Media Buzz', '📺 Record TV Ratings', '🎯 Top Recruiting Class'],
            impact: 'High'
        },
        'College Football Season Kickoff': {
            description: 'The 2025 season officially begins with major matchups, new conference alignments, and the expanded playoff format that\'s changing everything.',
            stats: ['🏆 12-Team Playoff', '🌍 New Conference Maps', '📅 Epic Opening Weekend'],
            impact: 'High'
        },
        'Heisman Trophy Race': {
            description: 'Early Heisman favorites emerge as quarterbacks and skill players showcase their talents in what promises to be the most competitive race in years.',
            stats: ['🏃‍♂️ Dynamic QBs', '⚡ Explosive RBs', '🎯 Record-Breaking WRs'],
            impact: 'Medium'
        }
    };
    
    const topicData = details[topic];
    if (topicData) {
        showModal(`Trending: ${topic}`, `
            <div class="trending-details">
                <p><strong>Description:</strong> ${topicData.description}</p>
                <div class="trending-stats">
                    ${topicData.stats.map(stat => `<span>${stat}</span>`).join('')}
                </div>
                <p><strong>Impact Level:</strong> <span class="impact-${topicData.impact.toLowerCase()}">${topicData.impact}</span></p>
            </div>
        `);
    }
}

// Show team details
function showTeamDetails(teamName, teamRank) {
    const teamData = {
        'Georgia Bulldogs': {
            record: '15-0 (2024)',
            conference: 'SEC',
            headCoach: 'Kirby Smart',
            keyPlayers: ['Carson Beck', 'Brock Bowers', 'Malaki Starks'],
            nextGame: 'vs. Clemson (Sept 7)'
        },
        'Michigan Wolverines': {
            record: '15-0 (2024)',
            conference: 'Big Ten',
            headCoach: 'Sherrone Moore',
            keyPlayers: ['J.J. McCarthy', 'Blake Corum', 'Will Johnson'],
            nextGame: 'vs. Fresno State (Sept 7)'
        },
        'Colorado Buffaloes': {
            record: '4-8 (2024)',
            conference: 'Big 12',
            headCoach: 'Deion Sanders',
            keyPlayers: ['Shedeur Sanders', 'Travis Hunter', 'Shilo Sanders'],
            nextGame: 'vs. North Dakota State (Sept 7)'
        }
    };
    
    const team = teamData[teamName];
    if (team) {
        showModal(`${teamName} (#${teamRank})`, `
            <div class="team-details">
                <p><strong>Record:</strong> ${team.record}</p>
                <p><strong>Conference:</strong> ${team.conference}</p>
                <p><strong>Head Coach:</strong> ${team.headCoach}</p>
                <p><strong>Key Players:</strong> ${team.keyPlayers.join(', ')}</p>
                <p><strong>Next Game:</strong> ${team.nextGame}</p>
            </div>
        `);
    }
}

// Show player stats
function showPlayerStats(playerName, playerPosition) {
    const playerData = {
        'Quinn Ewers': {
            team: 'Texas Longhorns',
            stats: {
                'Passing Yards': '3,479',
                'Touchdowns': '22',
                'Completion %': '69.0',
                'QBR': '158.7'
            },
            highlights: 'Heisman favorite with elite arm talent and championship aspirations'
        },
        'Travis Hunter': {
            team: 'Colorado Buffaloes',
            stats: {
                'Receiving Yards': '721',
                'Touchdowns': '5',
                'Interceptions': '3',
                'Tackles': '31'
            },
            highlights: 'Two-way superstar under Deion Sanders\' guidance'
        }
    };
    
    const player = playerData[playerName];
    if (player) {
        const statsHTML = Object.entries(player.stats)
            .map(([stat, value]) => `<tr><td>${stat}</td><td>${value}</td></tr>`)
            .join('');
        
        showModal(`${playerName} - ${playerPosition}`, `
            <div class="player-details">
                <p><strong>Team:</strong> ${player.team}</p>
                <p><strong>Highlights:</strong> ${player.highlights}</p>
                <h4>2024 Season Stats:</h4>
                <table class="stats-table">
                    <thead><tr><th>Stat</th><th>Value</th></tr></thead>
                    <tbody>${statsHTML}</tbody>
                </table>
            </div>
        `);
    }
}

// Show news details
function showNewsDetails(title, category) {
    showModal(`${category}: ${title}`, `
        <div class="news-details">
            <p>This is a detailed view of the news article. In a real application, this would contain the full article content, images, and related stories.</p>
            <p>The article would be categorized under: <strong>${category}</strong></p>
            <div class="news-actions">
                <button class="btn btn-primary">Read Full Article</button>
                <button class="btn btn-secondary">Share</button>
            </div>
        </div>
    `);
}

// Show modal
function showModal(title, content) {
    // Remove existing modal if present
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    if (!document.querySelector('#modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
            }
            .modal-content {
                background: white;
                border-radius: 1rem;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                z-index: 10001;
            }
            .modal-header {
                padding: 1.5rem;
                border-bottom: 1px solid #e5e7eb;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-header h3 {
                margin: 0;
                color: #1e3a8a;
            }
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #6b7280;
            }
            .modal-body {
                padding: 1.5rem;
            }
            .stats-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 1rem;
            }
            .stats-table th,
            .stats-table td {
                padding: 0.5rem;
                text-align: left;
                border-bottom: 1px solid #e5e7eb;
            }
            .stats-table th {
                background: #f3f4f6;
                font-weight: 600;
            }
            .trending-details .trending-stats {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin: 1rem 0;
            }
            .trending-details .trending-stats span {
                background: #e0e7ff;
                color: #3730a3;
                padding: 0.25rem 0.75rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
            }
            .impact-high { color: #dc2626; font-weight: 600; }
            .impact-medium { color: #ea580c; font-weight: 600; }
            .impact-low { color: #16a34a; font-weight: 600; }
            .news-actions {
                display: flex;
                gap: 1rem;
                margin-top: 1rem;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Close modal functionality
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.modal-overlay').addEventListener('click', () => {
        modal.remove();
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.remove();
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                color: white;
                font-weight: 600;
                z-index: 10000;
                animation: slideIn 0.3s ease;
            }
            .notification-success {
                background: #10b981;
            }
            .notification-info {
                background: #3b82f6;
            }
            .notification-error {
                background: #ef4444;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Update subscriber count
function updateSubscriberCount() {
    const note = document.querySelector('.newsletter-note');
    if (note) {
        const currentText = note.textContent;
        const match = currentText.match(/(\d+)/);
        if (match) {
            const currentCount = parseInt(match[1]);
            const newCount = currentCount + 1;
            note.textContent = currentText.replace(match[1], newCount);
        }
    }
}

// Add reading time to news cards
function addReadingTime(card, minutes) {
    const readingTimeElement = document.createElement('div');
    readingTimeElement.className = 'reading-time';
    readingTimeElement.innerHTML = `⏱️ ${minutes} min read`;
    readingTimeElement.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: #6b7280;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 500;
    `;
    
    card.style.position = 'relative';
    card.appendChild(readingTimeElement);
}

// Simulate live score updates
function updateLiveScores() {
    // This would typically fetch real data from an API
    const scores = [
        { team1: 'Georgia', score1: '24', team2: 'Clemson', score2: '17', quarter: '3rd' },
        { team1: 'Michigan', score1: '31', team2: 'Fresno State', score2: '10', quarter: '4th' },
        { team1: 'Colorado', score1: '28', team2: 'North Dakota State', score2: '21', quarter: '2nd' }
    ];
    
    // Update live scores if they exist on the page
    scores.forEach(score => {
        // This would update actual score elements on the page
        console.log(`Live: ${score.team1} ${score.score1} - ${score.team2} ${score.score2} (${score.quarter})`);
    });
}

// Simulate trending topic updates
function updateTrendingTopics() {
    const topics = [
        'Deion Sanders\' Impact on Colorado',
        'College Football Season Kickoff',
        'Heisman Trophy Race',
        'Conference Realignment Impact',
        'Top 25 Rankings Shakeup',
        'Playoff Expansion Impact'
    ];
    
    // Rotate trending topics
    const trendingCards = document.querySelectorAll('.trending-card');
    trendingCards.forEach((card, index) => {
        const topic = topics[index % topics.length];
        const title = card.querySelector('h3');
        if (title && title.textContent !== topic) {
            title.textContent = topic;
            card.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 500);
        }
    });
}

// Add pulse animation
if (!document.querySelector('#pulse-animation')) {
    const styles = document.createElement('style');
    styles.id = 'pulse-animation';
    styles.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(styles);
}

// Add animate-in class styles
if (!document.querySelector('#animate-in-styles')) {
    const styles = document.createElement('style');
    styles.id = 'animate-in-styles';
    styles.textContent = `
        .trending-card,
        .team-card,
        .player-card,
        .fantasy-card,
        .news-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .trending-card.animate-in,
        .team-card.animate-in,
        .player-card.animate-in,
        .fantasy-card.animate-in,
        .news-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styles);
} 