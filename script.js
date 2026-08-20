const steps = document.querySelectorAll('.step');
const artElement = document.getElementById('scene-bg');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6 // Triggers when 60% of the step is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all steps, add to current
      steps.forEach(s => s.classList.remove('active'));
      entry.target.classList.add('active');

      // Change visual state based on data-scene attribute
      const scene = entry.target.getAttribute('data-scene');
      if (scene === '1') {
        artElement.style.transform = 'scale(1) rotate(0deg)';
        artElement.style.background = 'linear-gradient(135deg, #6366f1, #a855f7)';
      } else if (scene === '2') {
        artElement.style.transform = 'scale(1.3) rotate(45deg)';
        artElement.style.background = 'linear-gradient(135deg, #3b82f6, #06b6d4)';
        artElement.style.borderRadius = '50%';
      } else if (scene === '3') {
        artElement.style.transform = 'scale(1.1) rotate(90deg)';
        artElement.style.background = 'linear-gradient(135deg, #ec4899, #f43f5e)';
        artElement.style.borderRadius = '20px';
      }
    }
  });
}, observerOptions);

steps.forEach(step => observer.observe(step));