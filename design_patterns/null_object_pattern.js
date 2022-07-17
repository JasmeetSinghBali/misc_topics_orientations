class User{
    constructor(id,name){
        this.id = id
        this.name = name
    }

    hasAccess(){
        return this.name === 'John'
    }
    
    
}

// 🚀 null object class i.e null version of the User(object) class
class NullUser{
    // default value instead of null
    constructor(){
        this.id = -1
        this.name = 'Guest'
    }

    // default the Guest wont have any access hence return false always
    hasAccess(){
        return false
    }
    
    
}

const users = [
    new User(1, 'John'),
    new User(2, 'Wick')
 ]
 function getUser(id){
    // ❌the wrong way
    //return users.find(user=>user.id===id)
    // 🚀the right way
    const user = users.find(user=>user.id === id)
    if(user == null){
        // return the NullUser instance as it is a guest as it does not exist in users array(DB)
        return new NullUser()
    }
    else{
        return user
    }
}

 
 function printUser(id){
    const user = getUser(id)

    // ⛔ [without null_object approach] wrong way of checking user or guest
    /**we check wheather the user is not null i.e is not guest , if yes then print out the current user */
    // let name = 'Guest'
    // if(user!=null && user.name !=null) name = user.name
    // console.log('Hello '+name)

    // ✔ right way
    console.log("Hello "+ user.name)

    // ⛔ [without null_object approach] wrong way of checking user have access or not 
    /**we check wheather the user has access or not along with checking not null for user and user.hasAccess*/
    // if(user!=null && user.hasAccess !=null && user.hasAccess()){
    //     console.log("You shall pass!!")
    // }else{
    //     console.log("You shall not pass....")
    // }

    // ✔ right way
    if(user.hasAccess()){
        console.log("You shall pass!!")
    }else{
        console.log("You shall not pass....")
    }

 }

printUser(1)
printUser(2)
printUser(3)