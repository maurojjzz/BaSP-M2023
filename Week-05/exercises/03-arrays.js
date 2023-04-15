console.log("EXERCISE 3: ARRAYS");

/*a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11
 (utilizar console.log).*/
console.log("-Exercise 3.a: ");
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5: " + array[4] + " y Mes 11: " + array[10]);

/*b)Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log("-Exercise 3.b: ");
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array.sort());

/*c)Agregar un elemento al principio y al final del array (utilizar unshift y push)*/
console.log("-Exercise 3.c: ");
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.unshift("Python");
array.push("Java");
console.log(array);

/*d)Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log("-Exercise 3.d: ");
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.pop();
array.shift();
console.log(array);

/*e)Invertir el orden del array (utilizar reverse).*/
console.log("-Exercise 3.e: ");
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array.reverse());

/*f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión
 - (utilizar join)*/
console.log("-Exercise 3.f: ");
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var string=array.join("-");
console.log(string);

/*g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log("-Exercise 3.g: ");
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var sliceArray=array.slice(4,11);
console.log(sliceArray);


