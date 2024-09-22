// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('exampleInputEmail1').value;
        const message = document.getElementById('message').value;
        
        // Validación básica
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Simulación de envío de formulario
        console.log('Formulario enviado:', { name, email, message });
        
        alert(`Gracias, ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto en ${email}.`);
        
        contactForm.reset();
    });
});

function initMap() {
    const location = { lat: -2.2332, lng: -80.9113 }; // Coordenadas de La Libertad, Ecuador

    const mapOptions = {
        zoom: 15,
        center: location
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Artesanal'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: '<h3>Artesanal</h3><p>Tu tienda de artesanías en La Libertad</p>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}