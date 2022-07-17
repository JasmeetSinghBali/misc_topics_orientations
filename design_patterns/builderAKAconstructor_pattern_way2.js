class Address {
    constructor(zip, street){
        this.zip = zip
        this.street = street
    }
}


class User {
    // passsing optional param as {age,phone,address}
    // while ={} will make sure if we only pass name then automatically the second param will be empty object
    constructor(name, {age=0,phone='noNumber',address='noAddress'}={}){
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user1 = new User('John',{age:10})
console.log(user1)

let user2 = new User('John',{age:10, phone:'1111', address: '123 NY'})
console.log(user2)





