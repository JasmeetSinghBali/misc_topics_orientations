// base class -1
class FlyingBird{
    fly(){
        console.log('I can fly')
    }
}
// base class -2
class SwimmingBird{
    swim(){
        console.log('I can swim')
    }
}

class Duck extends FlyingBird {
    quack(){
        console.log('quack quack...')
    }
}


class Penguin extends SwimmingBird{}

function makeFlyingBirdFly(bird){
    bird.fly()
}
function makeSwimmingBirdSwim(bird){
    bird.swim()
}

const duck = new Duck()
const penguin = new Penguin()

makeFlyingBirdFly(duck)
makeSwimmingBirdSwim(penguin) // will throw error