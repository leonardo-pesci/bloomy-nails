const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.nail-divider').forEach(divider => {
    observer.observe(divider);
  });