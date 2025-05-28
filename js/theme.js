// Theme toggling functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme from localStorage or system preference
  initTheme();
  
  // Set up theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});

/**
 * Initialize theme based on user preference or system preference
 */
function initTheme() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    // Apply saved theme preference
    document.body.className = savedTheme;
  } else {
    // Check for system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.className = 'dark-mode';
    } else {
      document.body.className = 'light-mode';
    }
  }
  
  // Update theme toggle icon
  updateThemeToggleIcon();
  
  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        document.body.className = e.matches ? 'dark-mode' : 'light-mode';
        updateThemeToggleIcon();
      }
    });
  }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  if (document.body.classList.contains('light-mode')) {
    document.body.className = 'dark-mode';
    localStorage.setItem('theme', 'dark-mode');
  } else {
    document.body.className = 'light-mode';
    localStorage.setItem('theme', 'light-mode');
  }
  
  updateThemeToggleIcon();
  
  // Add a subtle animation effect
  animateThemeTransition();
}

/**
 * Update the theme toggle icon based on current theme
 */
function updateThemeToggleIcon() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  // Update aria-label for accessibility
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.setAttribute('aria-label', 'Switch to light theme');
  } else {
    themeToggle.setAttribute('aria-label', 'Switch to dark theme');
  }
}

/**
 * Add a subtle animation when the theme changes
 */
function animateThemeTransition() {
  // Create and append an overlay element
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#121212' : '#ffffff';
  overlay.style.zIndex = '9999';
  overlay.style.opacity = '0.3';
  overlay.style.pointerEvents = 'none';
  document.body.appendChild(overlay);
  
  // Fade out the overlay
  setTimeout(() => {
    overlay.style.transition = 'opacity 500ms ease';
    overlay.style.opacity = '0';
    
    // Remove overlay after animation completes
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 500);
  }, 10);
}

// Add CSS variables for theme colors
function updateColorVariables() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Update RGB variables for rgba usage
  document.documentElement.style.setProperty(
    '--background-rgb', 
    isDarkMode ? '18, 18, 18' : '255, 255, 255'
  );
}