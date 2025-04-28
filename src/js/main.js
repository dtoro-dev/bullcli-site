// Header scroll effect and dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('main-header');
  const scrollThreshold = 50;

  // Check for dark mode preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
  }

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Mobile menu toggle
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
});