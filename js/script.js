const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterBox = entry.target;
        const count = counterBox.querySelector('.count');
        const target = +count.getAttribute('data-target');
        let current = 0;
        const increment = target / 100;
  
        const updateCount = () => {
          if (current < target) {
            current += increment;
            count.textContent = Math.ceil(current);
            setTimeout(updateCount, 20);
          } else {
            count.textContent = target;
          }
        };
  
        counterBox.classList.add('visible');
        updateCount();
        observer.unobserve(counterBox);
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll('.counter-box').forEach(box => {
    observer.observe(box);
  });

  // 1. On sélectionne toutes les lignes à animer
const items = document.querySelectorAll('.text-appear');

// 2. On crée l’observer
const voir = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');  // déclenche l’animation CSS
      obs.unobserve(entry.target);             // on n’anime qu’une fois
    }
  });
}, {
  threshold: 0.6  // dès que 60% du conteneur est visible
});

// 3. On observe chaque conteneur
items.forEach(item => voir.observe(item));



const illustrationBoxes = document.querySelectorAll('.illus-portfolio');

const illustrationObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

illustrationBoxes.forEach(box => {
  illustrationObserver.observe(box);
});



const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');

// Toggle le menu
btn.addEventListener('click', (e) => {
  menu.classList.toggle('open');
  e.stopPropagation(); // Empêche le clic de se propager au document
});

// Fermer le menu si clic ailleurs
document.addEventListener('click', (e) => {
  // Si le menu est ouvert et que le clic n'est pas dans le menu ni le bouton
  if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Effet scroll sur la navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});