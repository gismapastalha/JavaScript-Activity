//ejercicio 1 : bucle
//activar listener en el button iterrar
document.querySelector('#iterar').onclick = iterar
function iterar(){
    //recuperar el valor informado
    let valor = document.querySelector('#iteracion').value 
    let cont = 0
    let numeros = ''
    //bucle para mostrar los numeros de 0 al numero introducido
    for(c =0; c <= valor; c= c + 3){
        numeros += c + '<br>'
        cont++ //maximo de valores a mostrar
        if (cont == 15){ break }
    }
    document.querySelector('#resultado').innerHTML = numeros
}
//ejercicio 2: 
//activar listener
document.querySelector('#fuente').onchange = cambiarFuente

function cambiarFuente(){
    ////recuperar el valor informado
    let fuente = document.querySelector('#fuente').value
    //alert(fuente)
    //cambiar la propiedad css 
    document.querySelector('#titulo').style.fontSize = fuente
}
//ejercicio 3 
let cajas =  document.querySelectorAll('#a3 div')
for (i in cajas) {
    cajas[i].onclick = mostrarContenido
}
function mostrarContenido(){
    alert(this.innerText)
}
//EJERCICIO 3: MOSTRAR CONTENIDO DE CAJAS
