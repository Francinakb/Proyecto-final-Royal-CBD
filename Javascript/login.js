// aplico login con then y catch, y tambien async await para simplicar lineas

const usernameCBD = "francina"
const passwordCBD = "12345"
const loginCBD = (username, password) => {
    return new Promise ((resolve, reject) => {
        usernameCBD == username && passwordCBD == password ? resolve("token")
        : reject("Error 401: Not authorized")
    })
}

loginCBD("francina", "1234")
.then((response) => {
    console.log(response)

}).catch((error) => {
    console.log(error)
})

const getToken = async () => {
const tokenCBD = await loginCBD("francina", "12345")
console.log(tokenCBD)
}

getToken()