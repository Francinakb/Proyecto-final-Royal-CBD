// borre el html de productos para corroborar que funciona fetch
// traigo los productos desde un json local

const productosCBD = document.getElementById("divProductos")

fetch('../productoscbd.json')
    .then ((res) => res.json())
    .then((data) => {

        data.forEach((el) => {
            const li = document.createElement('li')
            li.innerHTML = `
            <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
    <img src=${el.img} alt="productos" width="180" height="160">
    <div>
        <h3 class="fs-5 mt-4 px-4 pb-1 text-success" id="productosDispojnibles">${el.nombre}</h3>
        
        <div id="content${el.id}">
            <button id="suma${el.id}" class="btn btn-outline-success m-2" type="button" >Comprar</button>
            <button id="resta${el.id}" class="btn btn-outline-success m-2" type="button" >Sacar del
                carrito</button>
            <h4 id="cant${el.id}">${el.cantidad}</h4> 
        </div>

        <h4 class="fs-5 mt-4 px-4 pb-1">$${el.precio}</h4>
        <p class="px-4">${el.descripcion}</p>
    </div>
</div>
            `

            productosCBD.appendChild(li)


            let Suma = document.getElementById(`suma${el.id}`)
        let Resta = document.getElementById(`resta${el.id}`)
        let cant = document.getElementById(`cant${el.id}`)

        Suma.onclick = (e) => {
            e.preventDefault()
            cant.textContent = el.cantidad = el.cantidad + 1
            // Agrego notificaciones en sumar o restar un producto con toastify 
            Toastify({
                text: "Sumaste un producto!",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
        }
        Resta.onclick = (e) => {

            e.preventDefault()
            Toastify({
                text: "Sacaste un producto!",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #c01313, #d87575)",
                },
            }).showToast();
            // operador ternario
            cant.textContent = el.cantidad = el.cantidad <= 0 ? el.cantidad = 0 : el.cantidad - 1
            cant.textContent = el.cantidad = el.cantidad <= 0 ? el.cantidad = 0 : el.cantidad - 1
        }
        })
    })












