// utilizo sweet alert para una bienvenida al inicio

function bienvenida() {

    swal("Ingrese su nombre de usuario", {
        content: "input",
    })
        .then((value) => {
            swal(`Bienvenidx ${value}!`)
        })
}

bienvenida()





























// let nuevoUsuario = prompt("Ingrese nombre de usuario")
// if (nuevoUsuario == "") {
//     alert("No ingresaste un nombre de usuario")
// } else {
//     alert("Su nuevo nombre de usuario es " + nuevoUsuario)
// }





