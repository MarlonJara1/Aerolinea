// const { get } = require("express/lib/response")


const form = document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const salida = new Date(document.getElementById('salida').value) 
    const regreso = new Date(document.getElementById('regreso').value) 
    let fecha = new Date()
    
    if(salida < fecha || regreso < salida){
        alert('Error: Fecha invalida')
    }
    else if(salida > regreso){
        alert('Error: Fecha invalida')
    }
    else{
        alert('Registro exitoso')
    }
})

    


