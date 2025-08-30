// Simple Development - Interactive Features

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all interactive features
  initSmoothScrolling();
  initPrincipleCards();
  initNewsletterForm();
  initScrollAnimations();
  initToolCards();
  initExampleCards();
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

// Interactive principle cards
function initPrincipleCards() {
  const principleCards = document.querySelectorAll(".principle-card");

  principleCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    // Add click interaction
    card.addEventListener("click", function () {
      const principle = this.querySelector("h3").textContent;
      showPrincipleDetails(principle);
    });
  });
}

// Show principle details in a modal-like way
function showPrincipleDetails(principle) {
  const details = {
    "Start Simple": {
      description:
        "Begin with the most obvious, straightforward solution. Don't over-engineer from the start.",
      examples: [
        "Use built-in language features instead of external libraries",
        "Avoid premature optimization",
        "Focus on functionality before performance",
        "Write clear, readable code over clever code",
      ],
      quote: '"Make it work, make it right, make it fast." - Kent Beck',
    },
    "Iterate Gradually": {
      description:
        "Build incrementally, adding complexity only when the simple solution proves insufficient.",
      examples: [
        "Start with a working prototype",
        "Add features one at a time",
        "Refactor when needed, not preemptively",
        "Learn from real usage patterns",
      ],
      quote: '"The best is the enemy of the good." - Voltaire',
    },
    "Break It Down": {
      description:
        "Complex problems become manageable when broken into smaller, simpler pieces.",
      examples: [
        "Identify the core problem",
        "Split into sub-problems",
        "Solve each piece simply",
        "Combine solutions gradually",
      ],
      quote: '"Divide and conquer." - Ancient wisdom',
    },
    "Validate Early": {
      description:
        "Test your simple solution early to ensure it actually solves the real problem.",
      examples: [
        "Get feedback from users",
        "Test with real data",
        "Measure actual outcomes",
        "Iterate based on results",
      ],
      quote: '"The sooner you start testing, the sooner you start learning."',
    },
  };

  const detail = details[principle];
  if (detail) {
    showModal(principle, detail);
  }
}

// Show modal with principle details
function showModal(title, content) {
  // Remove existing modal if any
  const existingModal = document.querySelector(".principle-modal");
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");
  modal.className = "principle-modal";
  modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p class="modal-description">${content.description}</p>
                <div class="modal-examples">
                    <h4>Examples:</h4>
                    <ul>
                        ${content.examples.map((example) => `<li>${example}</li>`).join("")}
                    </ul>
                </div>
                <blockquote class="modal-quote">${content.quote}</blockquote>
            </div>
        </div>
    `;

  // Add modal styles
  const style = document.createElement("style");
  style.textContent = `
        .principle-modal {
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
            backdrop-filter: blur(4px);
        }
        
        .modal-content {
            background: white;
            border-radius: 1rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            z-index: 10001;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #1e293b;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
            padding: 0;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.5rem;
        }
        
        .modal-close:hover {
            background: #f1f5f9;
            color: #1e293b;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-description {
            color: #64748b;
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
        }
        
        .modal-examples h4 {
            color: #1e293b;
            margin-bottom: 1rem;
        }
        
        .modal-examples ul {
            list-style: none;
            margin-bottom: 1.5rem;
        }
        
        .modal-examples li {
            color: #475569;
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }
        
        .modal-examples li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #3b82f6;
            font-weight: bold;
        }
        
        .modal-quote {
            background: #f8fafc;
            border-left: 4px solid #3b82f6;
            padding: 1rem;
            margin: 0;
            font-style: italic;
            color: #475569;
        }
    `;

  document.head.appendChild(style);
  document.body.appendChild(modal);

  // Close modal functionality
  const closeBtn = modal.querySelector(".modal-close");
  const overlay = modal.querySelector(".modal-overlay");

  closeBtn.addEventListener("click", () => modal.remove());
  overlay.addEventListener("click", () => modal.remove());

  // Close on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.remove();
    }
  });
}

// Interactive tool cards
function initToolCards() {
  const toolCards = document.querySelectorAll(".tool-card");

  toolCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)";
      this.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    });
  });
}

// Interactive example cards
function initExampleCards() {
  const exampleCards = document.querySelectorAll(".example-card");

  exampleCards.forEach((card) => {
    const difficulty = card.querySelector(".example-difficulty");
    const content = card.querySelector(".example-content");

    // Add difficulty-based styling
    if (difficulty.textContent === "Easy") {
      difficulty.style.background = "#dcfce7";
      difficulty.style.color = "#166534";
    } else if (difficulty.textContent === "Medium") {
      difficulty.style.background = "#fef3c7";
      difficulty.style.color = "#92400e";
    } else if (difficulty.textContent === "Hard") {
      difficulty.style.background = "#fee2e2";
      difficulty.style.color = "#991b1b";
    }

    // Add click to expand functionality
    card.addEventListener("click", function () {
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    });
  });
}

// Newsletter form functionality
function initNewsletterForm() {
  const form = document.querySelector(".newsletter-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;

      if (email) {
        // Show success message
        showNotification(
          "Thanks for subscribing! We'll keep you updated on simple development principles.",
          "success",
        );

        // Clear form
        this.reset();

        // In a real app, you'd send this to your backend
        console.log("Newsletter signup:", email);
      }
    });
  }
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
            border-radius: 0.5rem;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
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
    `;

  document.head.appendChild(style);
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Hide and remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Community stats animation
function initCommunityStats() {
  const stats = document.querySelectorAll(".community-stat .stat-number");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  stats.forEach((stat) => observer.observe(stat));
}

