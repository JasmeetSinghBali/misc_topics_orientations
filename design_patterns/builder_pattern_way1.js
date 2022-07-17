// Address-PART [used by User class] essentially a component dependency for User class
class Address {
    constructor(zip, street){
        this.zip = zip
        this.street = street
    }
}

// main class [to build new user object] comprise of more than 1 piece to create a new user instance
class User {
    constructor(name){
        this.name = name
    }
}

// 🚀 the right way [builder pattern]
class UserBuilder{
    constructor(name){
        this.user = new User(name)
    }

    /**set age of the user */
    setAge(age){
        this.user.age = age
        //📝: IMP return the UserBuilder instance so that it can be chained together with other methods
        return this
    }

    setPhone(phone){
        this.user.phone = phone
        return this
    }

    setAddress(address){
        this.user.address = address
        return this
    }

    /**returns the user object with attached methods on it already */
    build(){
        return this.user
    }
}

let builder = new UserBuilder('John')
const newUser = builder.build()

let builder2 = new UserBuilder('Wick').setAge(10)
const newUser2 = builder2.build()

/**🚀 now the methods can be chained to the UserBuilder object */
let newUser3 = new UserBuilder('Walter').setPhone('9999999').setAge(24).setAddress({street: '123', city: 'NY'}).build()


console.log("\n")
console.log(newUser)
console.log(newUser2)
console.log(newUser3)

