document.addEventListener("DOMContentLoaded", function () {
  initSmoothScrolling();
  initFormHandling();
  initScrollAnimations();
  initInteractiveElements();
  initNewsletterForm();
  initNewsFilters();
  initPerspectiveCards();
  initTimelineAnimation();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

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
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (email) {
        showNotification(
          "Thank you for subscribing to Israel-Palestine News updates!",
          "success",
        );
        emailInput.value = "";
      }
    });
  });
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

  const animatedElements = document.querySelectorAll(
    ".news-card, .perspective-card, .humanitarian-card, .resource-card",
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// Interactive elements
function initInteractiveElements() {
  // CTA button interaction
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      document
        .querySelector("#latest-news")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  // Add hover effects to cards
  const cards = document.querySelectorAll(
    ".news-card, .perspective-card, .humanitarian-card, .resource-card",
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
}

// Newsletter form functionality
function initNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (validateEmail(email)) {
        showNotification(
          "Successfully subscribed to Israel-Palestine News updates!",
          "success",
        );
        emailInput.value = "";
      } else {
        showNotification("Please enter a valid email address.", "error");
      }
    });
  }
}

// News filtering functionality
function initNewsFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const newsCards = document.querySelectorAll(".news-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      newsCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-source") === filter) {
          card.style.display = "block";
          card.style.animation = "fadeIn 0.5s ease-in";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Perspective cards interaction
function initPerspectiveCards() {
  const perspectiveCards = document.querySelectorAll(".perspective-card");

  perspectiveCards.forEach((card) => {
    // Add pulse animation on hover
    card.addEventListener("mouseenter", function () {
      this.style.animation = "pulse 1s infinite";
    });

    card.addEventListener("mouseleave", function () {
      this.style.animation = "none";
    });
  });
}

// Timeline animation
function initTimelineAnimation() {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const timelineObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
        }
      });
    },
    { threshold: 0.5 },
  );

  timelineItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-20px)";
    item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
    timelineObserver.observe(item);
  });
}

// Show perspective details modal
function showPerspectiveDetails(perspective) {
  const modal = document.createElement("div");
  modal.className = "perspective-modal";

  let content = "";
  let title = "";

  switch (perspective) {
    case "Israeli":
      title = "Israeli Perspective";
      content = `
        <h3>Security Concerns & Historical Context</h3>
        <p>Israel's perspective focuses on national security, historical trauma from the Holocaust, and the need for a Jewish homeland. Key concerns include:</p>
        <ul>
          <li>Security threats from militant groups</li>
          <li>Historical right to the land</li>
          <li>Protection of Israeli citizens</li>
          <li>Regional stability and peace</li>
        </ul>
        <h3>Current Policy Positions</h3>
        <p>Israel seeks security guarantees, recognition of its right to exist, and measures to prevent future attacks while maintaining its democratic character.</p>
      `;
      break;
    case "Palestinian":
      title = "Palestinian Perspective";
      content = `
        <h3>Aspirations for Self-Determination</h3>
        <p>Palestinians seek self-determination, an end to occupation, and the right to establish their own state. Key concerns include:</p>
        <ul>
          <li>Right to self-determination</li>
          <li>End to occupation and settlements</li>
          <li>Right of return for refugees</li>
          <li>East Jerusalem as capital</li>
        </ul>
        <h3>Impact on Daily Life</h3>
        <p>Palestinians face restrictions on movement, access to resources, and economic development under occupation.</p>
      `;
      break;
    case "International":
      title = "International Perspective";
      content = `
        <h3>International Law & Diplomacy</h3>
        <p>The international community seeks peaceful resolution through diplomatic means and adherence to international law:</p>
        <ul>
          <li>Two-state solution framework</li>
          <li>UN Security Council resolutions</li>
          <li>International humanitarian law</li>
          <li>Diplomatic mediation efforts</li>
        </ul>
        <h3>Global Response</h3>
        <p>International organizations and countries provide humanitarian aid and support peace negotiations.</p>
      `;
      break;
  }

  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${title}</h2>
        <button class="close-modal">&times;</button>
      </div>
      <div class="modal-body">
        ${content}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Add modal styles
  const style = document.createElement("style");
  style.textContent = `
    .perspective-modal {
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
      border-radius: 15px;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
      animation: slideIn 0.3s ease;
    }
    
    .modal-header {
      background: #1e3c72;
      color: white;
      padding: 1.5rem;
      border-radius: 15px 15px 0 0;
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
      border-radius: 50%;
      transition: background 0.3s ease;
    }
    
    .close-modal:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    .modal-body {
      padding: 2rem;
    }
    
    .modal-body h3 {
      color: #1e3c72;
      margin: 1.5rem 0 1rem 0;
      font-size: 1.3rem;
    }
    
    .modal-body h3:first-child {
      margin-top: 0;
    }
    
    .modal-body p {
      color: #666;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    
    .modal-body ul {
      margin: 1rem 0;
      padding-left: 1.5rem;
    }
    
    .modal-body li {
      color: #666;
      margin-bottom: 0.5rem;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideIn {
      from { transform: translateY(-50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // Close modal functionality
  const closeBtn = modal.querySelector(".close-modal");
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  modal.addEventListener("click", (e) => {
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
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add notification styles
  const style = document.createElement("style");
  style.textContent = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      color: white;
      font-weight: 500;
      z-index: 10001;
      animation: slideInRight 0.3s ease;
      max-width: 400px;
      word-wrap: break-word;
    }
    
    .notification-success {
      background: #4ade80;
      color: #1e3c72;
    }
    
    .notification-error {
      background: #ef4444;
      color: white;
    }
    
    .notification-info {
      background: #1e3c72;
      color: white;
    }
    
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
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
const animationStyle = document.createElement("style");
animationStyle.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-in {
    animation: fadeIn 0.6s ease-out;
  }
`;
document.head.appendChild(animationStyle);
