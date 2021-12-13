/**
 * document.querySelector() --> Selección de nodos de tipo object HTMLElement
 * document.createElement() --> creación de nodos de tipo object HTMLElement
 * document.createTextNode() --> creación de nodos de tipo object node text
 * element.className = 'nombre-clase' // element.setAttribute('class', 'nombre-clase') --> poner nombre clase de un atributo // element.classList.add('nombre-clase)
 */

//document.querySelector() --> Selección de nodos de tipo object HTMLElement
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");

/**
 * @description Función que crea los nodos DOM para escribir un párrafo
 */
const reproducirParrafo = () => {
    const output = document.querySelector(".parrafo"); //seleccionamos el punto de anclaje en el DOM real
    //Creación de nodos
    const p = document.createElement("p");
    const nodeText = document.createTextNode("Vamos a crear nodos. Para ello utilizaremos el método ");
    const strong = document.createElement("strong");
    const nodeText2 = document.createTextNode("document.createElement()");
    //Añadimos atributos
    p.setAttribute("class","mi-parrafo");
    //Añadimos hijos
    p.appendChild(nodeText);
    strong.appendChild(nodeText2);
    p.appendChild(strong);
    //Añadimos nodos del DOM virtual al DOM real
    output.appendChild(p);    
}

form1.onsubmit = e => {
    e.preventDefault();
    reproducirParrafo();
}





//Listar
const creacionLista = () => {
    const datos = [
        {
            titulo: 'HTML 5',
            titulo2: [
                'Formularios',
                'Enlaces',
                'Imágenes'
            ]
        },
        {
            titulo: 'JavaScript',
            titulo2: [
                'let/const/var',
                'Arrays',
                'Nodos'
            ]
        },
        {
            titulo: 'Accesibilidad',
            titulo2: [
                'Formularios'
            ]
        }
        
    ]
    const ul = document.createElement("ul");
    ul.classList.add("mi-lista");
    datos.forEach(lista => {
        const li = document.createElement("li");
        const nodeText = document.createTextNode(lista.titulo);
        li.appendChild(nodeText);  //Añadimos el texto      
        const ul2 = document.createElement("ul"); //Hay que añadir un ul
        lista.titulo2.forEach(text => {
            const li2 = document.createElement("li");
            const nodeText2 = document.createTextNode(text);
            li2.appendChild(nodeText2);
            ul2.appendChild(li2)
        });
        li.appendChild(ul2);
        ul.appendChild(li);

    });

    return ul;
}
form2.onsubmit = e => {
    e.preventDefault();
    document.querySelector(".lista").appendChild(creacionLista());
}