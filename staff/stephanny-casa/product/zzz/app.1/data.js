
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

Data.prototype.setLoggedInUserId = function(userId){
    this.loggedInUserId = userId
}

Data.prototype.getLoggedInUserId = function(){
    return this.loggedInUserId
}

Data.prototype.insertPet = function (pet) {
    this.pets.push(pet)
    this.petsCount++
}

//instance

const data = new Data()
