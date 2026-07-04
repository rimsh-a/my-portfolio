// ==========================================================================
// Footer year
// ==========================================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ==========================================================================
// Mobile nav toggle
// ==========================================================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => nav.classList.toggle('is-open'));
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// ==========================================================================
// Scroll progress bar
// ==========================================================================
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
});

// ==========================================================================
// Scroll-reveal animations
// ==========================================================================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ==========================================================================
// Control-deck skill switches light up in sequence
// ==========================================================================
const switches = document.querySelectorAll('.deck__switch');
switches.forEach((sw, i) => {
  setTimeout(() => sw.classList.add('is-on'), 600 + i * 220);
});

// ==========================================================================
// Contact form (front-end only — replace with your own backend / Formspree)
// ==========================================================================
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  formNote.textContent = `Thanks${name ? ', ' + name : ''} — this form is a frontend demo. Connect it to Formspree, EmailJS, or your own backend to receive messages.`;
  form.reset();
});
