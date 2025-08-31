document.addEventListener("DOMContentLoaded", function () {
  initSmoothScrolling();
  initFormHandling();
  initScrollAnimations();
  initInteractiveElements();
  initNewsletterForm();
  initLiveUpdates();
  initHighlightCards();
  initRankingAnimations();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Form handling for newsletter subscription
function initFormHandling() {
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        showNotification(
          "Thanks for subscribing! You'll get the latest college football updates.",
          "success",
        );
        emailInput.value = "";
      } else {
        showNotification("Please enter a valid email address.", "error");
      }
    });
  }
}

// Scroll animations for elements
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".game-card, .upset-card, .highlight-card, .news-card",
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });
}

// Interactive elements
function initInteractiveElements() {
  // CTA button interaction
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      const scoresSection = document.querySelector("#scores");
      if (scoresSection) {
        scoresSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Game card interactions
  const gameCards = document.querySelectorAll(".game-card");
  gameCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "scale(1.02)";
      setTimeout(() => {
        this.style.transform = "";
      }, 200);
    });
  });
}

// Newsletter form with enhanced validation
function initNewsletterForm() {
  const emailInput = document.querySelector(
    '.newsletter-form input[type="email"]',
  );

  if (emailInput) {
    emailInput.addEventListener("input", function () {
      const email = this.value.trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (email && !isValid) {
        this.style.borderColor = "#dc3545";
      } else {
        this.style.borderColor = "";
      }
    });
  }
}

// Simulated live updates
function initLiveUpdates() {
  // Simulate live score updates
  const updateScores = () => {
    const scores = document.querySelectorAll(".score");
    scores.forEach((score) => {
      const currentScore = parseInt(score.textContent);
      if (Math.random() > 0.95) {
        // 5% chance to update
        const newScore = currentScore + Math.floor(Math.random() * 7) + 1;
        score.textContent = newScore;
        score.style.color = "#28a745";
        setTimeout(() => {
          score.style.color = "";
        }, 1000);
      }
    });
  };

  // Update every 30 seconds
  setInterval(updateScores, 30000);
}

// Highlight card interactions
function initHighlightCards() {
  const highlightCards = document.querySelectorAll(".highlight-card");

  highlightCards.forEach((card) => {
    const playButton = card.querySelector(".play-button");

    if (playButton) {
      playButton.addEventListener("click", function (e) {
        e.stopPropagation();

        // Simulate video play
        this.textContent = "⏸";
        this.style.color = "#ffd700";

        // Show video placeholder message
        const videoTitle = card.querySelector(".video-title");
        if (videoTitle) {
          const originalText = videoTitle.textContent;
          videoTitle.textContent = "Playing...";
          videoTitle.style.color = "#ffd700";

          setTimeout(() => {
            this.textContent = "▶";
            this.style.color = "";
            videoTitle.textContent = originalText;
            videoTitle.style.color = "";
          }, 3000);
        }
      });
    }
  });
}

// Ranking animations
function initRankingAnimations() {
  const rankingItems = document.querySelectorAll(".ranking-item");

  rankingItems.forEach((item, index) => {
    // Stagger animation on load
    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-20px)";

      setTimeout(() => {
        item.style.transition = "all 0.5s ease";
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }, 100);
    }, index * 100);
  });
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "success" ? "#28a745" : type === "error" ? "#dc3545" : "#1e3c72"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Close button functionality
  const closeButton = notification.querySelector(".notification-close");
  closeButton.addEventListener("click", () => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      notification.remove();
    }, 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        notification.remove();
      }, 300);
    }
  }, 5000);
}

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
  .game-card, .upset-card, .highlight-card, .news-card {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .game-card.animate-in, .upset-card.animate-in, .highlight-card.animate-in, .news-card.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  
  .notification-close:hover {
    opacity: 0.7;
  }
  
  .ranking-item {
    opacity: 0;
    transform: translateX(-20px);
  }
  
  .ranking-item.animate-in {
    opacity: 1;
    transform: translateX(0);
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  .upset-badge {
    animation: pulse 2s infinite;
  }
  
  .hero-stats .stat {
    transition: transform 0.3s ease;
  }
  
  .hero-stats .stat:hover {
    transform: translateY(-5px);
  }
  
  .cta-button:active {
    transform: translateY(0) !important;
  }
  
  .nav-links a {
    position: relative;
  }
  
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffd700;
    transition: width 0.3s ease;
  }
  
  .nav-links a:hover::after {
    width: 100%;
  }
`;

document.head.appendChild(style);

// Add loading animation
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #ffd700, #ffed4e);
    z-index: 10001;
    transition: width 0.1s ease;
  `;

  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });
}

addScrollProgress();
