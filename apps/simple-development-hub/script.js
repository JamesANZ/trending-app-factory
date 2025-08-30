// Simple Development Hub - Interactive Features

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all interactive features
  initSmoothScrolling();
  initNewsletterForm();
  initScrollAnimations();
  initPrincipleCards();
  initExampleCards();
  initToolCards();
  initCommunityStats();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Newsletter form handling
function initNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email && isValidEmail(email)) {
        // Simulate successful subscription
        showNotification(
          "🎉 Successfully subscribed! Welcome to the Simple Development movement.",
          "success",
        );
        emailInput.value = "";

        // Update community stats
        updateCommunityStats();
      } else {
        showNotification("Please enter a valid email address.", "error");
      }
    });
  }
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;

  // Add close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.remove();
  });

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);

  // Add to page
  document.body.appendChild(notification);

  // Add CSS animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideInRight {
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
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  const animatedElements = document.querySelectorAll(
    ".principle-card, .example-card, .tool-card, .stat",
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Principle cards interactions
function initPrincipleCards() {
  const principleCards = document.querySelectorAll(".principle-card");

  principleCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Add click effect
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // Show principle details
      const title = this.querySelector("h3").textContent;
      const description = this.querySelector("p").textContent;

      showPrincipleModal(title, description);
    });
  });
}

// Example cards interactions
function initExampleCards() {
  const exampleCards = document.querySelectorAll(".example-card");

  exampleCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Add click effect
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // Show example details
      const title = this.querySelector("h3").textContent;
      const description = this.querySelector(
        ".example-description",
      ).textContent;
      const tags = Array.from(this.querySelectorAll(".tag")).map(
        (tag) => tag.textContent,
      );

      showExampleModal(title, description, tags);
    });
  });
}

// Tool cards interactions
function initToolCards() {
  const toolCards = document.querySelectorAll(".tool-card");

  toolCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Add click effect
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // Show tool details
      const title = this.querySelector("h3").textContent;
      const description = this.querySelector("p").textContent;
      const benefits = Array.from(
        this.querySelectorAll(".tool-benefits span"),
      ).map((benefit) => benefit.textContent);

      showToolModal(title, description, benefits);
    });
  });
}

// Community stats interactions
function initCommunityStats() {
  const stats = document.querySelectorAll(".stat");

  stats.forEach((stat) => {
    stat.addEventListener("click", function () {
      // Add click effect
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // Animate number
      const numberElement = this.querySelector(".stat-number");
      const finalNumber = parseInt(numberElement.textContent);
      animateNumber(numberElement, 0, finalNumber, 1000);
    });
  });
}

// Animate number counting
function animateNumber(element, start, end, duration) {
  const startTime = performance.now();

  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const current = Math.floor(start + (end - start) * progress);
    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }

  requestAnimationFrame(updateNumber);
}

// Update community stats (simulate growth)
function updateCommunityStats() {
  const stats = document.querySelectorAll(".stat-number");

  stats.forEach((stat, index) => {
    const currentValue = parseInt(stat.textContent);
    const newValue = currentValue + Math.floor(Math.random() * 5) + 1;

    animateNumber(stat, currentValue, newValue, 1000);
  });
}

// Show principle modal
function showPrincipleModal(title, description) {
  showModal(`🎯 ${title}`, description, "principle");
}

// Show example modal
function showExampleModal(title, description, tags) {
  const content = `
        <p>${description}</p>
        <div class="modal-tags">
            ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
    `;
  showModal(`💻 ${title}`, content, "example");
}

// Show tool modal
function showToolModal(title, description, benefits) {
  const content = `
        <p>${description}</p>
        <h4>Key Benefits:</h4>
        <ul>
            ${benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
        </ul>
    `;
  showModal(`🛠️ ${title}`, content, "tool");
}

// Generic modal function
function showModal(title, content, type) {
  // Remove existing modals
  const existingModal = document.querySelector(".modal");
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
        <div class="modal-content modal-${type}">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;

  // Add modal styles
  const style = document.createElement("style");
  style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideInUp 0.3s ease;
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
            color: #1f2937;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #6b7280;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }
        
        .modal-close:hover {
            background-color: #f3f4f6;
        }
        
        .modal-body {
            padding: 1.5rem;
            color: #4b5563;
            line-height: 1.6;
        }
        
        .modal-tags {
            margin-top: 1rem;
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        
        .modal-tags .tag {
            background: #e5f3ff;
            color: #0369a1;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .modal-body ul {
            margin-top: 0.5rem;
            padding-left: 1.5rem;
        }
        
        .modal-body li {
            margin-bottom: 0.5rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideInUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
  document.head.appendChild(style);

  // Add close functionality
  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => {
    modal.remove();
  });

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function closeOnEscape(e) {
    if (e.key === "Escape") {
      modal.remove();
      document.removeEventListener("keydown", closeOnEscape);
    }
  });

  // Add to page
  document.body.appendChild(modal);
}

// Add CSS for animations
const animationStyle = document.createElement("style");
animationStyle.textContent = `
    .principle-card, .example-card, .tool-card, .stat {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .principle-card.animate-in, .example-card.animate-in, .tool-card.animate-in, .stat.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .principle-card:nth-child(1) { transition-delay: 0.1s; }
    .principle-card:nth-child(2) { transition-delay: 0.2s; }
    .principle-card:nth-child(3) { transition-delay: 0.3s; }
    .principle-card:nth-child(4) { transition-delay: 0.4s; }
    .principle-card:nth-child(5) { transition-delay: 0.5s; }
    .principle-card:nth-child(6) { transition-delay: 0.6s; }
    
    .example-card:nth-child(1) { transition-delay: 0.1s; }
    .example-card:nth-child(2) { transition-delay: 0.2s; }
    .example-card:nth-child(3) { transition-delay: 0.3s; }
    .example-card:nth-child(4) { transition-delay: 0.4s; }
    
    .tool-card:nth-child(1) { transition-delay: 0.1s; }
    .tool-card:nth-child(2) { transition-delay: 0.2s; }
    .tool-card:nth-child(3) { transition-delay: 0.3s; }
    .tool-card:nth-child(4) { transition-delay: 0.4s; }
    
    .stat:nth-child(1) { transition-delay: 0.1s; }
    .stat:nth-child(2) { transition-delay: 0.2s; }
    .stat:nth-child(3) { transition-delay: 0.3s; }
`;

document.head.appendChild(animationStyle);

// Add some fun interactions
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to trending badge
  const trendingBadge = document.querySelector(".trending-badge");
  if (trendingBadge) {
    trendingBadge.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) rotate(2deg)";
    });

    trendingBadge.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  }

  // Add typing effect to hero title
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    // Start typing after a short delay
    setTimeout(typeWriter, 500);
  }
});
