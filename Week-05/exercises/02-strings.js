console.log("EXERCISE 2: STRINGS");

/*a)Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).*/
console.log("-Exercise 2.a: ");
var string="murcielago";
console.log(string.toUpperCase());

/*b)Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con los primeros 5 caracteres guardando el resultado 
en una nueva variable (utilizar substring).*/
console.log("-Exercise 2.b: ");
var str="Ornitorrinco";
var newStr=str.substring(0,5);
console.log(newStr);

/*c)Crear una variable de tipo string con al menos 10 caracteres y
 generar un nuevo string con los últimos 3 caracteres guardando 
 el resultado en una nueva variable (utilizar substring)*/
console.log("-Exercise 2.c: ");
var str="Ornitorrinco";
var newStr=str.substring(str.length-3,str.length);
console.log(newStr);

/*d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +) */
console.log("-Exercise 2.d: ");
 var str="javascript exercises";
 var newStr= str.substring(0,1).toUpperCase() + str.substring(1,str.length).toLowerCase();
console.log(newStr);

/*e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log("-Exercise 2.e: ");
var str="microsoft .net";
var spacePosition= str.indexOf(" ");
console.log(spacePosition);

/*f)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
 palabrasen mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
    operador +). */
console.log("-Exercise 2.f: ");
var str="javaScript typeScript";
var otherWordPosition=str.indexOf(" ");
var newStr1= str.substring(0,1).toUpperCase()
    +str.substring(1,otherWordPosition).toLowerCase()
    +str.substring(otherWordPosition,otherWordPosition+2).toUpperCase()
    +str.substring(otherWordPosition+2).toLowerCase();
console.log(newStr1);