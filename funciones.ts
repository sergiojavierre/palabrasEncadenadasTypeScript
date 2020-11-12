
const fs = require('fs')

const ultimaLetra = (palabra: string) : string => {
    return palabra[palabra.length-1]
}

const primeraLetra = (palabra: string) : string => {
    return palabra[0]
}

const escribePalabra = (palabra: string)  => {
    console.log("escribiendo "+palabra)
    let datos = palabra+"\n"

    fs.appendFile('palabras.txt',datos, err => {
        if(err){
            throw err
        }
    })
}

export {ultimaLetra, primeraLetra, escribePalabra}