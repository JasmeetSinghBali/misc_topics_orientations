class Entity {
    constructor(name){
        this.name= name
    }
}
/**Act as mover interface */
const mover = {
    move(){
        console.log(`${this.name} moved`)
    }
}
/**Act as attacker interface */
const attacker= {
    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`)
        targetEntity.takeDamage(this.attackDamage)
    }
}
/**Act as hasHealth interface */
const hasHealth = {
    takeDamage(amount){
        this.health-=amount
        console.log(`${this.name} has ${this.health} health remaining..`)
    }
}


class Character extends Entity{
    constructor(name, attackDamage,health){
        // access name from Entity parent class here
        super(name)
        this.attackDamage = attackDamage
        this.health = health
    }
}

/**🎯: IMP take the prototype i.e defination of the class and adding in the segregated interfaces attacker,hasHealth , mover to it i.e our Character class*/
Object.assign(Character.prototype, mover)
Object.assign(Character.prototype, attacker)
Object.assign(Character.prototype, hasHealth)


class Wall extends Entity{
    constructor(name,health){
        super(name)
        this.health = health
    }
}

/**🎯didnt add the mover or attacker as Wall cannot do that */
Object.assign(Wall.prototype,hasHealth)

class Turret extends Entity{
    constructor(name,attackDamage){
        // inherits the name and health initialized in the base Entity class inside Wall sub class
        super(name)
        this.attackDamage= attackDamage
    }
}

Object.assign(Turret.prototype,attacker)


const turret = new Turret('Turret',5)
const character = new Character('Character',3,100)
const wall = new Wall('Wall',200)

turret.attack(character)
character.move()
character.attack(wall)
turret.move() // will throw error which is good