import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        const db = client.db('product')

        const users = db.collection('users')

        //users.find({}).toArray()
        //.then( users => console.table(users))
        //.catch(error => console.error(error))

        //users.insertOne({ name: 'Harry Potter', email: 'harry@potter.com', username: 'harrypotter', password: '123123123' })
          //  .then(result => console.log(result))
            //.catch(error => console.error(error))

        //users.updateOne({ _id: new ObjectId('69af229687d6f5780a7c2908')}, { $set: {password: '124124124'} })
        //.then(result => console.log(result))
        //.catch(error => console.error(error))

        //users.deleteOne({ _id: new ObjectId('69af236987d6f5780a7c290a')})
        //.then(result => console.log(result))
        //.catch(error => console.error(error))

        //users.findOne({ _id: new ObjectId ('69af233a87d6f5780a7c2909')})
        //.then(result => console.log(result))
        //.catch(error => console.error(error))

        users.find({ name: /H/ }).toArray()
        //.then( users => console.table(users))
        .then( users => console.log(users))
        .catch(error => console.error(error))

    
    })
    .catch(error => console.error(error))
