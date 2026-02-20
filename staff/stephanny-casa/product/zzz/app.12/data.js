// manager

class Data {
    constructor() {
        this.loggedInUserId = null
    }

    setLoggedInUserId(userId) { //Guarda el usuario que acaba de iniciar sesión.
        this.loggedInUserId = userId // guarda el ID del usuario que acaba de iniciar sesión dentro del objeto Data, para poder usarlo después en otras funciones.
    }

    getLoggedInUserId() { // Devuelve el usuario que está actualmente conectado.
        return this.loggedInUserId
    }
}

//instance

export const data = new Data()
