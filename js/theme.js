const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('bv-theme', theme);
    const dark = theme === 'dark';
    if (themeBtn) {
        themeBtn.setAttribute('aria-pressed', String(dark));
        themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
        themeBtn.title = dark ? 'Light mode' : 'Dark mode';
    }
}

setTheme(localStorage.getItem('bv-theme') === 'dark' ? 'dark' : 'light');

themeBtn?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});
