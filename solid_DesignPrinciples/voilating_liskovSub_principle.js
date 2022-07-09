// base class
class Bird{
    fly(){
        console.log('I can fly')
    }
}

class Duck extends Bird {
    quack(){
        console.log('quack quack...')
    }
}

/**📝: IMP Here the penguin class is not passing the liskov-sbstitution principle as the penguin class being as child/sub class cannot fly even when fly() is method in the base class Bird*/
class Penguin extends Bird{
    fly(){
        throw new Error('cannot fly')
    }
    swim(){
        console.log('I can swim')
    }
}

function makeBirdFly(bird){
    bird.fly()
}

const duck = new Duck()
const penguin = new Penguin()

makeBirdFly(duck)
makeBirdFly(penguin) // will throw error