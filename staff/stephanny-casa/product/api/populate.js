const { data, User, Pet } = require('./data')

data.insertUser(new User('user-' + data.usersCount, 'Stephanny Casa', 'stephanny@casa.com', 'stephannycasa', '123123123', 'regular'))
data.insertUser(new User('user-' + data.usersCount, 'Hemione Granger', 'hermione@granger.com', 'hermionegranger', '123123123', 'regular'))
data.insertUser(new User('user-' + data.usersCount, 'Harry Potter', 'harry@potter.com', 'harrypotter', '123123123', 'regular'))
data.insertUser(new User('user-' + data.usersCount, 'Ron Wesley', 'ron@wesley.com', 'ronwesley', '123123123', 'regular'))

data.insertPet(new Pet('pet-' + data.petsCount, 'user-0', 'Terry', '2025-08-02', 14.5, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHBiZ3QzaXpsOTB3czM1MjFpbnA2M2pwOWY0YjMxMTk5NXNjNHRpOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/j0QzDgFZRX2njRxxtP/giphy.gif'))

data.insertPet(new Pet('pet-' + data.petsCount, 'user-0', 'Chloe', '2024-06-03', 8, 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3enRqaTUxcDY5eGxoM3FsNXZxY3B1Y2xkanY5cmRxYnBxaWE1ejBjOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8CFKqeK9vks3C/giphy.gif'))
data.insertPet(new Pet('pet-' + data.petsCount, 'user-0', 'Zoe', '2022-05-05', 13, 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHZmMzg3bHBmMHlsMzAzeDBibDlpNjNvMWd5NmtlZnBsOWJqeG94OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1DqOFqULOqe5y/giphy.gif'))

data.insertPet(new Pet('pet-' + data.petsCount, 'user-1', 'Mirtle', '2025-10-02', 6, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnlkdGUxazQxMm5raG91cjU2bzk0ZHk1bzR1bHhnODdtcG9kd3BvbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/901mxGLGQN2PyCQpoc/giphy.gif'))

data.insertPet(new Pet('pet-' + data.petsCount, 'user-2', 'Hedwing', '2020-10-08', 9, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2ZiZmNuM3EwYWQyODh3Y3VtazJocnV3eWc3eXgxcGxnNHg4aHY1MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VdDW85LJRM7MY2Jwfu/giphy.gif'))

data.insertPet(new Pet('pet-' + data.petsCount, 'user-2', 'xavi', '2020-10-08', 7, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3VrNDBwMXRobDNxN2dkNHZ5dTFpdm5uZHdrMmZjdnJkamF4YjJsNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uLwolChOTYn4s/giphy.gif'))

data.insertPet(new Pet('pet-' + data.petsCount, 'user-2', 'Catalina', '2025-03-23', 6, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWYxc2U3d2RmOGo5cWtyMG92YnFpYnZvenpidGJkcWhobXNwNmRvbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NkjMuxGZkziUMZnBHW/giphy.gif'))

data.insertPet(new Pet('pet-' + data.petsCount, 'user-3', 'Scabbers', '2023-10-08', 3, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanFjenlteDZpdXIwOW84YmJxemZrbnU5YzZmaWw1Z3piZHkyMnRrcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Uyj61WtAOjiwCEVZbH/giphy.gif'))

data.insertPet(new Pet('pet-' + data.petsCount, 'user-3', 'mudblood', '2024-02-13', 6.2, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGEzbXR1a3Fod203cXVkcGw0bTY5dzVyMnR0ZWI2emJmdWJ2Z2p5bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/In0Lpu4FVivjISX9HT/giphy.gif'))



