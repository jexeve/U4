// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        

        alert(`Thank you, ${name}! Your message has been sent. We will contact you soon at ${email}.`);
        

        contactForm.reset();
    });
});


function initMap() {
    const location = { lat: -2.2332, lng: -80.9113 }; 

    // Opciones del mapa
    const mapOptions = {
        zoom: 15,
        center: location,
        // Aquí puedes agregar estilos personalizados si lo deseas
    };

    // Crear el mapa
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Añadir un marcador
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Our Location'
    });

    // Opcional: Añadir un InfoWindow
    const infoWindow = new google.maps.InfoWindow({
        content: '<h3>Our Company</h3><p>123 Company St, City, Country</p>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}