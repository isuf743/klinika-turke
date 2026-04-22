// ═══════════════════════════════
// SHARED NAV — nav.js
// ═══════════════════════════════

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham  = document.getElementById('hamburger');
  if(!menu || !ham) return;
  menu.classList.toggle('open');
  ham.classList.toggle('open');
}

// Close on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobile-menu');
  const ham  = document.getElementById('hamburger');
  if(!menu || !ham) return;
  if(menu.classList.contains('open') && !menu.contains(e.target) && !ham.contains(e.target)){
    menu.classList.remove('open');
    ham.classList.remove('open');
  }
});

// Close on Escape
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    const menu = document.getElementById('mobile-menu');
    const ham  = document.getElementById('hamburger');
    if(menu) menu.classList.remove('open');
    if(ham)  ham.classList.remove('open');
  }
});

// Mark active nav link based on current page
document.addEventListener('DOMContentLoaded', function(){
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if(href && href.split('#')[0] === page){
      a.classList.add('active');
    }
  });
});