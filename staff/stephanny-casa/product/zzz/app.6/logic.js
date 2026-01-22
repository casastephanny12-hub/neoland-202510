class Logic {
    constructor() {
    }

    registerUser(name, email, username, password, passwordRepeat) {

        //parametros de los campos de entrada

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')

        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        if (typeof passwordRepeat !== 'string') throw new Error('invalid passwordRepeat type')
        if (passwordRepeat.length < 8) throw new Error('invalid passwordRepeat length')

        if (password !== passwordRepeat) throw new Error('passwords do not match')

        // verificar que el usuario y email ya existe

        let user = data.findUserByEmail(email) // declaración variable

        if (user !== null) throw new Error('user email already exits')

        user = data.findUserByUsername(username) // ya declaramos la variable por lo tanto no se repite el let

        if (user !== null) throw new Error('user username already exits')

        // si pasa estas reglas de que no existe el usuario, lo crea (new user construye un objeto nuevo en el array, es decir registra usuario)

        user = new User('user-' + data.usersCount, name, email, username, password, 'regular') // role se pone regular y luego podra cambiarse

        data.insertUser(user)
    }

    loginUser(username, password) {
        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        // comprobar si el usuario ya es existente y puede acceder

        let user = data.findUserByUsername(username) // debemos declarar la variable para guardar los datos que devolvera

        if (user === null) throw new Error('user not found')
        if (password !== user.password) throw new Error('wrong password') //usamos user.password para verifica la cotraseña del usuario

        data.setLoggedInUserId(user.id)
    }

    logoutUser() {
        data.setLoggedInUserId(null)
    }

    addPet(name, birthdate, weight, image) {

        if (data.getLoggedInUserId() === null) throw new Error('user not logged in')

        const user = data.findUserById(data.getLoggedInUserId())
        if (user === null) throw new Error('user not found')

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof birthdate !== 'string') throw new Error('invalid birthdate type')

        const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!isoDateRegex.test(birthdate)) throw new Error('invalid birthdate format')

        if (typeof weight !== 'number' || isNaN(weight)) throw new Error('invalid weight type')

        if (typeof image !== 'string') throw new Error('invalid image type')

        const urlRegex = /(www|http:|https:)+[^\s]+[\w]/
        if (!urlRegex.test(image)) throw new Error('invalid image format')

        const pet = new Pet('pet-' + data.petsCount, data.getLoggedInUserId(), name, birthdate, weight, image)

        data.insertPet(pet)
    }

    getPets() {
        if (data.getLoggedInUserId() === null) throw new Error('user not logged in')

        const user = data.findUserById(data.getLoggedInUserId())
        if (user === null) throw new Error('user not found')

        const pets = data.findPetsByUserId(data.getLoggedInUserId())

        return pets
    }

    deletePet(petId) {

        console.log('petId recibido:', petId, typeof petId)

        if (data.getLoggedInUserId() === null) throw new Error('user not logged in')

        const user = data.findUserById(data.getLoggedInUserId())
        if (user === null) throw new Error('user not found')

        if (typeof petId !== 'string') throw new Error('invalid pet-id type')

        const petIdRegex = /^\pet-[0-9]+$/
        if (!petIdRegex.test(petId)) throw new Error('invalid pet-id format')

        const pet = data.findPetById(petId)

        if (pet === null) throw new Error('pet not found')

        if (pet.userId !== data.getLoggedInUserId()) throw new Error('user not owner of pet')

        const petIndex = data.pets.indexOf(pet)

        data.pets.splice(petIndex, 1)
    }
}
//instance

const logic = new Logic()