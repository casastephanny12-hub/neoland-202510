const { data, User, Pet } = require('./data')

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const URL_REGEX = /(www|http:|https:)+[^\s]+[\w]/
const ISODATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const USERID_REGEX = /^\user-[0-9]+$/
const PETID_REGEX = /^\pet-[0-9]+$/

class Logic {
    constructor() {
    }

    registerUser(name, email, username, password, passwordRepeat) {

        //parametros de los campos de entrada

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')
        if (!EMAIL_REGEX.test(email)) throw new Error('invalid email format')

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

    authenticateUser(username, password) {
        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        // comprobar si el usuario ya es existente y puede acceder

        let user = data.findUserByUsername(username) // debemos declarar la variable para guardar los datos que devolvera

        if (user === null) throw new Error('user not found')
        if (password !== user.password) throw new Error('wrong password') //usamos user.password para verifica la cotraseña del usuario

        return user.id
    }


    changeUserEmail(userId, email, newEmail, newEmailRepeat) {
        if (typeof userId !== 'string') throw new Error('invalid userId')
        if (!USERID_REGEX.test(userId)) throw new Error('invalid userId format')

        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')
        if (!EMAIL_REGEX.test(email)) throw new Error('invalid email format')


        if (typeof newEmail !== 'string') throw new Error('invalid newEmail type')
        if (newEmail.length < 6) throw new Error('invalid newEmail length')
        if (!EMAIL_REGEX.test(newEmail)) throw new Error('invalid newEmail format')


        if (typeof newEmailRepeat !== 'string') throw new Error('invalid newEmailRepeat type')
        if (newEmailRepeat.length < 6) throw new Error('invalid newEmailRepeat length')
        if (!EMAIL_REGEX.test(newEmailRepeat)) throw new Error('invalid newEmailRepeat format')

        if (newEmail !== newEmailRepeat) throw new Error('newEmail and newEmailRepeat dont match')

        const user = data.findUserById(userId)

        if (!user) throw new Error('user not found')

        if (user.email !== email) throw new Error('email dont belong to user')

        const otherUser = data.findUserByEmail(newEmail)

        if (otherUser) throw new Error('new email belongs to another user')

        user.email = newEmail
    }

    changeUserPassword(userId, password, newPassword, newPasswordRepeat) {
        if (typeof userId !== 'string') throw new Error('invalid userId')
        if (!USERID_REGEX.test(userId)) throw new Error('invalid userId format')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        if (typeof newPassword !== 'string') throw new Error('invalid newPassword type')
        if (newPassword.length < 8) throw new Error('invalid newPassword length')

        if (typeof newPasswordRepeat !== 'string') throw new Error('invalid newPasswordRepeat type')
        if (newPasswordRepeat.length < 8) throw new Error('invalid newPasswordRepeat length')

        if (newPassword !== newPasswordRepeat) throw new Error('newPassword and newPasswordRepear dont match')

        const user = data.findUserById(userId)

        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('incorrect password')

        user.password = newPassword
    }

    addPet(userId, name, birthdate, weight, image) {
        if (typeof userId !== 'string') throw new Error('invalid userId')
        if (!USERID_REGEX.test(userId)) throw new Error('invalid userId format')

        const user = data.findUserById(userId)
        if (user === null) throw new Error('user not found')

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof birthdate !== 'string') throw new Error('invalid birthdate type')

        if (!ISODATE_REGEX.test(birthdate)) throw new Error('invalid birthdate format')

        if (typeof weight !== 'number' || isNaN(weight)) throw new Error('invalid weight type')

        if (typeof image !== 'string') throw new Error('invalid image type')

        if (!URL_REGEX.test(image)) throw new Error('invalid image format')

        const pet = new Pet('pet-' + data.petsCount, userId, name, birthdate, weight, image)

        data.insertPet(pet)
    }

    getPets(userId) {
        if (typeof userId !== 'string') throw new Error('invalid userId')
        if (!USERID_REGEX.test(userId)) throw new Error('invalid userId format')

        const user = data.findUserById(userId)
        if (user === null) throw new Error('user not found')

        const pets = data.findPetsByUserId(userId)

        return pets
    }

    removePet(userId, petId) {

        if (typeof userId !== 'string') throw new Error('invalid userId')
        if (!USERID_REGEX.test(userId)) throw new Error('invalid userId format')
        if (typeof petId !== 'string') throw new Error('invalid pet-id type')
        if (!PETID_REGEX.test(petId)) throw new Error('invalid pet-id format')

        const user = data.findUserById(userId)
        if (user === null) throw new Error('user not found')

        const pet = data.findPetById(petId)

        if (pet === null) throw new Error('pet not found')

        if (pet.userId !== userId) throw new Error('user not owner of pet')

        const petIndex = data.pets.indexOf(pet)

        data.pets.splice(petIndex, 1)
    }

    getPet(userId, petId) {
        if (typeof userId !== 'string') throw new Error('invalid userId')
        if (!USERID_REGEX.test(userId)) throw new Error('invalid userId format')
        if (typeof petId !== 'string') throw new Error('invalid pet-id type')
        if (!PETID_REGEX.test(petId)) throw new Error('invalid pet-id format')

        const user = data.findUserById(userId)
        if (user === null) throw new Error('user not found')

        const pet = data.findPetById(petId)

        if (pet === null) throw new Error('pet not found')

        if (pet.userId !== userId) throw new Error('user not owner of pet')

        return pet


    }
}
//instance

const logic = new Logic()

module.exports = {
    logic
}