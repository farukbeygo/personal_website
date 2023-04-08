const nightButton = document.getElementById('nightButton');
const body = document.body;
const navbar = document.querySelector('.navbar');
const isDark = localStorage.getItem('dark') === 'true';

// Set initial state of night mode
if (isDark) {
  body.classList.add('night-mode');
  navbar.classList.add('night-mode');
  nightButton.classList.add('active');
} else {
  body.classList.remove('night-mode');
  navbar.classList.remove('night-mode');
  nightButton.classList.remove('active');
}

// Add event listener for night mode button
nightButton.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  navbar.classList.toggle('night-mode');
  nightButton.classList.toggle('active');
  localStorage.setItem('dark', body.classList.contains('night-mode'));
});




