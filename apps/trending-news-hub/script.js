// Trending News Hub - Interactive Features

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all interactive features
  initSmoothScrolling();
  initNewsletterForm();
  initScrollAnimations();
  initNewsCards();
  initCategoryFilters();
  initLiveUpdates();
  initSearchFunctionality();
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
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Newsletter form functionality
function initNewsletterForm() {
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (validateEmail(email)) {
        showNotification(
          "Success! You've been subscribed to our newsletter.",
          "success",
        );
        emailInput.value = "";

        // Simulate API call
        setTimeout(() => {
          showNotification(
            "Welcome to Trending News Hub! Check your email for confirmation.",
            "info",
          );
        }, 1000);
      } else {
        showNotification("Please enter a valid email address.", "error");
      }
    });
  }
}

// Email validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show notification
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
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;

  // Add animation styles
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: 1rem;
        }
    `;
  document.head.appendChild(style);

  // Add to page
  document.body.appendChild(notification);

  // Close button functionality
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
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe news cards
  const newsCards = document.querySelectorAll(".news-card");
  newsCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
}

// News card interactions
function initNewsCards() {
  const newsCards = document.querySelectorAll(".news-card");

  newsCards.forEach((card) => {
    // Add click functionality
    card.addEventListener("click", function () {
      const title = this.querySelector("h3").textContent;
      const category = this.querySelector(".news-category").textContent;

      // Simulate opening news article
      showNotification(`Opening: ${title}`, "info");
    });

    // Add hover effects
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Category filtering (for future enhancement)
function initCategoryFilters() {
  // This could be expanded to filter news by category
  const categories = [
    "Politics",
    "Sports",
    "Entertainment",
    "Technology",
    "Health",
    "Space",
  ];

  // Add category indicators to news cards
  const newsCards = document.querySelectorAll(".news-card");
  newsCards.forEach((card) => {
    const category = card.querySelector(".news-category");
    if (category) {
      card.setAttribute("data-category", category.textContent);
    }
  });
}

// Live updates simulation
function initLiveUpdates() {
  // Simulate live news updates
  const updateTimes = document.querySelectorAll(".news-time");

  setInterval(() => {
    updateTimes.forEach((timeElement) => {
      const currentText = timeElement.textContent;
      if (currentText.includes("hour")) {
        const hours = parseInt(currentText.match(/(\d+)/)[1]);
        if (hours < 24) {
          timeElement.textContent = `${hours + 1} hours ago`;
        }
      }
    });
  }, 300000); // Update every 5 minutes
}

// Search functionality (for future enhancement)
function initSearchFunctionality() {
  // This could be expanded to add a search bar
  const searchBar = document.createElement("div");
  searchBar.innerHTML = `
        <div class="search-container" style="
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 999;
            background: white;
            padding: 0.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            display: none;
        ">
            <input type="text" placeholder="Search news..." style="
                border: 1px solid #e5e7eb;
                padding: 0.5rem;
                border-radius: 4px;
                width: 200px;
            ">
        </div>
    `;

  document.body.appendChild(searchBar);

  // Show search on Ctrl+K
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      const searchContainer = document.querySelector(".search-container");
      searchContainer.style.display =
        searchContainer.style.display === "none" ? "block" : "none";
    }
  });
}

// Add some additional interactive features
function addInteractiveFeatures() {
  // Add reading time estimates
  const newsCards = document.querySelectorAll(".news-card");
  newsCards.forEach((card) => {
    const content = card.querySelector("p");
    if (content) {
      const wordCount = content.textContent.split(" ").length;
      const readingTime = Math.ceil(wordCount / 200); // Average reading speed

      const readingTimeElement = document.createElement("span");
      readingTimeElement.textContent = `${readingTime} min read`;
      readingTimeElement.style.cssText = `
                color: #6b7280;
                font-size: 0.75rem;
                margin-left: 1rem;
            `;

      const meta = card.querySelector(".news-meta");
      if (meta) {
        meta.appendChild(readingTimeElement);
      }
    }
  });

  // Add share functionality
  const shareButtons = document.createElement("div");
  shareButtons.innerHTML = `
        <div class="share-buttons" style="
            position: fixed;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 999;
            display: none;
        ">
            <button onclick="shareNews('twitter')" style="
                background: #1da1f2;
                color: white;
                border: none;
                padding: 0.5rem;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                margin-bottom: 0.5rem;
                cursor: pointer;
            ">🐦</button>
            <button onclick="shareNews('facebook')" style="
                background: #1877f2;
                color: white;
                border: none;
                padding: 0.5rem;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                margin-bottom: 0.5rem;
                cursor: pointer;
            ">📘</button>
            <button onclick="shareNews('linkedin')" style="
                background: #0077b5;
                color: white;
                border: none;
                padding: 0.5rem;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                cursor: pointer;
            ">💼</button>
        </div>
    `;

  document.body.appendChild(shareButtons);

  // Show share buttons on scroll
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shareButtons = document.querySelector(".share-buttons");

    if (scrollTop > 300) {
      shareButtons.style.display = "block";
    } else {
      shareButtons.style.display = "none";
    }

    lastScrollTop = scrollTop;
  });
}

// Share news function
function shareNews(platform) {
  const currentUrl = window.location.href;
  const title = "Check out this trending news on Trending News Hub!";

  let shareUrl = "";
  switch (platform) {
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
      break;
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
      break;
  }

  if (shareUrl) {
    window.open(shareUrl, "_blank", "width=600,height=400");
  }
}

// Initialize additional features after a delay
setTimeout(addInteractiveFeatures, 1000);

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // Close any open modals or notifications
    const notifications = document.querySelectorAll(".notification");
    notifications.forEach((notification) => notification.remove());
  }

  // Navigate sections with arrow keys
  if (e.altKey) {
    const sections = [
      "politics",
      "sports",
      "entertainment",
      "technology",
      "health",
      "space",
    ];
    let currentSection = "";

    // Find current section
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });

    if (e.key === "ArrowDown") {
      const currentIndex = sections.indexOf(currentSection);
      const nextSection = sections[(currentIndex + 1) % sections.length];
      document
        .getElementById(nextSection)
        .scrollIntoView({ behavior: "smooth" });
    } else if (e.key === "ArrowUp") {
      const currentIndex = sections.indexOf(currentSection);
      const prevSection =
        sections[currentIndex === 0 ? sections.length - 1 : currentIndex - 1];
      document
        .getElementById(prevSection)
        .scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Add performance monitoring
window.addEventListener("load", function () {
  // Log page load performance
  if ("performance" in window) {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
  }

  // Add loading animation completion
  document.body.classList.add("loaded");
});

// Add error handling
window.addEventListener("error", function (e) {
  console.error("JavaScript error:", e.error);
  showNotification("Something went wrong. Please refresh the page.", "error");
});

// Add offline detection
window.addEventListener("offline", function () {
  showNotification(
    "You are currently offline. Some features may not work.",
    "warning",
  );
});

window.addEventListener("online", function () {
  showNotification("You are back online!", "success");
});
