// Переключатель темы: тёмный дух 🌙 / светлый дух ☀️
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  toggle.textContent = next === 'dark' ? '🌙' : '☀️';
});
