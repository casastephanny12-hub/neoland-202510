
//models 

function User(id, name, email, username, password, email, role) {
    this.id = id
    this.name = name
    this.email = email
    this.username = username
    this.password = password
    this.role = role
}

function Pet(id, userId, /*chip,*/ name, /*gender,*/ birthdate, weight /*species, race, colors*/, image) {
    this.id = id
    this.userId = userId
    this.name = name
    this.birthdate = birthdate
    this.weight = weight
    this.image = image
    /*this.chip = chip*/
    /*this.gender = gender*/
    /*this.species = species
    this.race = race
    this.colors = colors*/
}

// manager

function Data() {
    this.users = []
    this.usersCount = 0
    this.pets = []
    this.petsCount = 0
    this.loggedInUserId = null
}

Data.prototype.insertUser = function (user) {
    this.users.push(user)
    this.usersCount++
}

Data.prototype.findUserByEmail = function (email) {
    for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i]
        if (user.email === email) return user
    }

    return null
}

Data.prototype.findUserByUsername = function (username) {
    for (let i = 0; i < this.users.length; i++) {

        const user = this.users[i]

        if (user.username === username) return user
    }

    return null
}

Data.prototype.findUserById = function (id) {
    for (let i = 0; i < this.users.length; i++) {

        const user = this.users[i]
        if (user.id === id) return user
    }
    return null
}

Data.prototype.setLoggedInUserId = function (userId) { //Guarda el usuario que acaba de iniciar sesión.
    this.loggedInUserId = userId // guarda el ID del usuario que acaba de iniciar sesión dentro del objeto Data, para poder usarlo después en otras funciones.
}

Data.prototype.getLoggedInUserId = function () { // Devuelve el usuario que está actualmente conectado.
    return this.loggedInUserId
}

Data.prototype.insertPet = function (pet) {    //
    this.pets.push(pet)
    this.petsCount++
}

Data.prototype.findPetsByUserId = function (userId) {

    const foundPets = []

    for (let i = 0; i < this.pets.length; i++){

        const pet = this.pets[i] // Creamos una variable llamada pet, y le asignamos la mascota que está en la posición i del array this.pets. Así podemos mirarla y comprobar si pertenece al usuario que estamos buscando.

    if (pet.userId === userId) //  El bucle revisa cada mascota.Si la mascota que estamos mirando (pet) tiene un userId que es igual al userId que buscamos, entonces la condición es verdadera.Y si es verdadera, esa mascota se guarda dentro del array foundPets.    
        foundPets.push(pet)
}

return foundPets

}

//instance

const data = new Data()
