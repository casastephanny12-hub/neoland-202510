// manager

class Data {
    setLoggedInToken(token) {
        sessionStorage.token = token 
    }

    getLoggedIntoken() { 
        return sessionStorage.token
    }

    removeLoggedIntoken() {
        delete sessionStorage.token
    }
}

//instance

export const data = new Data()
