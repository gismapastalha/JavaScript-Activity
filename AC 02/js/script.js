//activar listener en el botón
document.querySelector('#boton').onclick = calcular

function calcular(){
    
    //constantes
    const PRECIO_DOMINIO = 10
    const PRECIO_1GB = 30
    const PRECIO_2GB = 50
    const PRECIO_4GB = 80
    const PRECIO_8GB = 140
    const PRECIO_16GB = 200
    const PRECIO_GES = 150
    const DESCUENTO = 0.1
    // variables
    let nombre = document.querySelector('#nombre').value.trim()
    let dominios = parseInt(document.querySelector('#dominios').value)
    let capacidad = document.querySelector('#hosting').value
    let gestor = document.querySelector('input[name=gestor]:checked').value
    let cupon = document.querySelector('#cupon').value
    let precio = document.querySelector('#resultado').value
    //alert(cupon.toLowerCase())
     //validamos nombre y DOMINIO obligatorios
    let errores = ''

    if (nombre == '') {
        errores += "Nombre y apellido obligatorio\n"
        document.querySelector('#nombre').classList.add('error')
    }

    if (isNaN(dominios) || dominios <= 0) {
        errores += "El numero de dominios es obligatoria\n"
        document.querySelector('#dominios').classList.add('error')
    }
    if (capacidad == '') {
        errores += "Eliga la capacidad de tu hosting\n"
        document.querySelector('#hosting').classList.add('error')
    }
    if (errores != '') {
        alert(errores)
        return
    }

    document.querySelector('#nombre').classList.remove('error')
    document.querySelector('#dominios').classList.remove('error')
    document.querySelector('#hosting').classList.remove('error')

    
    //los calculos y operaciones
    if(capacidad == "1Gb"){
        precio = dominios * PRECIO_DOMINIO + PRECIO_1GB
        //resu.innerText = resu
    }else
    if(capacidad == "2Gb"){
        precio = dominios * PRECIO_DOMINIO + PRECIO_2GB
    }else
    if(capacidad == "4Gb"){
        precio = dominios * PRECIO_DOMINIO + PRECIO_4GB
    }else
    if (capacidad == "8Gb"){
        precio = dominios * PRECIO_DOMINIO + PRECIO_8GB
    }else
    if (capacidad == "16Gb"){
        precio = dominios * PRECIO_DOMINIO + PRECIO_16GB
    }
    if(gestor == "si"){
        precio += PRECIO_GES
    }
    if(cupon.toLowerCase() == "desc"){
        precio -= precio * DESCUENTO
    }
    document.querySelector('#resultado').value = `${nombre} ha adquirido ${dominios} dominios, hosting ${capacidad}, ${gestor} con gestor de contenidos . Precio total ${precio}€`

    //alert(gestor)
    //alert('hola')
}


