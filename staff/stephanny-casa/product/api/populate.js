import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        const db = client.db('product')

        const users = db.collection('users')
        const pets = db.collection('pets')

        //users.find({}).toArray()
        //.then( users => console.table(users))
        //.catch(error => console.error(error))

        //users.insertOne({ name: 'Harry Potter', email: 'harry@potter.com', username: 'harrypotter', password: '123123123' })
          //  .then(result => console.log(result))
            //.catch(error => console.error(error))

        //users.updateOne({ _id: new ObjectId('69af229687d6f5780a7c2908')}, { $set: {password: '124124124'} })
        //.then(result => console.log(result))
        //.catch(error => console.error(error))

        //users.deleteOne({ _id: new ObjectId('69af219287d6f5780a7c2907')})
        //.then(result => console.log(result))
        //.catch(error => console.error(error))

        //users.findOne({ _id: new ObjectId ('69af233a87d6f5780a7c2909')})
        //.then(result => console.log(result))
        //.catch(error => console.error(error))

        //users.find({ name: /H/ }).toArray()
        //.then( users => console.table(users))
        //.then( users => console.log(users))
        //.catch(error => console.error(error))

        //pets.insertOne({ userId: new ObjectId ('69af233a87d6f5780a7c2909'), name: 'chichi', birthdate: new Date('2023-02-01'), weight: 4, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2g0b3F6b2sxOWhlaDZxZjBpazBjdTh6Nm12dms4eHB2dHd3ancwYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/b6roFb3iFdoPu/giphy.gif'})
        //.then( result => console.log(result))
        //.catch(error => console.error(error))

       // pets.deleteMany({ userId: new ObjectId ('69af219287d6f5780a7c2907') })
        //.then( result => console.log(result))
        //.catch(error => console.error(error))


    })
    .catch(error => console.error(error))
