var harry = {
    name: 'Harry'
}

harry.salute = function(to) {
    return this.name + ': Hello,' + to.name + '!'
}

/*
console.log (henry.salute('Hermione'))
// Harry : Hello, Hermione!

console.log (henry.salute('Ron'))

// Harry: Hello, Ron! 
*/

var hermione = {
    name: 'Hermione'
}

hermione.salute = harry.salute

/*

console.log(hermione.salute('Harry'))

//Hermione: Hello, Harry! 

console.log(hermione.salute('Ron'))

//Hermione: Hello, Ron! 

*/

var ron = {
    name: 'Ron'
}

ron.salute = hermione.salute

console.log(harry.salute(hermione))
console.log(hermione.salute(ron))
console.log(ron.salute(harry))



/*

STACK                                                  

name     value
---------------
harry     undefined
henry     @1
hermione  @3
ron       @4



HEAP

ref       value
----------------
@1        {name: 'Harry', salute @2}
@2        function(to){....}
@3        {name: 'Hermione', salute @2}
@4        {name: 'Ron', salute @2}


*/

