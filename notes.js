


//Classes

function objectBuilder(name,age){
    return {
        name: name,
        age: age,
        sayHello: function(){
            console.log('Hello')
        }
    }
}

let jenny = objectBuilder('Jenny',89)
jenny.sayHello('hello')

// Parameters are the place holders when the function is defined
// arguments are the data 

// a class is a set of instructions on how to build an object

//contructor initializes the object

class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let jerry = new User()

// jerry.age = 68
// jerry.name = 'jerry'

console.log(jerry)

let cat = {
    name: 'Whisker',
    age: 12,
    color: 'White',
    temperment: 'Bitter'
}

class Cat {
    constructor(name,age,color,temperment) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.temperment = temperment;
    }

    sayMeow() {
        console.log('meow')
    }
}

let cat1 = new Cat('maggie', 12, 'black', 'sad')
console.log(cat1)
console.log(cat1.sayMeow())


var arr1 = [15,17,22,4,3,35,11,12,38,8];
// Create a function that will average all the even or odd numbers in an array.
function averageArray(arr,value){
  var evens = []
  var odds = []
  for( i = 0; i < arr.length; i++){
    if(value === 'evens' && arr[i]%2 === 0){
      evens.push(arr[i])
    }else if(value === 'odds' && arr[i]%2 !== 0){
      odds.push(arr[i])
    }
  }return evens
}


console.log(averageArray(arr1,'evens'))
 var a = averageArray(arr1,'evens')

console.log(a)

var total = a.reduce((total,element) => total + element)
console.log(total)

var str = '50000'
var JI = str.split('')
console.log(JI)
