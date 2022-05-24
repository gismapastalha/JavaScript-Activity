function Calcular(){
    //alert('hola')
    //recuperar datos del formulario
    var num1 = document.querySelector('#operando1').value
    var oper = document.querySelector('#operacion').value
    var num2 = document.querySelector('#operando2').value
    var resu = document.querySelector('#resultado').value
    //validamos nombre y direccion obligatorios
    let errores = ''

    if (num1 == '') {
        errores += "Operando 01 obligatorio\n"
        document.querySelector('#operando1').classList.add('error')
    }

    if (num2 == '') {
        errores += "Operando 02  obligatoria\n"
        document.querySelector('#operando2').classList.add('error')
    }

    if ( oper == 'Operación') {
        errores += "Eliga una operacion"
        document.querySelector('#operacion').classList.add('error')
    } 

    if (errores != '') {
        alert(errores)
        return
    }

    document.querySelector('#operando1').classList.remove('error')
    document.querySelector('#operando2').classList.remove('error')
    document.querySelector('#operacion').classList.remove('error')

    //los calculos y operaciones
    if(oper == "+"){
        resu = parseFloat(num1) + parseFloat(num2)
        //resu.innerText = resu
    }else
    if(oper == "-"){
        resu = parseFloat(num1) - parseFloat(num2)
    }else
    if(oper == "*"){
        resu = parseFloat(num1) * parseFloat(num2)
    }else
    if (oper == "/"){
        resu = parseFloat(num1) / parseFloat(num2)
    }
    else{
        alert('Operación no')
    }
    document.querySelector('#resultado').innerText = resu
}