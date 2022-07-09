// 🎯: IMP COMPOSITION 

/**Now this swimmer functionality can be added to any new object/monster without the need to duplicate this */
function swimmer({name}){
    return{
        swim: () => console.log(`${name} swam`)
    }
}
function flyer({name}){
    return{
        fly: () => console.log(`${name} flew`)
    }
}
function attackerAndWalker({name}){
    return{
        attack: () => console.log(`${name} attacked`),
        walk: () => console.log(`${name} walked`)
    }
}

function swimmingMonsterCreator(name){
    const monster = {name:name}
    return {
        // copy the existing props on monster and adds to this returned object
        ...monster,
        ...swimmer(monster)
    }
}

/**A monster that can fly and swim */
function flyingSwimmingMonsterCreator(name){
    const monster = {name: name}
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }
}

/**A monster that can fly,swim,attack,walk basically the boss 😢*/
function bossMonsterCreator(name){
    const monster = {name: name}
    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster),
        ...attackerAndWalker(monster),
    }
}

const obj = bossMonsterCreator('Monster')
obj.swim()
obj.fly()
obj.attack()
obj.walk()