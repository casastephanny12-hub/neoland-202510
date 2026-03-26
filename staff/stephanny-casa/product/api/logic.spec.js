import { expect } from "chai";

import bcrypt from 'bcryptjs'

import { database } from "./models.js";

import { logic } from './logic.js'
import { data, UserData, PetData } from "./data.js";
import { CredentialError, DuplicityError, ExistenceError } from "./errors.js";

describe('logic', () => {
    before(() => database.connect(process.env.TEST_DB_URL))

    let hashed = null

    beforeEach(() => Promise.all([
        data.deleteAllUsers(),
        data.deleteAllPets(),
        bcrypt.hash('123123123', 10).then(hash => hashed = hash)
    ]))

    describe('registerUser', () => {
        it('succeds on a new user', () => {
            return logic.registerUser('Hermione Granger', 'hermione@granger.com', 'hermione', '123123123', '123123123')
            .then(() => data.findUserByEmail('hermione@granger.com'))
            .then(userData => {
                expect(userData).to.exist
                expect(userData.name).to.equal('Hermione Granger')
                expect(userData.email).to.equal('hermione@granger.com')
                expect(userData.username).to.equal('hermione')

                return bcrypt.compare('123123123', userData.password)
            })
            .then(match => expect(match).to.be.true)
        })
    })


    it('fails on existing user with same email', () => {
        let caught = null

        return data.insertUser(new UserData(null, 'Hermione Granger', 'hermione@granger.com','hermione2', hashed, null, 'regular'))
        .then(() => logic.registerUser('Hermione Granger', 'hermione@granger.com','hermione', '123123123', '123123123'))
        .catch(error => caught = error)
        .finally(() => {
            expect(caught).to.be.instanceOf(DuplicityError)
            expect(caught.message).to.equal('user email already exists')
        })
    })

    it('fails on existing user with same username', () => {
        let caught = null

        return data.insertUser(new UserData(null, 'Hermione Granger', 'hermione@granger2.com','hermione', hashed, null, 'regular'))
        .then(() => logic.registerUser('Hermione Granger', 'hermione@granger.com','hermione', '123123123', '123123123'))
        .catch(error => caught = error)
        .finally(() => {
            expect(caught).to.be.instanceOf(DuplicityError)
            expect(caught.message).to.equal('user username already exists')
        })
    })

    describe('authenticateUser', () => {
        it('succeeds on existing user', () => {
            return data.insertUser(new UserData(null, 'Hermione Granger','hermione@granger.com','hermione', hashed, null, 'regular'))
            .then(() => logic.authenticateUser('hermione', '123123123'))
            .then(userId => {
                expect(userId).to.be.a.string
                expect(userId).to.have.lengthOf(24)
            })
        })

        it('fails on non existing user', () => {
            let caught = null
            
            return logic.authenticateUser('hermione', '123123123')
            .catch(error => caught = error)
            .finally(() => {
                expect(caught).to.be.instanceOf(ExistenceError)
                expect(caught.message).to.equal('user not found')
            })
        })

        it('fails on existing user but wrong password', () => {
            let caught = null

            return data.insertUser(new UserData(null, 'Hermione Granger', 'hermione@granger.com', 'hermione', hashed, null, 'regular'))
            .then(() => logic.authenticateUser('hermione', '123123123_'))
            .catch(error => caught = error)
            .finally(() => {
                    expect(caught).to.be.instanceOf(CredentialError)
                    expect(caught.message).to.equal('wrong password')
                })
        })
    })

    describe('changeUserEmail', () => { })

    afterEach(() => Promise.all([
        data.deleteAllUsers(),
        data.deleteAllPets()
    ]))

    after(() => database.disconnect())
})

