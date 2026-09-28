const toggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

setTheme(savedTheme || (systemDark.matches ? 'dark' : 'light'));
toggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  setTheme(theme);
});
systemDark.addEventListener('change', event => {
  if (!localStorage.getItem('theme')) setTheme(event.matches ? 'dark' : 'light');
});
