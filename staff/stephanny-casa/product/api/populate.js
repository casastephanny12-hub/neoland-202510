import bcrypt from "bcryptjs"

import { database, UserModel, PetModel } from "./models.js"

database.connect('mongodb://localhost:27017/product')
    .then(() => bcrypt.hash('123123123', 10))
    .then(hash => {
        const wendy = new UserModel({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: hash })

        const peter = new UserModel({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: hash })

        const campanilla = new UserModel({ name: 'Campanilla', email: 'campa@nilla.com', username: 'campanilla', password: hash })

        const mickey = new UserModel({ name: 'Mickey Mouse', email: 'mickey@mouse.com', username: 'mickeymouse', password: hash })

        const woody = new UserModel({ name: 'Woody', email: 'sheriff@woody.com', username: 'woody', password: hash })

        const buzz = new UserModel({ name: 'Buzz', email: 'buzz@lightyear.com', username: 'buzzlightyear', password: hash })

        return Promise.all([wendy.save(), peter.save(), campanilla.save(), mickey.save(), woody.save(), buzz.save()])
            .then(([wendy, peter, campanilla, mickey, woody, buzz]) => {
                console.log(wendy, peter, campanilla, mickey, woody, buzz)

                const chloe = new PetModel({ owner: wendy.id, name: 'Chloe', birthdate: new Date('2023-04-28'), weight: 6, image: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Ymk4NTZjMHhuMnF0a2d4Mzc1bGt5Y3FmdmRlb25saTB3Y2d0Z2xxOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vFKqnCdLPNOKc/giphy.gif' })

                const terry = new PetModel({ owner: peter.id, name: 'Terry', birthdate: new Date('2020-02-02'), weight: 14, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2tldnNveXZkYmZscTFhaGZqeXl6bWtyaDh5ZTd4aDY4am80NnNvbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9rgVLYnPzzUpLsaaxN/giphy.gif' })

                const ody = new PetModel({ owner: campanilla.id, name: 'Ody', birthdate: new Date('2022-08-02'), weight: 5, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWl5ZzBpdGc4eGVyeW41YWdzYnhrenhqcjRiaXRzdWVnaW11dnVmdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uLwolChOTYn4s/giphy.gif' })

                const pluto = new PetModel({ owner: mickey.id, name: 'Pluto', birthdate: new Date('2018-12-12'), weight: 18, image: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZnQ3ZTU4ZG1zYzJtaHZ5dWVyMGF0d3AxM2ZoeWJxYWt1ejR1b2k2aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nUFniDK7VyCWUKsnjR/giphy.gif' })

                const aldo = new PetModel({ owner: mickey.id, name: 'Aldo', birthdate: new Date('2022-11-24'), weight: 7, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJidDJheDhneThhb2ZkMGtzaWRlcWh0NGQ3MHR6OTQyem9penZiOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2bCecmd6xsMHNhzTJL/giphy.gif' })

                const tiroalblanco = new PetModel({ owner: woody.id, name: 'Tiroalblanco', birthdate: new Date('2017-10-02'), weight: 30, image: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M2VlNDFhaWY0bTZyZjNkdW01dWRjdnBuZjU1Y3V4b2Y4djRxYzFteSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wKdJy5gnLDb7ILmBu9/giphy.gif' })

                const malandrita = new PetModel({ owner: buzz.id, name: 'Malandrita', birthdate: new Date('2024-03-12'), weight: 4, image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnN0MTVhY2czM2U2bTIwNGprMWx5b2pzZ21sNm5zaDJ2NG83cW0xaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/901mxGLGQN2PyCQpoc/giphy.gif' })

                return Promise.all([chloe.save(), terry.save(), ody.save(), pluto.save(), aldo.save(), tiroalblanco.save(), malandrita.save()])
            })

            .then(([chloe, terry, ody, pluto, aldo, tiroalblanco, malandrita]) => console.log(chloe, terry, ody, pluto, aldo, tiroalblanco, malandrita))
    })
    .catch(error => console.error(error))
    .finally(() => database.disconnect())

