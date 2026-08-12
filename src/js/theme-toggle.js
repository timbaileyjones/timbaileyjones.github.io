(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleText = document.getElementById('theme-toggle-text');
  const html = document.documentElement;
  
  // Get saved theme or default to light
  const getTheme = () => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  };
  
  // Set theme
  const setTheme = (theme) => {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      themeToggleText.textContent = 'Light';
      localStorage.setItem('theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
      themeToggleText.textContent = 'Dark';
      localStorage.setItem('theme', 'light');
    }
  };
  
  // Initialize theme on page load
  const currentTheme = getTheme();
  setTheme(currentTheme);
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Hide our toggle if Dark Reader is active — it's already doing the job.
  // Dynamic mode sets data-darkreader-scheme; filter/static modes set only
  // data-darkreader-mode and inject #dark-reader-style (no scheme attribute).
  const isDarkReaderActive = () =>
    html.hasAttribute('data-darkreader-scheme') ||
    html.hasAttribute('data-darkreader-mode') ||
    document.querySelector('meta[name="darkreader"]') != null ||
    document.getElementById('dark-reader-style') != null;

  const checkDarkReader = () => {
    themeToggle.style.visibility = isDarkReaderActive() ? 'hidden' : '';
  };

  checkDarkReader();

  new MutationObserver(checkDarkReader).observe(html, {
    attributes: true,
    attributeFilter: ['data-darkreader-scheme', 'data-darkreader-mode']
  });

  if (document.head) {
    new MutationObserver(checkDarkReader).observe(document.head, {
      childList: true,
      subtree: true
    });
  }
})();

