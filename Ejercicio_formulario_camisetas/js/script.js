//listeners formulario
document.querySelector('#color').onchange = cambiarImagen
document.querySelector('#enviar').onclick = procesaForm

function cambiarImagen() {
    let color = document.querySelector('#color').value
    
    document.querySelector('#camiseta').src='img/camiseta_'+color+'.png';
}

function procesaForm() {       
    //recuperamos info del formulario
    let nombre = document.querySelector('#nombre').value
    let direccion = document.querySelector('#direccion').value
    let cantidad = parseInt(document.querySelector('#cantidad').value)
    let talla = document.querySelector('[name=talla]:checked').value
    let color = document.querySelector('#color').value

    //validamos nombre y direccion obligatorios
    let errores = ''

    if (nombre == '') {
        errores += "Nombre obligatorio\n"
        document.querySelector('#nombre').classList.add('error')
    }

    if (direccion == '') {
        errores += "Dirección obligatoria\n"
        document.querySelector('#direccion').classList.add('error')
    }
    
    if (isNaN(cantidad) || cantidad == '' || cantidad  <= 0) {
        errores += "Cantidad obligatoria y mínimo 1"
        document.querySelector('#cantidad').classList.add('error')
    } 
    
    if (errores != '') {
        alert(errores)
        return
    }
   
    document.querySelector('#nombre').classList.remove('error')
    document.querySelector('#cantidad').classList.remove('error')
    document.querySelector('#cantidad').classList.remove('error')

    //calculamos precio
    if (color == 'blanca') {
        var precio = 10 * cantidad
    } else {
        var precio = 12 * cantidad
    }
    

    //montamos mensaje
    var resumen = nombre + ' ha comprado ' + cantidad + ' camisetas de color ' + color +' y talla ' + talla + '. Precio total: ' + precio + '. Dirección de envío: ' + direccion

    document.querySelector('#resumen').innerHTML = resumen
}