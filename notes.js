


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

