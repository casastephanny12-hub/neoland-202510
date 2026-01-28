/*
if (condicion){
    bloque de instrucciones
}
*/

/*
let edad = 15; //; no es obligatorio

if(edad >= 18){
    console.log('Eres mayor de edad')
}

console.log('fuera del if')

*/

// else se utiliza junto con el if

/*

if(condicion){
bloque de instrucciones
} else {
    bloque de instrucciones
    }

*/

/*
let edad = 16

if(edad >= 18){
    console.log('Eres mayor de edad')
} else {
    console.log('Eres menor de edad')
}

console.log('fuera del if')

*/

// else if multiples condiciones secuenciales

/*
let edad = 100

if(edad < 13){
    console.log('eres un niño')
} else if(edad < 20){
   console.log('eres un adolescente')
} else if (edad < 65 ){
    console.log('eres un adulto')
} else {
    console.log('eres un adulto mayor')
}

*/

// sentencia switch util para evaluar multiples casos dodne tenemos una sola variable, a diferencia el if, el switch evalua condiciones de igualdad estricta

/*
switch(expresión){

case valor1: 
bloque de instrucciones
break // para sacar del bloque de instucciones

case valor2: 
bloque de instrucciones
break 

case valor3: 
bloque de instrucciones
break 
}

default:  
     bloque de instrucciones  //equivale al else de if 
*/

/*

let dia = 3

switch (dia) //expresión
{
    case 1:  //casos de evaluacion
        console.log('lunes')
        break

    case 2:
        console.log('martes')
        break

    case 3:
        console.log('miercoles')
        break

    default: 
    console.log('no existe')
}
*/
/*
let color = 'green'

switch(color){

    case 'red':  //no necesariamente se pone case con un numero, puede ser también string
    console.log('red es rojo en ingles')
    break 

    case 'green': 
    console.log('green es verde en ingles')
    break  // sino ponemos el break, a partir que encuentra la condicion empieza a imrpimir

    default: 
    console.log('no existe')
}

*/

//Operador ternario : se utiliza para asignar un valor basado en una condicion

/*

(condicion) ? caminodelTrue : caminodelFalse

// si nuestra condicion se cumple ejecutara el bloque despues del ?, sino se cumple cumple el bloque detras de los :

*/

/*
let edad = 13;

let mensaje = (edad >= 18) ? 'eres mayor de edad' : 'eres menor de edad'

console.log(mensaje)

*/

// anidar operadores ternario

/*
let esCliente = false
let esAdulto = false

let mensaje = (esCliente == true) ? 'Debes pagar 10 euros' : (esAdulto == true) ? 'Envie su solicitud' : 'Debes de ser mayor de edad'

console.log(mensaje)

//si quieres evaluar con un valor true se puede omitir y solo poner (esCliente) sino le asignamos el valor variable igualmente lo captara 
*/

// operadores ternarios pueden ejecutar varios bloques segun la condicion que pongamos 

/*
let esCliente = true;
let mensaje;

(esCliente == true)
    ? (
        (mensaje = 'debe pagar 10 euros'),
        console.log(mensaje)
    )
    :( (mensaje = 'debe pagar 20 euros'),
    console.log(mensaje)
    )

*/


/*
let number = 0
let mensaje;

if (number > 0) {
    mensaje = 'numero positivo'
} else if (number < 0) {
    mensaje = 'numero negativo'
} else {
    mensaje = 'numero es cero'
}
console.log(mensaje)

*/


/*

let age = 21
let mensaje; 

if(age >= 18){
   mensaje = 'Puedes votar'
} else {
    mensaje = 'No puedes votar'
}

console.log(mensaje)

*/

/*
let number1 = 9
let number2 = 12
let mensaje; 

if(number1 > number2){
    mensaje = number1 + ' es mayor que ' + number2
} else if (number2 > number1){
    mensaje = `${number2} es mayor que ${number1}` //manera mas comoda llaves invertidas
} else{
    mensaje = 'ambos numeros son iguales'
}
console.log(mensaje)

*/


/*
let number = 15
let resultado = (number %5 === 0) ? 'Es divisible por 5' : 'No es divisible por 5'
console.log(resultado)
*/



let nota = -1
let calificacion;

if (nota <= 10 && nota >= 0) {
    if (nota >= 9) {
        calificacion = 'Excelente'
    } else if (nota >= 7 && nota < 9) {
        calificacion = 'Buena'
    } else if (nota >= 5 && nota < 7) {
        calificacion = 'Regular'
    } else {
        calificacion = 'insuficiente'
    }

} else {
    calificacion = 'nota no valida'
}


console.log(calificacion)








