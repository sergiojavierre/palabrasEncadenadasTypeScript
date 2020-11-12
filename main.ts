const readline = require('readline-sync')

import {ultimaLetra, primeraLetra, escribePalabra} from './funciones'

//variables de palabras
let palabra = "hola"
let palabraNueva = ""
let acierto = true
let palabrasUsadas = []

//bucle que se repite mientras se cumple la condición

do{
    console.log(palabra)
    palabraNueva = readline.question('Introduce: ')
    if(
        ultimaLetra(palabra) == primeraLetra(palabraNueva) && 
        !palabrasUsadas.includes(palabraNueva))
        {
        palabra = palabraNueva
        escribePalabra(palabra)
        palabrasUsadas.push(palabra)
    }
    else{
        acierto = false
        console.log("Has perdido")
    }
} while(acierto)