// Animate number counting up
function animateNumber(element) {
  const target = parseInt(element.textContent);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  // Observe all cards and sections
  const elements = document.querySelectorAll(
    ".principle-card, .tool-card, .example-card",
  );
  elements.forEach((el) => observer.observe(el));

  // Add animation styles
  const style = document.createElement("style");
  style.textContent = `
        .principle-card,
        .tool-card,
        .example-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .principle-card.animate-in,
        .tool-card.animate-in,
        .example-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .principle-card:nth-child(1) { transition-delay: 0.1s; }
        .principle-card:nth-child(2) { transition-delay: 0.2s; }
        .principle-card:nth-child(3) { transition-delay: 0.3s; }
        .principle-card:nth-child(4) { transition-delay: 0.4s; }
        
        .tool-card:nth-child(1) { transition-delay: 0.1s; }
        .tool-card:nth-child(2) { transition-delay: 0.2s; }
        .tool-card:nth-child(3) { transition-delay: 0.3s; }
        .tool-card:nth-child(4) { transition-delay: 0.4s; }
        
        .example-card:nth-child(1) { transition-delay: 0.1s; }
        .example-card:nth-child(2) { transition-delay: 0.2s; }
        .example-card:nth-child(3) { transition-delay: 0.3s; }
    `;

  document.head.appendChild(style);
}

// Add some fun interactive elements
function addFunElements() {
  // Add a simple easter egg
  let clickCount = 0;
  const logo = document.querySelector(".logo h1");

  if (logo) {
    logo.addEventListener("click", function () {
      clickCount++;
      if (clickCount === 5) {
        this.textContent = "🎉 Simple Dev! 🎉";
        setTimeout(() => {
          this.textContent = "🚀 Simple Dev";
          clickCount = 0;
        }, 2000);
      }
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
}

// Initialize fun elements
setTimeout(addFunElements, 1000);

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  // Navigate sections with arrow keys
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    const sections = ["principles", "tools", "examples", "community"];
    const currentSection = getCurrentSection();

    let nextIndex;
    if (e.key === "ArrowDown") {
      nextIndex = (sections.indexOf(currentSection) + 1) % sections.length;
    } else {
      nextIndex =
        (sections.indexOf(currentSection) - 1 + sections.length) %
        sections.length;
    }

    const nextSection = document.getElementById(sections[nextIndex]);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Get current visible section
function getCurrentSection() {
  const sections = ["principles", "tools", "examples", "community"];
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        return sectionId;
      }
    }
  }

  return "principles";
}

// Add performance monitoring
function addPerformanceMonitoring() {
  // Monitor page load performance
  window.addEventListener("load", function () {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Simple Development app loaded in ${loadTime}ms`);

    // Show performance badge if load time is good
    if (loadTime < 2000) {
      showNotification("⚡ Fast loading! Simple is better.", "success");
    }
  });
}

// Initialize performance monitoring
addPerformanceMonitoring();
