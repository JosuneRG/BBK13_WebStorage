// Guarda valores en localStorage
localStorage.setItem('name', 'Leire');
localStorage.setItem('age', 20);

// Recupera valores de localStorage
const userName = localStorage.getItem('name');
const userAge = localStorage.getItem('age');

// Muestra valores en la consola
console.log('name:', userName, 'age:', userAge);

//Borra el nombre
// localStorage.removeItem('name')

//Borra todo
// localStorage.clear()

// for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key}: ${localStorage.getItem(key)}`);
//     }

//JSON.stringify() ---> para convertir en Json 
//JSON.parse() ---> parse para usar en javascript

// Manejo del formulario
const btnSubmit = document.getElementById('btnSubmit');
const textInput = document.getElementById('textInput');

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault(); // Evita recargar la página
    console.log('Pasan cosas', textInput.value);
    localStorage.setItem('userName', textInput.value);
});

//Añadir elementos nuevos al html
let p = document.createElement('p');
p.innerText('Buneos dias');

function pintaTexto(){
    const userName =  localStorage.setItem('userName');
    const paragraph =  localStorage.setItem('userName');
}
