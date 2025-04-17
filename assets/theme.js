// Contador regresivo
document.addEventListener('DOMContentLoaded', function() {
    // Configurar contador regresivo (24 horas)
    const setCountdown = function() {
      const countDownDate = new Date();
      countDownDate.setHours(countDownDate.getHours() + 24);
      
      const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Actualizar elementos si existen
        if (document.getElementById("hours")) {
          document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        }
        if (document.getElementById("minutes")) {
          document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        }
        if (document.getElementById("seconds")) {
          document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        }
        
        if (distance < 0) {
          clearInterval(x);
          if (document.getElementById("hours")) document.getElementById("hours").innerHTML = "00";
          if (document.getElementById("minutes")) document.getElementById("minutes").innerHTML = "00";
          if (document.getElementById("seconds")) document.getElementById("seconds").innerHTML = "00";
        }
      }, 1000);
    };
  
    // Iniciar contador si existe en la página
    if (document.querySelector('.countdown-timer')) {
      setCountdown();
    }
  
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Animación en scroll
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.section-title, .testimonio-card, .beneficio-item');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animate');
        }
      });
    };
    
    // Añadir clase para animaciones en CSS
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar
  });