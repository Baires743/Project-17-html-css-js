let input = document.querySelector('.input')
let botonAgregar = document.querySelector('.boton-agregar')
let contenedor = document.querySelector('.container')

class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea);
}

    crearDiv(nuevaTarea){
        let nuevoDiv = document.createElement('div');
        let inputItem = document.createElement('input')
        let botonEditar = document.createElement('button');
        let botonRemover = document.createElement('button');
        let agregarPage = input.value;

        if (agregarPage == '') {
        }else{
            inputItem.disabled = true;
            inputItem.value = nuevaTarea;
            inputItem.setAttribute('type','text');
            inputItem.classList.add('item-input')//puede ser item-input

            nuevoDiv.classList.add('item');
            botonEditar.innerHTML = '<i class="fa-solid fa-lock fa-lg"></i>';
            botonEditar.classList.add('boton-editar');

            botonRemover.innerHTML = '<i class="fa-solid fa-trash fa-lg"></i>';
            botonRemover.classList.add('boton-remover');
        
            contenedor.appendChild(nuevoDiv);
            nuevoDiv.appendChild(inputItem);
            nuevoDiv.appendChild(botonEditar);
            nuevoDiv.appendChild(botonRemover);
        }    
        
        botonEditar.addEventListener('click', function() {
            if (inputItem.disabled) {
                inputItem.disabled = false;
                botonEditar.innerHTML = '<i class="fa-solid fa-unlock fa-lg"></i>';
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = '<i class="fa-solid fa-lock fa-lg"></i>';
            }
        })    

        botonRemover.addEventListener('click', function() {
            nuevoDiv.remove();            
        })
    }
}

function chequearInput() {
    new Item(input.value)
    console.log(input.value);
    input.value = "";
}
botonAgregar.addEventListener('click',chequearInput)