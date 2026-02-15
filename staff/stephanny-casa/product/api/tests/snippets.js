// register user

!true && fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name": "Stephanny", "email": "stephanny@casa.com", "username": "stephannycasa", "password": "123123123", "passwordRepeat": "123123123"}'
})
    .then(res => {
        debugger
        const { status } = res

        if (status === 201)
            return
        
        return res.json()
            .then(body => {
                debugger
                const { error, message } = body
                
                console.error(error, message)
            })
    })
    .then(() => console.log('the end'))

// authenticate user

!true && fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"username": "stephannycasa", "password": "123123123"}'
})
    .then(res => {
        debugger
        const { status } = res

        if (status === 200)
            return res.json()
                .then(userId => { 
                    debugger
                    console.log(userId)
                })
        
        return res.json()
            .then(body => {
                debugger
                const { error, message } = body
                
                console.error(error, message)
            })
    })
    .then(() => console.log('the end'))

// change user email

!true && fetch('http://localhost:8080/users/email', {
    method: 'PATCH',
    headers: {
        Authorization: 'Basic user-0',
        'Content-Type': 'application/json'
    },
    body: '{"email": "stephanny@casa.com", "newEmail": "fanny@casa.com", "newEmailRepeat": "fanny@casa.com"}'
})
    .then(res => {
        debugger
        const { status } = res

        if (status === 204)
            return
    
        return res.json()
            .then(body => {
                debugger
                const { error, message } = body
                
                console.error(error, message)
            })
    })
    .then(() => console.log('the end'))


// change user password

!true && fetch('http://localhost:8080/users/password', {
    method: 'PATCH',
    headers: {
        Authorization: 'Basic user-0',
        'Content-Type': 'application/json'
    },
    body: '{"password": "123123123", "newPassword": "12345678", "newPasswordRepeat": "12345678"}'
})
    .then(res => {
        debugger
        const { status } = res

        if (status === 204)
            return
    
        return res.json()
            .then(body => {
                debugger
                const { error, message } = body
                
                console.error(error, message)
            })
    })
    .then(() => console.log('the end'))

// add pet

!true && fetch('http://localhost:8080/pets', {
    method: 'POST',
    headers: {
        Authorization: 'Basic user-0',
        'Content-Type': 'application/json'
    },
    body: '{"name": "Alo","birthdate": "2022-02-22", "weight": 13, "image": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTc0MXZmeWphNWlmM3IxamhxazB2cTZneDlheGVmMWRsejNicG84dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/j0QzDgFZRX2njRxxtP/giphy.gif"}'
})
    .then(res => {
        debugger
        const { status } = res

        if (status === 201)
            return
        
        return res.json()
            .then(body => {
                debugger
                const { error, message } = body
                
                console.error(error, message)
            })
    })
    .then(() => console.log('the end'))

// get pets

!true && fetch('http://localhost:8080/pets', {
    method: 'GET',
    headers: {
        Authorization: 'Basic user-0'
    }
})
    .then(res => {
        debugger
        const { status } = res

        if (status === 200)
            return res.json()
                .then(pets => {
                    debugger
                    console.log(pets)
                })
        
        return res.json()
            .then(body => {
                debugger
                const { error, message } = body
                
                console.error(error, message)
            })
    })
    .then(() => console.log('the end'))

// delete pet

!true && fetch('http://localhost:8080/pets/pet-1', {
    method: 'DELETE',
    headers: {
        Authorization: 'Basic user-0'
    }
})
    .then(res => {
        debugger
        const { status } = res

        if (status === 204)
            return
        
        return res.json()
            .then(body => {
                debugger
                const { error, message } = body
                
                console.error(error, message)
            })
    })
    .then(() => console.log('the end'))