// AI Coding Tools Hub - Interactive Features

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all interactive features
  initSmoothScrolling();
  initToolCards();
  initNewsletterForm();
  initScrollAnimations();
  initSearchFunctionality();
  initToolComparison();
  initTrendingUpdates();
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

// Interactive tool cards with hover effects
function initToolCards() {
  const toolCards = document.querySelectorAll(".tool-card");

  toolCards.forEach((card) => {
    // Add click event to make entire card clickable
    card.addEventListener("click", function (e) {
      // Don't trigger if clicking on the link itself
      if (!e.target.classList.contains("tool-link")) {
        const link = this.querySelector(".tool-link");
        if (link) {
          link.click();
        }
      }
    });

    // Add loading state simulation
    card.addEventListener("mouseenter", function () {
      this.style.cursor = "pointer";
    });

    // Add rating animation
    const rating = card.querySelector(".rating");
    if (rating) {
      rating.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.2s ease";
      });

      rating.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    }
  });
}

// Newsletter subscription form
function initNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (validateEmail(email)) {
        // Simulate subscription success
        showNotification(
          "🎉 Successfully subscribed! You'll receive updates about AI coding tools.",
          "success",
        );
        emailInput.value = "";

        // Add to localStorage to remember subscription
        localStorage.setItem("aiCodingToolsNewsletter", email);
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

// Show notification messages
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
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;

  // Add animation keyframes
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
            opacity: 0.8;
        }
    `;

  document.head.appendChild(style);
  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.remove();
  });
}

// Scroll animations for elements
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

  // Observe all cards and sections
  const animatedElements = document.querySelectorAll(
    ".tool-card, .trend-card, .resource-card, .section-title",
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Search functionality for tools
function initSearchFunctionality() {
  // Create search bar
  const toolsSection = document.querySelector("#tools");
  if (toolsSection) {
    const searchContainer = document.createElement("div");
    searchContainer.className = "search-container";
    searchContainer.innerHTML = `
            <div class="search-wrapper">
                <input type="text" id="toolSearch" placeholder="Search AI coding tools..." class="search-input">
                <div class="search-icon">🔍</div>
            </div>
        `;

    // Insert search before tools grid
    const toolsGrid = toolsSection.querySelector(".tools-grid");
    toolsSection
      .querySelector(".container")
      .insertBefore(searchContainer, toolsGrid);

    // Add search styles
    const searchStyles = document.createElement("style");
    searchStyles.textContent = `
            .search-container {
                margin-bottom: 2rem;
                text-align: center;
            }
            
            .search-wrapper {
                position: relative;
                max-width: 400px;
                margin: 0 auto;
            }
            
            .search-input {
                width: 100%;
                padding: 1rem 3rem 1rem 1rem;
                border: 2px solid #e5e7eb;
                border-radius: 25px;
                font-size: 1rem;
                transition: border-color 0.3s ease, box-shadow 0.3s ease;
            }
            
            .search-input:focus {
                outline: none;
                border-color: #3b82f6;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }
            
            .search-icon {
                position: absolute;
                right: 1rem;
                top: 50%;
                transform: translateY(-50%);
                color: #6b7280;
                pointer-events: none;
            }
        `;
    document.head.appendChild(searchStyles);

    // Add search functionality
    const searchInput = document.getElementById("toolSearch");
    const toolCards = document.querySelectorAll(".tool-card");

    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase().trim();

      toolCards.forEach((card) => {
        const toolName = card.querySelector("h3").textContent.toLowerCase();
        const toolDescription = card
          .querySelector(".tool-description")
          .textContent.toLowerCase();
        const toolFeatures = Array.from(card.querySelectorAll(".feature"))
          .map((feature) => feature.textContent.toLowerCase())
          .join(" ");

        const matches =
          toolName.includes(searchTerm) ||
          toolDescription.includes(searchTerm) ||
          toolFeatures.includes(searchTerm);

        if (matches || searchTerm === "") {
          card.style.display = "block";
          card.style.animation = "fadeInUp 0.3s ease-out";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
}

// Interactive tool comparison
function initToolComparison() {
  const comparisonTable = document.querySelector(".comparison-table");
  if (comparisonTable) {
    const table = comparisonTable.querySelector("table");

    // Make table rows interactive
    const tableRows = table.querySelectorAll("tbody tr");

    tableRows.forEach((row) => {
      row.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "#f8fafc";
        this.style.transition = "background-color 0.2s ease";
      });

      row.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
      });

      // Add click to highlight feature
      row.addEventListener("click", function () {
        // Remove previous highlights
        tableRows.forEach((r) => r.classList.remove("highlighted"));
        // Add highlight to current row
        this.classList.add("highlighted");
      });
    });

    // Add highlight styles
    const highlightStyles = document.createElement("style");
    highlightStyles.textContent = `
            .comparison-table tbody tr.highlighted {
                background-color: #dbeafe !important;
                border-left: 4px solid #3b82f6;
            }
            
            .comparison-table tbody tr {
                cursor: pointer;
                transition: background-color 0.2s ease;
            }
        `;
    document.head.appendChild(highlightStyles);
  }
}

// Trending updates simulation
function initTrendingUpdates() {
  const trendingSection = document.querySelector("#trends");
  if (trendingSection) {
    // Add "Last updated" timestamp
    const lastUpdated = document.createElement("div");
    lastUpdated.className = "last-updated";
    lastUpdated.innerHTML = `
            <p style="text-align: center; color: #6b7280; margin-bottom: 2rem;">
                🔄 Last updated: ${new Date().toLocaleString()}
            </p>
        `;

    const trendsGrid = trendingSection.querySelector(".trends-grid");
    trendingSection
      .querySelector(".container")
      .insertBefore(lastUpdated, trendsGrid);

    // Simulate real-time updates
    setInterval(() => {
      const now = new Date();
      lastUpdated.innerHTML = `
                <p style="text-align: center; color: #6b7280; margin-bottom: 2rem;">
                    🔄 Last updated: ${now.toLocaleString()}
                </p>
            `;
    }, 60000); // Update every minute
  }
}

// Add keyboard navigation support
document.addEventListener("keydown", function (e) {
  // Escape key to close notifications
  if (e.key === "Escape") {
    const notification = document.querySelector(".notification");
    if (notification) {
      notification.remove();
    }
  }

  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    const searchInput = document.getElementById("toolSearch");
    if (searchInput) {
      searchInput.focus();
    }
  }
});

// Add tool rating interaction
function initToolRatings() {
  const ratingElements = document.querySelectorAll(".stars");

  ratingElements.forEach((rating) => {
    rating.addEventListener("click", function () {
      const currentRating = this.textContent;
      const toolName =
        this.closest(".tool-card").querySelector("h3").textContent;

      showNotification(
        `Thanks for rating ${toolName}! Current rating: ${currentRating}`,
        "success",
      );
    });

    // Add hover effect to show rating on hover
    rating.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.2s ease";
    });

    rating.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
}

// Initialize tool ratings
document.addEventListener("DOMContentLoaded", function () {
  initToolRatings();
});

// Add loading states for external links
function addLoadingStates() {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Add loading indicator
      const originalText = this.textContent;
      this.textContent = "Loading...";
      this.style.opacity = "0.7";

      // Reset after a short delay (simulating page load)
      setTimeout(() => {
        this.textContent = originalText;
        this.style.opacity = "1";
      }, 2000);
    });
  });
}

// Initialize loading states
document.addEventListener("DOMContentLoaded", function () {
  addLoadingStates();
});

// Performance optimization: Lazy load images
function initLazyLoading() {
  const images = document.querySelectorAll('img[src*="placeholder"]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Simulate loading real images
        img.style.filter = "blur(0)";
        img.style.transition = "filter 0.3s ease";
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    img.style.filter = "blur(2px)";
    imageObserver.observe(img);
  });
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", function () {
  initLazyLoading();
});

// Add tool comparison export functionality
function initExportFeature() {
  const comparisonSection = document.querySelector("#comparison");
  if (comparisonSection) {
    const exportButton = document.createElement("button");
    exportButton.className = "export-button";
    exportButton.textContent = "📊 Export Comparison";
    exportButton.style.cssText = `
            display: block;
            margin: 2rem auto;
            padding: 0.75rem 1.5rem;
            background: #10b981;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
        `;

    exportButton.addEventListener("mouseenter", function () {
      this.style.background = "#059669";
    });

    exportButton.addEventListener("mouseleave", function () {
      this.style.background = "#10b981";
    });

    exportButton.addEventListener("click", function () {
      exportComparisonData();
    });

    const container = comparisonSection.querySelector(".container");
    container.appendChild(exportButton);
  }
}

// Export comparison data as JSON
function exportComparisonData() {
  const table = document.querySelector(".comparison-table table");
  const rows = table.querySelectorAll("tbody tr");
  const data = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length >= 6) {
      data.push({
        tool: cells[0].textContent.trim(),
        type: cells[1].textContent.trim(),
        freeTier: cells[2].textContent.trim(),
        proPrice: cells[3].textContent.trim(),
        languages: cells[4].textContent.trim(),
        rating: cells[5].textContent.trim(),
      });
    }
  });

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ai-coding-tools-comparison.json";
  a.click();
  URL.revokeObjectURL(url);

  showNotification("📊 Comparison data exported successfully!", "success");
}

// Initialize export feature
document.addEventListener("DOMContentLoaded", function () {
  initExportFeature();
});

// Add dark mode toggle (bonus feature)
function initDarkMode() {
  const darkModeToggle = document.createElement("button");
  darkModeToggle.className = "dark-mode-toggle";
  darkModeToggle.innerHTML = "🌙";
  darkModeToggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #1f2937;
        color: white;
        border: none;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    `;

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.innerHTML = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";

    // Save preference
    localStorage.setItem(
      "aiCodingToolsDarkMode",
      document.body.classList.contains("dark-mode"),
    );
  });

  // Add dark mode styles
  const darkModeStyles = document.createElement("style");
  darkModeStyles.textContent = `
        .dark-mode {
            background-color: #111827 !important;
            color: #f9fafb !important;
        }
        
        .dark-mode .tool-card,
        .dark-mode .trend-card,
        .resource-card {
            background-color: #1f2937 !important;
            border-color: #374151 !important;
            color: #f9fafb !important;
        }
        
        .dark-mode .section-title {
            color: #f9fafb !important;
        }
        
        .dark-mode .comparison-table {
            background-color: #1f2937 !important;
        }
        
        .dark-mode th {
            background-color: #374151 !important;
            color: #f9fafb !important;
        }
        
        .dark-mode td {
            color: #d1d5db !important;
        }
        
        .dark-mode td strong {
            color: #f9fafb !important;
        }
    `;

  document.head.appendChild(darkModeStyles);
  document.body.appendChild(darkModeToggle);

  // Check for saved preference
  if (localStorage.getItem("aiCodingToolsDarkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "☀️";
  }
}

// Initialize dark mode
document.addEventListener("DOMContentLoaded", function () {
  initDarkMode();
});
