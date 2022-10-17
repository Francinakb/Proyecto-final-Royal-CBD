// creo una constante con un arreglo, con objetos dentro, donde va a haber distintos productos

const listaProductos = [
    { nombre: "Aceite sublingual Premium", porcentajeCBD: "39,9%", contenido: "10ml", precio: 3749 },
    { nombre: "Aceite sublingual Royal Premium", porcentajeCBD: "39,9%", contenido: "30ml", precio: 6599 },
    { nombre: "Crema corporal para dolores musculares y articulares", porcentajeCBD: "39,9%", contenido: "50gr", precio: 2699 },
    { nombre: "Aceite sublingual Rojo", porcentajeCBD: "10%", contenido: "10ml", precio: 2649 }
]

// aplico spread

const listaProductos2 = [
    { nombre: "Aceite sublingual Premium2", porcentajeCBD: "39,9%", contenido: "10ml", precio: 3749 },
    { nombre: "Aceite sublingual Royal Premium2", porcentajeCBD: "39,9%", contenido: "30ml", precio: 6599 },
    { nombre: "Crema corporal para dolores musculares y articulares2", porcentajeCBD: "39,9%", contenido: "50gr", precio: 2699 },
    { nombre: "Aceite sublingual Rojo2", porcentajeCBD: "10%", contenido: "10ml", precio: 2649 }
]

const productos = [...listaProductos, ...listaProductos2]

const todosLosProductos = {
    ...productos
}

console.log(todosLosProductos)

// desestructuracion de array 

const [a, b, c, d] = listaProductos

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// desestructuracion de parametro

const unProducto = { 
    nombre: "Aceite sublingual Premium", 
    porcentajeCBD: "39,9%", 
    contenido: "10ml", 
    precio: 3749 
}
const desestructurar = (item) => {
    const {nombre, porcentajeCBD, contenido, precio} = item
    console.log(nombre, porcentajeCBD, contenido, precio)
}

desestructurar (unProducto)

// utilizo map() para poder modificar en un futuro, de ser necesario, la informacion, por ejemplo de los precios sin descuento

const listaPrecios = listaProductos.map((el) => el.precio)
console.log(listaPrecios)

const preciosSinDescuento = listaProductos.map((el) => {
    return {
        nombre: el.nombre,
        porcentajeCBD: el.porcentajeCBD,
        contenido: el.contenido,
        precio: el.precio * 1.25
    }
})

console.log(preciosSinDescuento)

// utilizo un find() que serviria para la busqueda de productos

const busqueda1 = listaProductos.find((el) => el.nombre === "Aceite sublingual Premium")
const busqueda2 = listaProductos.find((el) => el.nombre === "Aceite sublingual Royal Premium")
const busqueda3 = listaProductos.find((el) => el.nombre === "Crema corporal para dolores musculares y articulares")
const busqueda4 = listaProductos.find((el) => el.nombre === "Aceite sublingual Rojo")

// si se busca algun producto que no existe simplemente aparece undefined porque no esta en el array 

const busqueda5 = listaProductos.find((el) => el.nombre === "Aceite sublingual para Mascotas")

console.log(busqueda1)
console.log(busqueda2)
console.log(busqueda3)
console.log(busqueda4)
console.log(busqueda5)

// creo una class con un constructor para agregar un nuevo producto

class nuevoProducto {
    constructor(nombre, porcentajeCBD, contenido, precio) {
        this.nombre = nombre
        this.porcentajeCBD = porcentajeCBD
        this.contenido = contenido
        this.precio = precio
    }
}

const nuevoIngreso = new nuevoProducto("Capsula fish Oil", "39,9%", "60u", 7349)

console.log(nuevoIngreso)

//login 

function login(event) {
    event.preventDefault()
    console.log(event)
    let formulario = document.getElementById("login")
    console.dir(formulario)
    let valueUsername = formulario.username.value
    let valuePassword = formulario.password.value
    console.log(valueUsername)
    console.log(valuePassword)
    const token = generarToken(valueUsername, valuePassword)
    localStorage.setItem("token", token)
}

function generarToken(username, password) {
    return username + password
}

function tokenExistente() {
    if (localStorage.getItem("token") !== null) {
        return true
    } else {
        return false
    }
}

















































































































































































