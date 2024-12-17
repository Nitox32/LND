document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button'); // Crear el botón
    toggleButton.id = 'cambiar_tema_boton'; // Asignar un ID único al botón
    
    // Crear el elemento de imagen
    const img = document.createElement('img');
    img.src = '../img/enlace1/bombilla.png'; // Ruta de la imagen
    img.alt = 'Toggle Theme'; // Texto alternativo para la imagen
    img.width = 30; // Ancho de la imagen
    img.height = 30; // Alto de la imagen

    // Añadir la imagen al botón
    toggleButton.appendChild(img);
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        // Cambio de tema al hacer click
        if (document.body.classList.contains('tema-oscuro')) { // Si el tema es oscuro
            document.body.classList.remove('tema-oscuro'); // Remover la clase tema-oscuro
            document.body.classList.add('tema-claro'); // Agregar la clase tema-claro
        } else {
            document.body.classList.remove('tema-claro'); // Remover la clase tema-claro
            document.body.classList.add('tema-oscuro'); // Agregar la clase tema-oscuro
        }

        // Cambio de imagen al hacer click
        if (document.body.classList.contains('tema-oscuro')) { // Si el tema es oscuro
            img.src = '../img/enlace1/bombilla_apagada.png';
            img.alt = 'Cambiar tema';
        } else { // Si el tema es claro
            img.src = '../img/enlace1/bombilla.png';
            img.alt = 'Cambiar tema';
        }
    });

    // Estilos de los temas
    const style = document.createElement('style');
    style.innerHTML = 
    `
        /*Temas para el tema oscuro*/
        
        .tema-oscuro {
            background-color: #121212;
            color: #ffffff;
        }

        .tema-oscuro header, .tema-oscuro footer, .tema-oscuro nav {
            background-color: #333;
            color: #ffffff;
        }

        .tema-oscuro header h1{
            color: #ffffff;
        }

        .tema-oscuro nav a {
            color: #ffffff;
        }

        .tema-oscuro nav a:hover {
            background-color: #575757;
        }

        .tema-oscuro #izquierda, .tema-oscuro #derecha {
            background-color: #1e1e1e;
        }

        .tema-oscuro #cambiar_tema_boton {
            background-color: #3498db;
            color: #ffffff;
        }

        .tema-oscuro #cambiar_tema_boton:hover {
            background-color: #2980b9;
        }

        /*Temas para el tema claro*/

        .tema-claro {
            background-color: #ffffff;
            color: #000000;
        }

        .tema-claro header, .tema-claro footer {
            background-color: #2c3e50;
            color: #ffffff;
        }

        .tema-claro nav {
            background-color: #333;
            color: #ffffff;
        }

        .tema-claro nav a {
            color: #ffffff;
        }

        .tema-claro nav a:hover {
            background-color: #575757;
        }

        .tema-claro #izquierda, .tema-claro #derecha {
            background-color: #ecf0f1;
        }

        .tema-claro #cambiar_tema_boton {
            background-color: #3498db;
            color: #ffffff;
        }

        .tema-claro #cambiar_tema_boton:hover {
            background-color: #2980b9;
        }

        #cambiar_tema_boton {
            position: fixed;
            left: 10px;
            top: 10px;
            cursor: pointer;
        }
    `;

    // Agregar los estilos al head
    document.head.appendChild(style);

    // Tema inicial de la pagina
    document.body.classList.add('tema-claro');
});