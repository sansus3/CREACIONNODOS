/**
 * document.querySelector() --> Selección de nodos de tipo object HTMLElement
 * document.createElement() --> creación de nodos de tipo object HTMLElement
 * document.createTextNode() --> creación de nodos de tipo object node text
 * element.className = 'nombre-clase' // element.setAttribute('class', 'nombre-clase') --> poner nombre clase de un atributo // element.classList.add('nombre-clase)
 */




//Vamos a evitar que los formularios puedan ser enviados. Una opción es cogerlos a los dos
const formularios = document.querySelectorAll("form");
//A continuación los pasamos por un bucle y capturamos el evento submit
formularios.forEach(
    form => {
        console.log(form)
        form.onsubmit = e => {
            e.preventDefault();
        }
    }
);