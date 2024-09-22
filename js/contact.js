// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ahora, solo mostraremos un alert
        alert(`Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto en ${email}.`);
        
        // Limpia el formulario
        contactForm.reset();
    });
});