1- Creo la funcion. Ejemplo: 

 function User (id, name, surname, username, password, role){
            this.id = id
            this.name = name
            this.surname = surname
            this.username = username
            this.password = password
            this.role = role
        }

2- Lo añado a la funcion base de datos el cual sera un Array donde almacenare toda la informacion segun la funcion. Ejemplo:

 function Database() {
            this.users = []
            this.vaccines = []
            this.owners = []
            this.pets = []
        }

3- Creo una funcion para añadir datos en el array mencionado en pto 2.  Ejemplo: 

  Database.prototype.addUser = function (user){
            this.users.push (user)
        }

4- Para poder rellenar los datos del usuario, debo añadir el usuario indicando los datos que he mencionado en el pto 1. Ejemplo: 

 database.addUser(new User('user-1', 'Peter', 'Pan', 'peterpan', '123123123', 'auxiliar')) 

 // id, nombre, surname, username, password, role