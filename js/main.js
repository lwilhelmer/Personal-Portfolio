document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // --- Modal / Fullscreen project code ---
  const interactiveProjects = document.querySelectorAll('.project-item.interactive');
  const modal = document.getElementById('modal');
  const modalIframe = document.getElementById('modal-iframe');
  const closeBtn = modal.querySelector('.close');

  interactiveProjects.forEach(project => {
    project.addEventListener('click', () => {
      modalIframe.src = project.getAttribute('data-url');
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalIframe.src = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalIframe.src = '';
    }
  });
});


// Existing menu toggle code (keep this)
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // --- Modal / Fullscreen project code ---
  const interactiveProjects = document.querySelectorAll('.project-item.interactive');
  const modal = document.getElementById('modal');
  const modalIframe = document.getElementById('modal-iframe');
  const closeBtn = modal.querySelector('.close');

  interactiveProjects.forEach(project => {
    project.addEventListener('click', () => {
      modalIframe.src = project.getAttribute('data-url');
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalIframe.src = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalIframe.src = '';
    }
  });
});
