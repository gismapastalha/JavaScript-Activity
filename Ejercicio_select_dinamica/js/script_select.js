//1.- Crear un array con cuatro o cinco nombres de imagenes
var arrayImagenes = ['nature1.jpg', 'nature2.jpg', 'nature3.jpg', 'nature4.jpg', 'nature5.jpg', 'nature6.jpg']

//2.- Al cargar la página recorrer el array y construir tantas etiquetas <option> como elementos tenga el array
var options = '' //aqui guardaremos las etiquetas <option>

for (i in arrayImagenes) {
    //añadir una etiqueta option por cada elemento del array
    options += '<option>' + arrayImagenes[i] + '</option>'
}

//3.- Añadir las etiquetas a la combo del documento utilizando innerHTML
document.querySelector('#imagenes').innerHTML += options

/*
4.- Activar un evento onchange para la etiqueta select de forma que se ejecute una función que muestre en la caja con id 'imagen' la imagen seleccionada
    4.1 podemos construir la etiqueta img e inyectarla con innerHTML
    4.2 o bien cambiar el atributo src de una etiqueta img que ya tenemos confeccionada en la caja imagen

*/
function mostrarImagen() {
    //recuperar el nombre de la imagen de la combo
    var imagen = document.querySelector('#imagenes').value 

    //confeccionar una etiqueta img con la imagen seleccionada (innerHTML) o añadir el atributo src a una etiqueta img (setAttribute)
    document.querySelector('#imagen img').setAttribute('src', 'img/' + imagen)
}