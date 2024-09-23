document.addEventListener('DOMContentLoaded', function() {  
    const productos = [  
        { id: 1, nombre: "Jarrón de cerámica", descripcion: "Hermoso jarrón hecho a mano con técnicas tradicionales.", precio: 49.99, imagen: "images/jarron.jpg" },  
        { id: 2, nombre: "Bufanda tejida", descripcion: "Bufanda suave y cálida tejida con lana de alpaca.", precio: 34.99, imagen: "images/bufanda.jpg" },  
        { id: 3, nombre: "Pendientes de plata", descripcion: "Elegantes pendientes de plata con diseño único.", precio: 79.99, imagen: "images/pendientes.jpg" },  
        { id: 4, nombre: "Cesto de mimbre", descripcion: "Cesto decorativo y funcional hecho a mano con mimbre.", precio: 29.99, imagen: "images/cesto.jpg" },  
        { id: 5, nombre: "Cuadro pintado a mano", descripcion: "Obra de arte original pintada al óleo sobre lienzo.", precio: 149.99, imagen: "images/cuadro.jpg" },  
        { id: 6, nombre: "Jabón artesanal", descripcion: "Jabón natural hecho con ingredientes orgánicos.", precio: 9.99, imagen: "images/jabon.jpg" }  
    ];  

    const productosContainer = document.getElementById('productos-container');  

    productos.forEach(producto => {  
        const productoElement = document.createElement('div');  
        productoElement.className = 'col-md-4 mb-4'; // Añadir margen inferior para separarlos  
        productoElement.innerHTML = `  
            <div class="card product-card">  
                <img src="${producto.imagen}" class="card-img-top product-image" alt="${producto.nombre}">  
                <div class="card-body">  
                    <h5 class="card-title">${producto.nombre}</h5>  
                    <p class="card-text">${producto.descripcion}</p>  
                    <p class="card-text"><strong>$${producto.precio.toFixed(2)}</strong></p>  
                    <div class="btn-container">  
                        <button class="btn btn-cart" onclick="añadirAlCarrito('${producto.nombre}')">Añadir al carrito</button>  
                    </div>  
                </div>  
            </div>  
        `;  
        productosContainer.appendChild(productoElement);  
    });  
});  

// Función para añadir al carrito y mostrar el mensaje  
function añadirAlCarrito(nombreProducto) {  
    const mensajeCarrito = document.getElementById('mensaje-carrito');  
    mensajeCarrito.innerText = `Su producto "${nombreProducto}" fue añadido al carrito de compras.`;  
    mensajeCarrito.style.display = 'block'; // Mostrar el mensaje  
    setTimeout(() => {  
        mensajeCarrito.style.display = 'none'; // Ocultar el mensaje después de 3 segundos  
    }, 3000);  
}