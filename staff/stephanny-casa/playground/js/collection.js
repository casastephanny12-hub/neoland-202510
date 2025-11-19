var collection = {
    count: 0
}


collection.add = function(item){
    this[this.count] = item
    this.count++
}

/*
collection.add('Harry')
console.log(collection)

//count 0

collection.add('Hermione')
console.log(collection)

//count 1 

collection.add('Ron')
console.log(collection)

//count 2

//{0: 'Harry', 1: 'Hermione', 2: 'Ron', count: 3}

collection.remove = function (item) {
    for (var j = 0; j < this.count; j++)
    if (this[j] === item)
    delete this[j]
} 

collection.remove('Hermione')

//{0: 'Harry, 2: 'Ron', count: 3}

console.log(collection)
*/

collection.add('Harry')
collection.add('Hermione')
collection.add('Draco')
collection.add('Ron')
collection.add('Draco')

console.log(collection)

//{0: 'Harry', 1: 'Hermione', 2: 'Draco', 3: 'Ron', 4: 'Draco', count:5}

collection.removeFirst = function(item){
    for (var i = 0; i < this.count; i++)
    if (this[i] === item) {
        delete this[i]
        return
    }
}

collection.removeFirst('Draco')
console.log(collection)

//{0: 'Harry', 1: 'Hermione', 3: 'Ron', 4: 'Draco', count: 5}

collection.add('Hermione')

//{0: 'Harry', 1: 'Hermione', 3:'Ron', 4:'Draco', 5: 'Hermione', count: 6}


collection.update = function(target, replacement) {
    for (var j = 0; j < this.count; j++)
    if (this[j] === target) 
        this[j] = replacement
}

collection.update('Hermione', 'Mudblood')
console.log(collection)

//{0: 'Harry', 1: 'Mudblood', 3:'Ron', 4:'Draco', 5: 'Mudblood', count: 6}


collection.updateFirst = function(target, replacement){
    for (var k = 0; k < this.count; k++)
    if (this[k] === target){
        this[k] = replacement

        return
        
    }
}

collection.updateFirst('Mudblood', 'Hermione')
console.log(collection)

//{0: 'Harry', 1: 'Hermione', 3:'Ron', 4:'Draco', 5: 'Mudblood', count: 6}


