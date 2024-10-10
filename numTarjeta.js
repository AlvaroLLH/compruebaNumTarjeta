"use strict";
// Álvaro Llamas Huerta

    /*
    Queremos verificar si un número de 16 dígitos introducido por el usuario es un número
    válido de tarjeta de crédito. Para ello, investiga sobre el algoritmo de Luhn.
    */

    // Función que verifica si el número de 16 dígitos es correcto
    function verificarNumeroTarjeta(numero) {
        
        // Pasamos el número a cadena para poder trabajar con los dígitos
        let numeroStr = numero.toString();

        // Validamos que el número tenga 16 dígitos
        if(numeroStr.length !== 16){
            return false;
        }

        // Declaración de variables
        let suma = 0;
        let esDoble = false; // Para saber si debemos duplicar el dígito

        // Recorremos los dígitos de derecha a izquierda
        for (let i = numeroStr.length; i >= 0; i--) {
            
            let digito = parseInt(numeroStr[i]); // Pasamos a entero el dígito

            // Si debemos duplicar el dígito (posiciones impares desde derecha)
            if(esDoble) {
                digito *= 2;

                if(digito > 9){
                    digito -= 9; // Si el resultado es mayor de 9, restamos 9
                }
            }

            // Sumamos el dígito (modificado o no) a la suma total
            suma += digito;

            // Cambiamos el valor de esDoble (se alterna en cada iteración)
            esDoble = !esDoble;
            
        }

        // Si la suma es múltiplo de 10, el número es válido
        return suma % 10 == 0;

    }

    // Llamamos a la función y le pasamos un número
    let numeroTarjeta = 4539148803436467;
    let correcto = verificarNumeroTarjeta(numeroTarjeta); // Devuelve true o false

    // Mensaje dependiente de si el número es o no correcto
    if(correcto == true){
        document.write("El número " + numeroTarjeta + " es correcto");
    } else {
        document.write("El número " + numeroTarjeta + " es incorrecto");
    }