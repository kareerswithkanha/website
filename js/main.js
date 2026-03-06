// Nav scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Hamburger toggle
const ham = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
ham.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  ham.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const ro = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
