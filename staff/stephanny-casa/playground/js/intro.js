/*
- Tenemos un array con nombres de personas 
- Tenemos que imprimir el nombre de cada persona en la consola (uno debajo de otro)
*/

var alumnos = []

alumnos[0] = {nombre: 'Juan', edad: 34}
alumnos[1] = {nombre: 'Laura', edad: 30}
alumnos[2] = {nombre: 'Albert', edad: 36}
alumnos[3] = {nombre:'Jodlin', edad: 45}
alumnos[4] = {nombre: 'Paula', edad: 32}
alumnos[5] = {nombre:'Manuel', edad: 15}
alumnos[6] = {nombre:'Jorge', edad: 32}
alumnos[7] = {nombre:'Sergio', edad:30}
alumnos[8] = {nombre:'Rodolfo', edad: 36}
alumnos[9] = {nombre:'Stephanny', edad: 27}
alumnos[10] = {nombre:'Agustin', edad: 23}
alumnos[11] = {nombre:'Patricia', edad: 23}
alumnos[12] = {nombre: 'Ibra', edad: 18}

var suma = 0

for ( var i = alumnos.length-1; i >= 0; i-- ) {
    console.log( 'Nombre: ' + alumnos[i].nombre.toLowerCase() + ' Edad: ' + '('+ alumnos[i].edad + ')' )
    suma += alumnos[i].edad
}

console.log(suma)

console.log('The end')