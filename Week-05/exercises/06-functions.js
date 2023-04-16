console.log("EXERCISE 6: FUNCTIONS");

/*a)Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador*/
console.log("-Exercise 6.a: ");
function suma(nro1, nro2){
    return nro1+ nro2;
}
console.log(suma(2,6));

/*b)Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error
y retornar el valor NaN como resultado.*/
console.log("-Exercise 6.b: ");
function suma(nro1, nro2){
    if(typeof nro1 !== "number" || typeof nro2 !== "number"){
        alert("Un parametro ingresado no es un numero");
        return NaN;
    }else{
        return nro1+ nro2;
    }
}
console.log(suma(2,"not a number"));

/*c)Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero 
si es un número entero.*/
console.log("-Exercise 6.c: ");
function validateInteger(nro){
    if(nro % 1 ==0){
        return true;
    }else{
        return false;
    }
}
console.log(validateInteger("10"));

/*d)Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error
y retornar el número convertido a entero (redondeado).*/
console.log("-Exercise 6.d: ");
function sumaPlus(nro1, nro2){
    if(typeof nro1 !== "number" || typeof nro2 !== "number"){
        alert("Un parametro ingresado no es un numero");
        return NaN;
    }else if(validateInteger(nro1) && validateInteger(nro2)){
        return nro1+ nro2;
    }else {
        if(!(nro1 % 1 ==0)){
            alert(nro1+" no es un entero, es decimal. El mismo se redondeara.");
            nro1=Math.floor(nro1);     
        }
        if(!(nro2 % 1 ==0)){
            alert(nro2+" no es un entero, es decimal. El mismo se redondeara.");
            nro2=Math.floor(nro2);     
        }
        return nro1+ nro2;
    }
}
console.log(sumaPlus(1.3 , 6));

/*e)Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
 función probando que todo siga funcionando igual que en el apartado anterior. */
console.log("-Exercise 6.e: ");
function valida(nro1, nro2){
    if(!(nro1 % 1 ==0)){
        alert(nro1+" no es un entero, es decimal. El mismo se redondeara.");
        nro1=Math.floor(nro1);      
    }
    if(!(nro2 % 1 ==0)){
        alert(nro2+" no es un entero, es decimal. El mismo se redondeara.");
        nro2=Math.floor(nro2);       
    }
    return nro1+nro2;
}
function sumaPlusE(nro1, nro2){
    if(typeof nro1 !== "number" || typeof nro2 !== "number"){
        alert("Un parametro ingresado no es un numero");
        return NaN;
    }else if(validateInteger(nro1) && validateInteger(nro2)){
        return nro1+ nro2;
    }else {
        return valida(nro1, nro2);
    }
}
console.log(sumaPlusE(1 , 6.8));