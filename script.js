document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling when clicking on the navigation links
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for the fixed header
              behavior: 'smooth'
          });
      });
  });
});
