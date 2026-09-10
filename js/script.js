// 🌐 Scroll suave para navegación interna
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return; // Evita errores con enlaces vacíos "#"
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 🎬 Animación fade-in eficiente con IntersectionObserver
const elements = document.querySelectorAll(".fade-in");

if (elements.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Libera memoria al animar
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// 🚀 Interacción visual para botones principal de llamadas a la acción (.btn-neon / submit)
const contactForm = document.querySelector("#contact form");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    const submitBtn = this.querySelector("button[type='submit']");
    if (submitBtn) {
      submitBtn.innerText = "Sending... ⚡";
      submitBtn.disabled = true;
      
      // Simulación de envío antes de resetear
      setTimeout(() => {
        submitBtn.innerText = "Message Sent! 🚀";
        this.reset();
        setTimeout(() => {
          submitBtn.innerText = "Send Message ✉️";
          submitBtn.disabled = false;
        }, 2000);
      }, 1200);
    }
  });
}